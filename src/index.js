import _ from 'lodash';
import './style.css';
//import Icon from './Small-mario.png';
import PrintMe from './print.js';

function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = PrintMe;
    element.appendChild(btn);

    // element.classList.add('hello');
    // let myImg=new Image();
    // myImg.src=Icon;
    // element.appendChild(myImg);
    return element;
  }

  document.body.appendChild(component());