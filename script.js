// document.addEventListener('DOMContentLoaded', () => {
//     const secondPage = document.querySelector('.second-page');

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 secondPage.classList.add('visible');
//             } else {
//                 secondPage.classList.remove('visible');
//             }
//         });
//     }, { threshold: 0.1 });

//     observer.observe(secondPage);
// });
document.addEventListener('DOMContentLoaded', () => {
    const text = "Fueling the Future with \n Eco-Friendly Energy Solutions";
    const container = document.getElementById('animated-text');
    const dots = document.getElementById('dots');
    let index = 0;
    let dotIndex = 0;
    const dotText = '....';

    function typeWriter() {
        if (index < text.length) {
            container.innerHTML += text.charAt(index) === '\n' ? '<br>' : text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); 
        } else if (dotIndex < dotText.length) {
            dots.style.visibility = 'visible';
            dots.innerHTML += dotText.charAt(dotIndex);
            dotIndex++;
            setTimeout(typeWriter, 300); 
        } else {
            setTimeout(() => {
                index = 0;
                dotIndex = 0;
                container.innerHTML = '';
                dots.innerHTML = '';
                dots.style.visibility = 'hidden'; 
                typeWriter();
            }, 1000); 
        }
    }

    typeWriter();
});
