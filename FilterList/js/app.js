// get input element
var filterInput = document.getElementById('filterInput');
console.log(filterInput);

// add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    //console.log('inside filterNames!');

    // get value of input
    var filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // get names ul
    var ul = document.getElementById('names');
    
    // get lis from ul
    var li = ul.querySelectorAll('li.collection-item');

    // loop through collection items
    for (i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        //console.log(a.innerHTML);

        // if matchs
        if (a.innerHTML.toLocaleUpperCase().indexOf(filterValue) > -1)  {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
    
}