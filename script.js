// ******* Carousal********
function initCarousel(slideSelector, leftBtnSelector, rightBtnSelector,counterSelector) {
    const slide = document.querySelector(slideSelector);
    const leftBtn = document.querySelector(leftBtnSelector);
    const rightBtn = document.querySelector(rightBtnSelector);
    const items = slide.querySelectorAll('.carousel-item');
    const span  = document.querySelector(counterSelector)
  
    let currentIndex = 0;
    const totalItems = items.length;
  
    leftBtn.addEventListener('click', () => {
      if (currentIndex === 0) {
        currentIndex = totalItems - 1;
      } else {
        currentIndex--;
      }
      updateCarousel();
    });
  
    rightBtn.addEventListener('click', () => {
      if (currentIndex === totalItems - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateCarousel();
    });
  
    function updateCarousel() {
      slide.style.transform = `translateX(-${currentIndex * 100}%)`;
      span.style.display = 'initial'
      span.innerHTML = `${currentIndex+1}/${totalItems}`
    }
  }
  
  initCarousel('.html-css-slide', '.html-css-left', '.html-css-right','.html-css-span');
  initCarousel('.js-slide', '.js-left', '.js-right','.js-span');
  
// *******Contact links***********

function sendMail(){
    window.location.href = "mailto:vivekmaurya9612@gmail.com";
}
function linkedinProfile(){
    window.open("https://www.linkedin.com/in/vivek-kumar-maurya-bb754028a/","_blank")
}
function githubProfile(){
    window.open("https://github.com/vivek-java-dev","_blank")
}
//******download Resume ******

document.querySelector(".resume-btn").addEventListener("click", function() {
  var pdfUrl = "resume.pdf"; 
  var link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Vivek_Maurya_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

//**********project link********** */

function setupProjectButtons(containerClass, projectType) {
  const items = document.querySelectorAll(`${containerClass} .carousel-item`);

  items.forEach((item, index) => {
    const openProjectButton = item.querySelector('.open-project');
    const githubLinkButton = item.querySelector('.github-link');

    openProjectButton.onclick = () => {
      console.log('haidsii')
      window.open(`projects/${projectType}/project${index + 1}/index.html`, '_blank');
    };

    githubLinkButton.onclick = () => {

      window.open(`https://github.com/user/${projectType}_project${index + 1}`, '_blank');
    };
  });
}

// Setup buttons for HTML/CSS projects
setupProjectButtons('.carousel-container.html-css', 'html-css');

// Setup buttons for JavaScript projects
setupProjectButtons('.carousel-container.js', 'js');
