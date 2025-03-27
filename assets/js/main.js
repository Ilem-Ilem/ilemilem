(function ()
{
  // VARIABLES FOR THE PAGE
  const navbar = document.getElementById('navbar');
  const scrollToTop = document.getElementById('scroll-top');
  let mobileNavBtn = document.getElementById('mobile_nav_toggle');
  /** 
  * FIX NAVBAR ON PAGE SCROLL
  */
  window.addEventListener('scroll', function ()
  {
    if (window.scrollY > 50) {
      navbar.classList.add('sticky-bar');
    } else {
      navbar.classList.remove('sticky-bar');
    }

    if (this.window.scrollY > 100) {
      scrollToTop.classList.add('show');
    } else {
      scrollToTop.classList.remove('show');
    }
  });


  mobileNavBtn.addEventListener('click', function ()
  {
      document.getElementById('collapsibleNavId').classList.toggle('show')
      if(document.getElementById('collapsibleNavId').classList.contains('show')){
        mobileNavBtn.innerHTML = 'X'
      }else{
        mobileNavBtn.innerHTML = '<i class="bi bi-list"></i>'
      }
  });
  if(!document.getElementById('collapsibleNavId').classList.contains('show')){
   mobileNavBtn.innerHTML = '<i class="bi bi-list"></i>'
  }


  let navLinks =  document.querySelectorAll('.nav-link');
  navLinks.forEach(navlink =>{
    navlink.addEventListener('click', function(){
      document.getElementById('collapsibleNavId').classList.remove('show')
      mobileNavBtn.innerHTML = '<i class="bi bi-list"></i>'
    })
  })

  /**
  * Animation on scroll function and init
  */
  function aosInit ()
  {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
 * Animate the skills items on reveal
 */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  console.log(skillsAnimation);
  skillsAnimation.forEach((item) =>
  {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction)
      {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el =>
        {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });
})();
