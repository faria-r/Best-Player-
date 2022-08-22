
document.getElementById('btn-add-items').addEventListener('click',function () {
    const listCOntainer = document.getElementById('li-container');
    const li = document.createElement('li');
    // li.innerText = 'brand new item';
    li.classList.add('item');
    listCOntainer.appendChild(li);
})