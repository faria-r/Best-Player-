//setting player name to the list container
function setListItem(playerName){
    const listContainer = document.getElementById('li-container');
    const li = document.createElement('li');
    const PlayerNameElement = document.getElementById(playerName);
    const liText = PlayerNameElement.innerText;
    li.innerText = liText;
    listContainer.appendChild(li);
    const elements = document.getElementsByTagName('li');
    const numberOfPlayers = elements.length;
    if(numberOfPlayers > 5)
    {
       alert('You Can Not Add More Than Five Players.');
       return;
    }
 
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
function getElementsValueById(elementId){
const elementField = document.getElementById(elementId);
const elementFieldString =  elementField.value;
const elementValue = parseInt(elementFieldString);
return elementValue;
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
// setting the total cost 
document.getElementById('total-cost').addEventListener('click',function(){
    const managerCost = getElementsValueById('manager-cost');
    const coachCost = getElementsValueById('coach-cost');
    const playerTotalExpense = document.getElementById('PlayerExpense');
    const playerTotalExpenseAmount = playerTotalExpense.innerText;
    const playerTotalCost = parseInt(playerTotalExpenseAmount);
    const totalCost = managerCost + coachCost + playerTotalCost;
    setTextElementValueById('Total',totalCost);
    })