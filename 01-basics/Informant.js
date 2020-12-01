class Informant {
  constructor() {
    let input, button, greeting;
    input = createInput();
    input.position(width/2,height/2);
  }

  send(){
    button = createButton('Send')
    button.position(width/2+70,height/2+50);
    button.mousePressed(Informant.enter);
 }
 //
 // signalOut(){//아두이노에 시그널 보내기
 // }
 // signalIn(){//아두이노 신호 받기
 // }

  enter() {
   const name = input.value();
   greeting.html(name);
   input.value('');

     push();
     fill(random(255), 255, 255);
     translate(random(width), random(height));
     rotate(random(2 * PI));
     text(name, 0, 0);
     pop();
 }
}