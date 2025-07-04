/*==================EMAIL JS=================*/
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wlhpkv9', 'template_hjj0sif', contactForm, 'FbyQzk1g_nN2pwbIB')
            .then(() => {
                contactMessage.textContent = 'Message sent successfully!';
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                contactMessage.textContent = `Message not sent (Error: ${error.text})`;
            });
    };

    contactForm.addEventListener('submit', sendEmail);
});


/*===================SHOW SCROLL UP============*/
const scrollUp = () =>{
	const scrollUpElement = document.getElementById('scroll-up');
    // If scrollUpElement exists, then proceed
    if(scrollUpElement) {
        // When the scroll is higher than 350 viewport height, add the show-scroll class
        window.scrollY >= 350 ? scrollUpElement.classList.add('show-scroll')
                              : scrollUpElement.classList.remove('show-scroll');
    }
};
window.addEventListener('scroll', scrollUp)

/*===================SCROLL SECTIONS ACTIVE LINK==============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')
		if(sectionsClass){ // Check if the corresponding nav link exists
			if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
				sectionsClass.classList.add('active-link')
			}else{
				sectionsClass.classList.remove('active-link')
			}
		}                                                  
	});
}
window.addEventListener('scroll', scrollActive)

/*==================SCROLL REVEAL ANIMATION=================*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    //reset:true,

})
sr.reveal(`.perfil , .contact__form`)
sr.reveal(`.info`,{origin:'left',delay:700})
sr.reveal(`.skills`,{origin:'left',delay:900})
sr.reveal(`.about`,{origin:'right',delay:1100})
sr.reveal(`.projects__card, .services__card, .experience__card`,{interval:1300})

