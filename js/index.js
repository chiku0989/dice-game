function generateNum(){
    return Math.floor(Math.random()*6)+1;
}



function changeImgs(p1,p2){
    document.querySelector("#p1 img ").setAttribute("src","images/dice"+p1+".png");
    document.querySelector("#p2 img ").setAttribute("src","images/dice"+p2+".png");  
}


function decideWinner(p1,p2){

    if( p1 > p2){
        return "P1 Wins!"
    } else if(p2 > p1){
        return "P2 Wins!"
    }

    return "Its a Draw"
}

function playGame(){
    let p1 = generateNum();
    let p2 = generateNum();

    changeImgs(p1,p2);

    
    document.querySelector("h1").textContent = decideWinner(p1,p2);

}