/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: false,
    grabCursor: true,
    allowTouchMove: true,
    touchRatio: 1,
    touchAngle: 45,
    navigation: {
      nextEl: ".projects__container .swiper-button-next",
      prevEl: ".projects__container .swiper-button-prev",
    },
    pagination: {
      el: ".projects__container .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
  });

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    // Check if the field has a value
    if(contactName.value===''||contactEmail.value===''||contactProject.value===''){
        // Remove blue color and add red color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        // Show message
        contactMessage.textContent='Please fill all the input fields!'
    }else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_ey8fodo','template_39k37xn','#contact-form','CkCxrkrcQUQ25L9tw')
            .then(() =>{
                // Show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent='Message sent!'
                // Remove message after 5 seconds
                setTimeout(() =>{
                    contactMessage.textContent=''
                },5000)
            }, (error) => {
                alert('Oops! Please try again!', error)
            })
        // Clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit',sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 4250 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
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
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL PROGRESS BAR ===============*/
const scrollProgress = () => {
    const scrollProgressBar = document.getElementById('scroll-progress')
    if (scrollProgressBar) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrollPercentage = (scrollTop / scrollHeight) * 100
        scrollProgressBar.style.width = scrollPercentage + '%'
    }
}
window.addEventListener('scroll', scrollProgress)

/*=============== LOADING SCREEN ===============*/
window.addEventListener('load', () => {
    const loader = document.getElementById('loader')
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden')
            document.body.style.overflow = 'auto'
        }, 1000)
    }
})

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.getElementById('cursor')
const cursorFollower = document.getElementById('cursor-follower')

if (cursor && cursorFollower) {
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        
        cursor.style.left = mouseX + 'px'
        cursor.style.top = mouseY + 'px'
    })
    
    // Smooth follower animation - faster response
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.4
        followerY += (mouseY - followerY) * 0.4
        
        cursorFollower.style.left = followerX + 'px'
        cursorFollower.style.top = followerY + 'px'
        
        requestAnimationFrame(animateFollower)
    }
    animateFollower()
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .nav__link, .home__social-link, .contact__button, .projects__content, .skills__blob')
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)'
            cursor.style.backgroundColor = 'rgba(138, 43, 226, 0.2)'
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)'
        })
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)'
            cursor.style.backgroundColor = 'transparent'
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)'
        })
    })
}

/*=============== PARTICLE BACKGROUND ===============*/
const canvas = document.getElementById('particles-canvas')
if (canvas) {
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles = []
    const particleCount = 50
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width
            this.y = Math.random() * canvas.height
            this.size = Math.random() * 3 + 1
            this.speedX = Math.random() * 1 - 0.5
            this.speedY = Math.random() * 1 - 0.5
            this.opacity = Math.random() * 0.5 + 0.2
        }
        
        update() {
            this.x += this.speedX
            this.y += this.speedY
            
            if (this.x > canvas.width) this.x = 0
            if (this.x < 0) this.x = canvas.width
            if (this.y > canvas.height) this.y = 0
            if (this.y < 0) this.y = canvas.height
        }
        
        draw() {
            ctx.fillStyle = `rgba(138, 43, 226, ${this.opacity})`
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fill()
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        particles.forEach(particle => {
            particle.update()
            particle.draw()
        })
        
        // Connect nearby particles
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x
                const dy = particle.y - otherParticle.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(138, 43, 226, ${0.1 * (1 - distance / 100)})`
                    ctx.lineWidth = 1
                    ctx.beginPath()
                    ctx.moveTo(particle.x, particle.y)
                    ctx.lineTo(otherParticle.x, otherParticle.y)
                    ctx.stroke()
                }
            })
        })
        
        requestAnimationFrame(animate)
    }
    
    animate()
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    })
}

/*=============== SCROLL REVEAL ANIMATIONS ===============*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
        }
    })
}, observerOptions)

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skills__data, .qualification__info > div, .home__info-card, .home__stat-card')
    
    animateElements.forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(el)
    })
})

/*=============== MAGNETIC BUTTONS ===============*/
const magneticButtons = document.querySelectorAll('.contact__button, .home__social-link, .scrollup')

magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
    })
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)'
    })
})
window.addEventListener('load', scrollProgress)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__title`, {delay: 200, origin: 'top', distance: '40px'})
sr.reveal(`.home__blob`, {delay: 400, origin: 'bottom', distance: '60px', scale: 0.8})
sr.reveal(`.home__social`, {delay: 600, origin: 'left', distance: '40px', interval: 100})
sr.reveal(`.home__data`, {delay: 300, origin: 'top'})
sr.reveal(`.home__info-card`, {delay: 400, origin: 'bottom', distance: '50px', interval: 200})
sr.reveal(`.home__stats`, {delay: 500, origin: 'bottom', distance: '40px'})
sr.reveal(`.home__stat-card`, {delay: 600, origin: 'bottom', distance: '30px', interval: 150})
sr.reveal(`.section__title`, {delay: 200, origin: 'top'})
sr.reveal(`.section__subtitle`, {delay: 300, origin: 'top'})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {delay: 400, origin: 'left', distance: '80px'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {delay: 400, origin: 'right', distance: '80px'})
sr.reveal(`.skills__info`, {delay: 500, origin: 'bottom', interval: 100})
sr.reveal(`.qualification__content`, {delay: 300, origin: 'left', interval: 150})
sr.reveal(`.projects__container`, {delay: 400, origin: 'bottom', distance: '60px'})
sr.reveal(`.contact__form`, {delay: 500, origin: 'right', distance: '60px'})
sr.reveal(`.footer__container`, {delay: 200, origin: 'bottom'})
