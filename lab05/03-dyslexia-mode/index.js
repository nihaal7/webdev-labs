/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const toggle_theme = () => {
  const isPressed = window.localStorage.getItem('dyslexic');
  if (isPressed==1){
    document.getElementsByTagName("body")[0].className = 'default'
    window.localStorage.setItem('dyslexic', 0)
    console.log('changing pressed to not pressed')
  }
  else{
    document.getElementsByTagName("body")[0].className = 'dyslexia-mode'
    window.localStorage.setItem('dyslexic', 1)
    console.log('changing not pressed to pressed')
  }
};

document.querySelector('#dyslexia-toggle').addEventListener('click', toggle_theme);
const isPressed = window.localStorage.getItem('dyslexic');
if (isPressed==1){
  document.getElementsByTagName("body")[0].className = 'dyslexia-mode'
}
else{
  document.getElementsByTagName("body")[0].className = 'default'
}