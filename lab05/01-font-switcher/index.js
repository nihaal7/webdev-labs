const makeBigger = () => {
   // p_element = document.getElementsByClassName('content')[0]
   // p_size = parseFloat(window.getComputedStyle(p_element, null).getPropertyValue('font-size'));
   // document.querySelector('#content').style.fontSize = p_size * 1.1 +'px';
   p_element = document.getElementsByTagName('p')[0];
   p_size = parseFloat(window.getComputedStyle(p_element, null).getPropertyValue('font-size'));
   document.querySelector('p').style.fontSize = p_size * 1.1 +'px';
   h1_element = document.getElementsByTagName('h1')[0];
   h1_size = parseFloat(window.getComputedStyle(h1_element, null).getPropertyValue('font-size'));
   document.querySelector('h1').style.fontSize = h1_size * 1.1 +'px';
   
};

const makeSmaller = () => {
   p_element = document.getElementsByTagName('p')[0];
   p_size = parseFloat(window.getComputedStyle(p_element, null).getPropertyValue('font-size'));
   document.querySelector('p').style.fontSize = p_size * 0.9 +'px';
   h1_element = document.getElementsByTagName('h1')[0];
   h1_size = parseFloat(window.getComputedStyle(h1_element, null).getPropertyValue('font-size'));
   document.querySelector('h1').style.fontSize = h1_size * 0.9 +'px';
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

