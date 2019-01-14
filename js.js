window.onload = myGame();
function myGame() {
  var start = true;
  var reset = false;
  var main = document.getElementById("main");
  var div1 = document.getElementById('1');
  var div2 = document.getElementById('2');
  var div3 = document.getElementById('3');
  var div4 = document.getElementById('4');
  var div5 = document.getElementById('5');
  var div6 = document.getElementById('6');
  var div7 = document.getElementById('7');
  var div8 = document.getElementById('8');
  var div9 = document.getElementById('9');
  var startbtn = document.getElementById('start');
  var newgamebtn = document.getElementById('newgamebtn');
  var xpoint = document.getElementById('xpoint');
  var opoint = document.getElementById('opoint');
  var children = main.getElementsByTagName('div');
  var cliccounter = 0;
  var xunitecount = 0;  
  var ounitecount = 0;

  startbtn.onclick = function () {
    if (start == true && reset === false) {
      startGame();
      start = false;
      reset = true;
    } else if (start ==false && reset == true) {
      resetGame();
      startGame();
      start = true;
      reset = false;
    }
  }
  function startGame(){
    startbtn.innerHTML = 'Reset';
    cliccounter = 1;/*cc 1 vor ++ aneluc arden 2 lini*/
    for(var i = 0; i < children.length; i++) {
      children[i].onclick = function() {
        if(cliccounter <= 10 && startbtn.innerHTML == 'Reset' && this.innerHTML == '') {
          cliccounter++;
          if(cliccounter % 2 == 0) {
            this.innerHTML = 'X';
          }else {
            this.innerHTML = 'O';
          }
        }
        chackResalt()
      }
    }
    };
  function resetGame(){
    startbtn.innerHTML = 'Start';
    if (startbtn.innerHTML = 'Start') {
      cliccounter = 1;
    }
    for(var i = 0; i < children.length; i++) {
      children[i].innerHTML = '';
    }
  };
  function chackResalt(){
    if (div1.innerHTML == div2.innerHTML && div2.innerHTML == div3.innerHTML && div1.innerHTML != '' && div2.innerHTML !='' && div3.innerHTML!= '')  {
      inqUnitQount(div1);
    } 
    else if (div4.innerHTML == div5.innerHTML && div5.innerHTML == div6.innerHTML && div4.innerHTML != '' && div5.innerHTML !='' && div6.innerHTML!= '') {
      inqUnitQount(div4);
    } 
    else if (div7.innerHTML == div8.innerHTML && div8.innerHTML == div9.innerHTML && div7.innerHTML != '' && div8.innerHTML !='' && div9.innerHTML!= '') {
      inqUnitQount(div7);
    }
    else if (div1.innerHTML == div4.innerHTML && div4.innerHTML == div7.innerHTML && div1.innerHTML != '' && div4.innerHTML !='' && div7.innerHTML!= '') {
      inqUnitQount(div1);
    } 
    else if (div2.innerHTML == div5.innerHTML && div5.innerHTML == div8.innerHTML && div2.innerHTML != '' && div5.innerHTML !='' && div8.innerHTML!= '') {
      inqUnitQount(div2);
    }
    else if (div3.innerHTML == div6.innerHTML && div6.innerHTML == div9.innerHTML && div3.innerHTML != '' && div6.innerHTML !='' && div9.innerHTML!= '') {
      inqUnitQount(div3);
    } 
    else if (div1.innerHTML == div5.innerHTML && div5.innerHTML == div9.innerHTML && div1.innerHTML != '' && div5.innerHTML !='' && div9.innerHTML!= '') {
      inqUnitQount(div9);
    }
    else if (div3.innerHTML == div5.innerHTML && div5.innerHTML == div7.innerHTML && div3.innerHTML != '' && div5.innerHTML !='' && div7.innerHTML!= '') {
      inqUnitQount(div7);
    } 
  };

  function inqUnitQount(Winner){
    if (Winner.innerHTML == 'X') {
      xunitecount++;
      xpoint.value = xunitecount;
    } else if  (Winner.innerHTML == 'O') {
      ounitecount++;
      opoint.value = ounitecount;
    }
    resetGame();
  };
  newgamebtn.onclick = function() {
    ounitecount = 0;
    xunitecount = 0;
    xpoint.value = '';
    opoint.value = '';
    resetGame();
  } 
} 