/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* ===== MENU SHOW ===== */
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ===== MENU HIDDEN ===== */
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault(); 

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_nqij00j','template_trnl6g3','#contact-form', 'QsXNtPSDCOMvbNZxA')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully✅!'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent successfully❌!'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.projects__container', {
    selectors: {
        target: '.projects__card'
    },
    animation: {
        duration: 300
    },
})

const linkProject = document.querySelectorAll('.projects__item');

function activeProject() {
    linkProject.forEach(l => l.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkProject.forEach(l => l.addEventListener('click', activeProject))

/*=============== MODAL ===============*/ 
const allButtons = document.querySelectorAll('#view')
const allModals = document.querySelectorAll('.modal')
const closeButtons = document.querySelectorAll('.modal__close')

allModals.forEach(modal => {
    modal.classList.add('modal-close')
})

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnNumber = e.target.dataset.project;

        allModals.forEach((modal, i) => {
            if(btnNumber == modal.dataset.modal) {
                modal.classList.add('modal-open')
                modal.classList.remove('modal-close')
                document.body.classList.add('hide-scroll');
                document.body.classList.remove('show-scroll');
            }
        })
    })
})

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const openedModal = document.querySelector('.modal-open')
        openedModal.classList.remove('modal-open')
        openedModal.classList.add('modal-close')
        document.body.classList.remove('hide-scroll');
        document.body.classList.add('show-scroll');
    })
})
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
  }

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme);
    localStorage.setItem('selected--icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

/*
sr.reveal(`.home__perfil, .about__image, .resume__skills, .contact__email`, {origin: 'right'})
sr.reveal(`.home__name, .home__info,
        .about__container .section__title-1, 
        .about__info, .resume__timeline, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})*/