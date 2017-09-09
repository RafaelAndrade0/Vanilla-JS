// Listen form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// var hoisting
/*function doSomething() {
    //var x;
    if (x === 10) {
        console.log('Equals to 10');
    }
    //var x = 10;
    console.log(x);
    var x = 10;
    console.log(x);
}

doSomething(); */


// Save Bookmark
function saveBookmark(e) {
    // == get form values ==
    // siteName value
    var siteName = document.getElementById('siteName').value;
    // site URL value
    var siteUrl = document.getElementById('siteURL').value;

    // Object
    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    //var bookmarks = [];

    // Test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null) {
        // Init array
        var bookmarks = [];
        console.log(bookmarks);
        // Add to array
        bookmarks.push(bookmark);
        // Set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from localstorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to the array
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    fetchBookmarks();
    // Prevent the default behavior
    e.preventDefault();
}

function fetchBookmarks() {
    // Get bookmarks from localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(bookmarks);

    var bookmarkResults = document.getElementById('bookmarksResults');
    //bookmarkResults.innerHTML = 'Hello';
    //bookmarkResults.innerHTML = 'Hello';

    for (i = 0; i < bookmarks.length ; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkResults.innerHTML += '<div class="well">' +
                                    '<h3>' + name +
                                    ' <a class="btn btn-default" target="_blank" href="'+url+'">Visitar</a> ' +
                                    ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                    '</h3>' +
                                    '</div>'
    }

}

function deleteBookmark(url) {
    //alert('Tá show!');
    console.log(url);
    // Get bookmarks from localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for(i = 0; i < bookmarks.length; i++) {
        if(bookmarks[i].url = url) {
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
}
