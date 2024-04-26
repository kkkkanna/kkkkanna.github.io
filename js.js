const lightswitch = document.getElementById('lightModeSwitch')

function toggleLightMode() {
  if (lightswitch.checked) {
    document.body.classList.toggle('lightMode')
    
    document.querySelectorAll('.logo').forEach((element) => {
        element.classList.toggle('logoFilter');
        element.classList.toggle('logoLightMode');
        element.classList.remove('lightMode')
      });
  } else {
    document.body.classList.remove('lightMode')
    
    document.querySelectorAll('.logo').forEach((element) => {
      element.classList.remove('lightMode')
      element.classList.remove('logoLightMode')
    });
  }
}

 lightswitch.addEventListener('change', toggleLightMode);