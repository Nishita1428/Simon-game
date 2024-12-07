
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];      //8

let started = false;        
let level = 0;

let h2= document.querySelector("h2");                //4

document.addEventListener("keypress", function(){     //1
    if(started == false){         
        console.log("game is started");
        started = true;
 
        levelUp();                                   //3  function call
    } 
});

function gameFlash(btn){                             //6
       btn.classList.add("flash");
       setTimeout(function(){
        btn.classList.remove("flash")
       },250);
}

function userFlash(btn){                             //15
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash")
    },250);
}

function levelUp(){                                //2
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;              //5
    
    //random btn choose
    let randIdx = Math.floor(Math.random() * 3);                  //9
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);                           //16
    console.log(gameSeq);


    gameFlash(randBtn);                                   //7  , 10
}

//---------------------------------------------------------------

function checkAns(idx){                               //18
    

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! your score was <b>${level}</b>  <br> press any key to start.`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}

function btnPress(){                                    //11
    // console.log(this);                             //tells which button is pressed
    let btn =this;
    userFlash(btn);                                     //14

    userColor = btn.getAttribute("id")  ;               //17
    userSeq.push(userColor);
    // console.log(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");         //12
for(btn of allBtns){
    btn.addEventListener("click", btnPress);              //13
}

function reset(){                              //lAST
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}