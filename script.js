
let n=168;    //No.of bubbles
let timer = 30;   //starting time
let score=0;    //Initial score
let hitrn=0;    //initial hit value


//Making Bubble
function makebubble(n) {
    let clutter = "";

    for (let i = 1; i <= n; i++) {
        clutter = clutter + `<div class="bubble">${Math.floor(10 * Math.random())}</div>`;
    }

    document.querySelector(".bottom").innerHTML = clutter;

}



// Applying timer
function runtimer() {
    setInterval(() => {

        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
            
        }
        else{
            clearInterval(timer);
            document.querySelector(".bottom").style.alignItems="center";
            document.querySelector(".bottom").style.justifyContent="center";
            document.querySelector(".bottom").innerHTML=`<h1>GAME OVER </br>
            Your Score : ${score} </h1>`
        }


    }, 1000);
}


// Getting new hit value
function getnewhit(){
    hitrn=Math.floor(10*Math.random());
    document.querySelector("#hitval").textContent=hitrn;
} 



// Increasing score 
function incscore(){
    score=score+1;
    document.querySelector("#scoreval").textContent=score;
}



//Game Logic
document.querySelector(".bottom").addEventListener("click",function(details){
    var clickednum=Number(details.target.textContent);
    if(clickednum==hitrn){
        incscore();
        makebubble(n);
        getnewhit();
        n=168;
    }
    else if(clickednum!=hitrn){
        makebubble(n);
        getnewhit();
        n=168;
    }

})



makebubble(n);
// alert("GAME RULE : Hit the bubble containing number which appears in hit section on Green Window.      TIME=30 Seconds");
runtimer();
getnewhit();




