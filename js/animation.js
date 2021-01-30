function fadeInAnimtaion(){
  // Declare variables
  let hiddenElements;
  let windowHeight;

  // Initialise variables
  function init(){
    hiddenElements = document.querySelectorAll('.hidden-fadeIn');
    windowHeight = window.innerHeight - 20 ;
  }

  // Check if elements is visible in viewport
  function checkPosition(){
    for(let i = 0; i < hiddenElements.length; i++){
      let element = hiddenElements[i];
      let positionFromTop = hiddenElements[i].getBoundingClientRect().top;

      if(positionFromTop - windowHeight <=0){
        element.classList.add('fadeIn');
        element.classList.remove('hidden-fadeIn');
      }
    }
  }

  // Add event Listener
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
}



function fadeInUpAnimtaion(){
  // Declare variables
  let hiddenElements;
  let windowHeight;

  // Initialise variables
  function init(){
    hiddenElements = document.querySelectorAll('.hidden-fadeInUp');
    windowHeight = window.innerHeight - 10 ;
  }

  // Check if elements is visible in viewport
  function checkPosition(){
    for(let i = 0; i < hiddenElements.length; i++){
      let element = hiddenElements[i];
      let positionFromTop = hiddenElements[i].getBoundingClientRect().top;

      if(positionFromTop - windowHeight <=0){
        element.classList.add('fadeInUp');
        element.classList.remove('hidden-fadeInUp');
      }
    }
  }

  // Add event Listener
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
}




function zoomInAnimtaion(){
  // Declare variables
  let hiddenElements;
  let windowHeight;

  // Initialise variables
  function init(){
    hiddenElements = document.querySelectorAll('.hidden-zoomIn');
    windowHeight = window.innerHeight - 5 ;
  }

  // Check if elements is visible in viewport
  function checkPosition(){
    for(let i = 0; i < hiddenElements.length; i++){
      let element = hiddenElements[i];
      let positionFromTop = hiddenElements[i].getBoundingClientRect().top;

      if(positionFromTop - windowHeight <=0){
        element.classList.add('zoomIn');
        element.classList.remove('hidden-zoomIn');
      }
    }
  }

  // Add event Listener
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
}


function slideInLeftAnimtaion(){
  // Declare variables
  let hiddenElements;
  let windowHeight;

  // Initialise variables
  function init(){
    hiddenElements = document.querySelectorAll('.hidden-slideInLeft');
    windowHeight = window.innerHeight - 20 ;
  }

  // Check if elements is visible in viewport
  function checkPosition(){
    for(let i = 0; i < hiddenElements.length; i++){
      let element = hiddenElements[i];
      let positionFromTop = hiddenElements[i].getBoundingClientRect().top;

      if(positionFromTop - windowHeight <=0){
        element.classList.add('slideInLeft');
        element.classList.remove('hidden-slideInLeft');
      }
    }
  }

  // Add event Listener
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
}


function slideInRightAnimtaion(){
  // Declare variables
  let hiddenElements;
  let windowHeight;

  // Initialise variables
  function init(){
    hiddenElements = document.querySelectorAll('.hidden-slideInRight');
    windowHeight = window.innerHeight - 20 ;
  }

  // Check if elements is visible in viewport
  function checkPosition(){
    for(let i = 0; i < hiddenElements.length; i++){
      let element = hiddenElements[i];
      let positionFromTop = hiddenElements[i].getBoundingClientRect().top;

      if(positionFromTop - windowHeight <=0){
        element.classList.add('slideInRight');
        element.classList.remove('hidden-slideInRight');
      }
    }
  }

  // Add event Listener
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
}



fadeInAnimtaion();
fadeInUpAnimtaion();
zoomInAnimtaion();
slideInLeftAnimtaion();
slideInRightAnimtaion();


console.log(window.innerHeight);
