window.onload = function(){
    // For testing purposes.
    var testList = [];

    // Creates 15 entries.
    // For testing purposes.
    for (let i = 0; i < 15; i++) {
        testList = addListItem(
            testList,
            "Title Goes here",
            "Description is here",
            new Date()
        );
    }
    displayList(testList);
};

// Display the list on the html page.
function displayList(array){
    var htmlList = document.getElementById("htmlList");
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(element.title));

        // append item to html list
        htmlList.appendChild(li);
    }    
}