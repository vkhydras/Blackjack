let hasBlackjack = false;
let isAlive = false;
let cards = []
let cardEl = document.getElementById("card")


let message = "";

let sum = 0;
let coin = 250

document.getElementById("coin").innerHTML = "$" + coin


function start(){
    isAlive = true;
    let firstCard = Math.floor(Math.random()*13 + 1) ;
    let secondCard = Math.floor(Math.random()*13 + 1) ;
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    
    if (cards[2]===undefined){
        document.getElementById("firstcard3").src="./img/back.png"; 
    }
    if (cards[3]===undefined){
        document.getElementById("firstcard4").src="./img/back.png"; 
    }
    if (cards[4]===undefined){
        document.getElementById("firstcard5").src="./img/back.png"; 
    }
    if (cards[5]===undefined){
        document.getElementById("firstcard5").src="./img/back.png"; 
    }
    if (cards[6]===undefined){
        document.getElementById("firstcard6").src="./img/back.png"; 
    }

    
    renderGame();
    if (firstCard===1){
        document.getElementById("firstcard1").src="./img/A.png";
    } else if (firstCard===2){
        document.getElementById("firstcard1").src="./img/2.png";
    } else if (firstCard===3){
        document.getElementById("firstcard1").src="./img/3.png";
    } else if (firstCard===4){
        document.getElementById("firstcard1").src="./img/4.jpg";
    } else if (firstCard===5){
        document.getElementById("firstcard1").src="./img/5.png";
    } else if (firstCard===6){
        document.getElementById("firstcard1").src="./img/6.png";
    } else if (firstCard===7){
        document.getElementById("firstcard1").src="./img/7.jpg";
    } else if (firstCard===8){
        document.getElementById("firstcard1").src="./img/8.png";
    } else if (firstCard===9){
        document.getElementById("firstcard1").src="./img/9.png";
    } else if (firstCard===10){
        document.getElementById("firstcard1").src="./img/10.png";
    } else if (firstCard===11){
        document.getElementById("firstcard1").src="./img/J.jpg";
    } else if (firstCard===12){
        document.getElementById("firstcard1").src="./img/Q.jpg";
    } else {
        document.getElementById("firstcard1").src="./img/K.png";
    }

    if (secondCard===1){
        document.getElementById("firstcard2").src="./img/A.png";
    } else if (secondCard===2){
        document.getElementById("firstcard2").src="./img/2.png";
    } else if (secondCard===3){
        document.getElementById("firstcard2").src="./img/3.png";
    } else if (secondCard===4){
        document.getElementById("firstcard2").src="./img/4.jpg";
    } else if (secondCard===5){
        document.getElementById("firstcard2").src="./img/5.png";
    } else if (secondCard===6){
        document.getElementById("firstcard2").src="./img/6.png";
    } else if (secondCard===7){
        document.getElementById("firstcard2").src="./img/7.jpg";
    } else if (secondCard===8){
        document.getElementById("firstcard2").src="./img/8.png";
    } else if (secondCard===9){
        document.getElementById("firstcard2").src="./img/9.png";
    } else if (secondCard===10){
        document.getElementById("firstcard2").src="./img/10.png";
    } else if (secondCard===11){
        document.getElementById("firstcard2").src="./img/J.jpg";
    } else if (secondCard===12){
        document.getElementById("firstcard2").src="./img/Q.jpg";
    } else {
        document.getElementById("firstcard2").src="./img/K.png";
    }
    document.getElementById("start").innerHTML= "NEW GAME"
    
}

function renderGame(){

    if (sum < 21){
        message = "draw new card 😃";
    } else if (sum == 21){
        message = "you've got blackjack, start new game🥳";
        hasBlackjack = true;
        coin +=250;
        document.getElementById("coin").innerHTML = "$" + coin
    }else if (coin===0){
        message = "Out of coins refresh the page to start a new game";
        document.getElementById("message-el").innerHTML = message;
    
    } else  {
        message = "you lost, start a new game😔";
        isAlive = false;
        coin -=50;
        document.getElementById("coin").innerHTML = "$" + coin
    }
  
    document.getElementById("message-el").innerHTML = message;
    document.querySelector("#sum").innerHTML ="Sum: " + sum;
    cardEl.textContent ="Cards:"  ;
    for (let i = 0; i < cards.length; i++){
       cardEl.textContent += cards[i] + ", ";
    }

}
function newCard(){
    if (isAlive==true && sum!=21){
        let card= Math.floor(Math.random()*12 + 1) ;
        sum +=card;
        cards.push(card);
        
        if (cards[2]===1){
            document.getElementById("firstcard3").src="./img/A.png";
        } else if (cards[2]===2){
            document.getElementById("firstcard3").src="./img/2.png";
        } else if (cards[2]===3){
            document.getElementById("firstcard3").src="./img/3.png";
        } else if (cards[2]===4){
            document.getElementById("firstcard3").src="./img/4.jpg";
        } else if (cards[2]===5){
            document.getElementById("firstcard3").src="./img/5.png";
        } else if (cards[2]===6){
            document.getElementById("firstcard3").src="./img/6.png";
        } else if (cards[2]===7){
            document.getElementById("firstcard3").src="./img/7.jpg";
        } else if (cards[2]===8){
            document.getElementById("firstcard3").src="./img/8.png";
        } else if (cards[2]===9){
            document.getElementById("firstcard3").src="./img/9.png";
        } else if (cards[2]===10){
            document.getElementById("firstcard3").src="./img/10.png";
        } else if (cards[2]===11){
            document.getElementById("firstcard3").src="./img/J.jpg";
        } else if (cards[2]===12){
            document.getElementById("firstcard3").src="./img/Q.jpg";
        } else if (cards[2]===13){
            document.getElementById("firstcard3").src="./img/K.png";
        } 

        if (cards[3]===1){
            document.getElementById("firstcard4").src="./img/A.png";
        } else if (cards[3]===2){
            document.getElementById("firstcard4").src="./img/2.png";
        } else if (cards[3]===3){
            document.getElementById("firstcard4").src="./img/3.png";
        } else if (cards[3]===4){
            document.getElementById("firstcard4").src="./img/4.jpg";
        } else if (cards[3]===5){
            document.getElementById("firstcard4").src="./img/5.png";
        } else if (cards[3]===6){
            document.getElementById("firstcard4").src="./img/6.png";
        } else if (cards[3]===7){
            document.getElementById("firstcard4").src="./img/7.jpg";
        } else if (cards[3]===8){
            document.getElementById("firstcard4").src="./img/8.png";
        } else if (cards[3]===9){
            document.getElementById("firstcard4").src="./img/9.png";
        } else if (cards[3]===10){
            document.getElementById("firstcard4").src="./img/10.png";
        } else if (cards[3]===11){
            document.getElementById("firstcard4").src="./img/J.jpg";
        } else if (cards[3]===12){
            document.getElementById("firstcard4").src="./img/Q.jpg";
        } else if (cards[3]===13) {
            document.getElementById("firstcard4").src="./img/K.png";
        } 

        if (cards[4]===1){
            document.getElementById("firstcard5").src="./img/A.png";
        } else if (cards[4]===2){
            document.getElementById("firstcard5").src="./img/2.png";
        } else if (cards[4]===3){
            document.getElementById("firstcard5").src="./img/3.png";
        } else if (cards[4]===4){
            document.getElementById("firstcard5").src="./img/4.jpg";
        } else if (cards[4]===5){
            document.getElementById("firstcard5").src="./img/5.png";
        } else if (cards[4]===6){
            document.getElementById("firstcard5").src="./img/6.png";
        } else if (cards[4]===7){
            document.getElementById("firstcard5").src="./img/7.jpg";
        } else if (cards[4]===8){
            document.getElementById("firstcard5").src="./img/8.png";
        } else if (cards[4]===9){
            document.getElementById("firstcard5").src="./img/9.png";
        } else if (cards[4]===10){
            document.getElementById("firstcard5").src="./img/10.png";
        } else if (cards[4]===11){
            document.getElementById("firstcard5").src="./img/J.jpg";
        } else if (cards[4]===12){
            document.getElementById("firstcard5").src="./img/Q.jpg";
        } else if (cards[4]===13) {
            document.getElementById("firstcard5").src="./img/K.png";
        }

        if (cards[5]===1){
            document.getElementById("firstcard6").src="./img/A.png";
        } else if (cards[5]===2){
            document.getElementById("firstcard6").src="./img/2.png";
        } else if (cards[5]===3){
            document.getElementById("firstcard6").src="./img/3.png";
        } else if (cards[5]===4){
            document.getElementById("firstcard6").src="./img/4.jpg";
        } else if (cards[5]===5){
            document.getElementById("firstcard6").src="./img/5.png";
        } else if (cards[5]===6){
            document.getElementById("firstcard6").src="./img/6.png";
        } else if (cards[5]===7){
            document.getElementById("firstcard6").src="./img/7.jpg";
        } else if (cards[5]===8){
            document.getElementById("firstcard6").src="./img/8.png";
        } else if (cards[5]===9){
            document.getElementById("firstcard6").src="./img/9.png";
        } else if (cards[5]===10){
            document.getElementById("firstcard6").src="./img/10.png";
        } else if (cards[5]===11){
            document.getElementById("firstcard6").src="./img/J.jpg";
        } else if (cards[5]===12){
            document.getElementById("firstcard6").src="./img/Q.jpg";
        } else if (cards[5]===13) {
            document.getElementById("firstcard6").src="./img/K.png";
        }
        renderGame();
    }
}




