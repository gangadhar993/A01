
/**
 * Simple tic-tac-toe game example. 
 */
  var gameStatus = 1;
  $("#winner-Status").hide();
  const cellElements = [
    document.getElementById('upper-left'),
    document.getElementById('upper-mid'),
    document.getElementById('upper-right'),
    document.getElementById('center-left'),
    document.getElementById('center-mid'),
    document.getElementById('center-right'),
    document.getElementById('lower-left'),
    document.getElementById('lower-mid'),
    document.getElementById('lower-right')
  ];

  for (let i = 0; i < cellElements.length; i++) {
    cellElements[i].addEventListener('click', async function () {
      if(!gameStatus){
        alert("Please click on Play button to Play");
        return;
      }
      // add player's X
     

      const isValidMove = await addX(cellElements[i]);
      if(!gameStatus){
        return;
      }
      if (isValidMove) {
        gameStatus = 1;
        // choose computer's O
        const j = await findBestMove(cellElements,i);

        // pause, then add computer's O
        //await new Promise((resolve) => setTimeout(() => resolve(), 2000));
        await addO(cellElements[j]);
      }

    });
  }

  function play(){
    $("#winner-Status").hide();
    for (let n = 0; n < cellElements.length; n++) {
      if (cellElements[n].innerHTML != " ") {
        cellElements[n].innerHTML = " ";
      }
    }
    gameStatus = 1;
  }

  async function findBestMove(arr) {
    for (let n = 0; n < arr.length; n++) {
      if (arr[n].innerHTML == " ") {
        return n;
      }
    }
  }
  
   function findBestSquare(arr) {
    for (let n = 0; n < arr.length; n++) {
      if (arr[n].innerHTML == " ") {
        return n;
      }
    }
  }

  function checkBoxElements(arr,cellElements){
    var  resultid;
      for(let i=0;i<arr.length;i++){
          if (cellElements[arr[i]].innerHTML != " ") {
              resultid = arr[i];
          }
          if(resultid){
            break;
          } 
      }
      if(!resultid){
        resultid = findBestSquare(cellElements);
      }
      return resultid;
  }

  /*async function findBestMove(cellElements,id) {
    var gameArray = [];
    var boxId;
    if(id == 0){
      gameArray = [1,2,3,4,8,7];
      boxId = checkBoxElements(gameArray,cellElements);
    }
    if(id == 1){
      gameArray = [0,2,4,7];
      boxId = checkBoxElements(gameArray,cellElements);
    }
    if(id == 2){
      gameArray = [1,5,4,0,8,6];
      boxId = checkBoxElements(gameArray,cellElements);
    }
    if(id == 3){
      gameArray = [0,4,5,6];
      boxId = checkBoxElements(gameArray,cellElements);
    }
    if(id == 4){
      gameArray = [1,5,3,2,7,8,6];
      boxId = checkBoxElements(gameArray,cellElements);
    }
    if(id == 5){
      gameArray = [4,3,2,8];
      boxId = checkBoxElements(gameArray,cellElements);
    }
    if(id == 6){
      gameArray = [3,4,7,8,0,2];
      boxId = checkBoxElements(gameArray,cellElements);
    }
    if(id == 7){
      gameArray = [6,4,8,1];
      boxId = checkBoxElements(gameArray,cellElements);
    }
    if(id == 8){
      gameArray = [7,4,5,6,2,0];
      boxId = checkBoxElements(gameArray,cellElements);
    }
    return boxId;
  }*/

  async function addX(cellElement) {
    if (cellElement.innerHTML != " " && cellElement.innerHTML ) {
       return false;
     }
    /*const headingElement = document.createElement("h1");
    headingElement.appendChild(textNode);*/
    const textNode = document.createTextNode("X");
    cellElement.appendChild(textNode);
    findWinner("X");
    return true;
  }

  async function addO(cellElement) {
    if (cellElement.innerHTML != " " && cellElement.innerHTML ) { 
      return; 
    }
    /*const headingElement = document.createElement("h1");
    headingElement.appendChild(textNode);*/
    const textNode = document.createTextNode("O");
    cellElement.appendChild(textNode);
    findWinner("O");
  }

   function findWinner(player){
    let gameWinner;
    if(cellElements[0].innerText == player && cellElements[1].innerText == player &&cellElements[2].innerText== player ){
      gameWinner = 1;
    }
    else if(cellElements[3].innerText == player && cellElements[4].innerText == player &&cellElements[5].innerText == player){
      gameWinner = 1;
    }
    else if(cellElements[6].innerText == player && cellElements[7].innerText == player &&cellElements[8].innerText == player){
      gameWinner = 1;
    }
    else if(cellElements[0].innerText == player && cellElements[3].innerText == player &&cellElements[6].innerText == player){
      gameWinner = 1;
    }
    else if(cellElements[1].innerText == player && cellElements[4].innerText == player&&cellElements[7].innerText == player){
      gameWinner = 1;
    }
    else if(cellElements[2].innerText == player && cellElements[5].innerText == player &&cellElements[8].innerText == player){
      gameWinner = 1;
    }
    else if(cellElements[0].innerText == player && cellElements[4].innerText == player &&cellElements[8].innerText == player){
      gameWinner = 1;
    }
    
    else if(cellElements[6].innerText == player && cellElements[4].innerText == player &&cellElements[2].innerText == player){
      gameWinner = 1;
    }
    if(gameWinner){
      gameStatus = 0;
      $("#winner-Status").html("'"+player+"' Wins");
      $("#winner-Status").show();
      alert("'"+player+"' Wins")
    }
  }

