const selectButtonTwo = document.getElementById('sl-Two').addEventListener('click',function () {
    setListItem('secondPlayer');
    // event.selectButtonOne.disabled = true;
})
const selectButtonThree = document.getElementById('sl-three').addEventListener('click',function () {
    setListItem('thirdPlayer');
    // event.selectButtonOne.disabled = true;
})
const selectButtonFour = document.getElementById('sl-four').addEventListener('click',function () {
    setListItem('fourthPlayer');
    // event.selectButtonOne.disabled = true;
})
const selectButtonFive = document.getElementById('sl-five').addEventListener('click',function () {
    setListItem('fifthPlayer');
    // event.selectButtonOne.disabled = true;
})
const selectButtonsix = document.getElementById('sl-six').addEventListener('click',function () {
    setListItem('sixPlayer');
    // event.selectButtonOne.disabled = true;
})

// const setEventTwo = setEventListener('sl-Two');
// setEventTwo = setListItem('secondPlayer')
// const selectButtonOne = document.getElementById('sl-one').addEventListener('click',function () {
//     setListItem('firstPlayer');
//     // event.selectButtonOne.disabled = true;
// })






//setting player name to the list container
function setListItem(playerName){
    const listContainer = document.getElementById('li-container');
    
    const li = document.createElement('li');
    const PlayerNameElement = document.getElementById(playerName);
    const liText = PlayerNameElement.innerText;
    li.innerText = liText;
    listContainer.appendChild(li);
}
//function to set eventlistener With buttons
function setEventListener(buttonId,playerName){
    document.getElementById(buttonId).addEventListener('click',function(event){
        event.target.disabled = true;
        event.target.style.backgroundColor = 'gray';
        setListItem(playerName);
//         const elements = document.getElementsByTagName('li');
//     const numberOfPlayers = elements.length;
//     if(numberOfPlayers > 5)
//     {
//        alert('You Can Not Add More Than Five Players.');
//        return;
//     }
        
//     })
// }