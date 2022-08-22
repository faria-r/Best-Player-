//setting player name to the list container
function setListItem(playerName){
    const listContainer = document.getElementById('li-container');
    const li = document.createElement('li');
    const PlayerNameElement = document.getElementById(playerName);
    const liText = PlayerNameElement.innerText;
    li.innerText = liText;
    listContainer.appendChild(li);


    // const listLength = document.getElementsById('li-container');
    // const listNumber = listLength.document.getElementByTagName('li');
  
    // if(listNumber.length > 5){
    //     alert('you can not add more the five player');
    // }
}
//function to set eventlistener With buttons
function setEventListener(buttonId,playerName){
    document.getElementById(buttonId).addEventListener('click',function(event){
        event.target.disabled = true;
        event.target.style.backgroundColor = 'gray';
        setListItem(playerName);
        
    })
}
//function to set value to an element
function setTextElementValueById(elementId,value)
{
const elementField = document.getElementById(elementId);
elementField.innerText = value;
}
setEventListener('sl-one','firstPlayer');
setEventListener('sl-Two','secondPlayer');
setEventListener('sl-three','thirdPlayer');
setEventListener('sl-four','fourthPlayer');
setEventListener('sl-five','fifthPlayer');
setEventListener('sl-six','sixPlayer');


//geeting the number of list elements in ordered list 
document.getElementById('calcPlayerCost').addEventListener('click',function(){
    const elements = document.getElementsByTagName('li');
    const numberOfPlayers = elements.length;
    const playerCostField = document.getElementById('playerCost');
    const playerFieldString = playerCostField.value;
    const playerCostAmount = parseInt(playerFieldString);
    const totalPlayerCost =numberOfPlayers * playerCostAmount;
    setTextElementValueById('PlayerExpense',totalPlayerCost);

})