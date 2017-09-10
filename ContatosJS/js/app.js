var textInput = document.getElementById('filterInput');
console.log(textInput);

//document.getElementById('test').innerHTML = '<h1>notHey</h1>';

// add event listener
textInput.addEventListener('keyup', filterNames);

function filterNames() {
    //console.log('inside function');
    let filterInput = document.getElementById('filterInput').value.toUpperCase();
    //console.log(filterInput);

    let ul = document.getElementById('names');
    
    let li = ul.querySelectorAll('li.collection-item');
    
    //console.log(li[0].getElementsByTagName('a')[0].innerHTML);

    for (i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        if (a.innerHTML.toLocaleUpperCase().indexOf(filterInput) > -1){
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }

    }
}