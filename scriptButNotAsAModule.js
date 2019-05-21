// Creates a new dictionary and adds it to the array
function addListItem(array, itemTitle, itemDescription, itemDeadline){
    var listObject = {
            title:itemTitle,
            description: itemDescription,
            deadline: itemDeadline,
            done: false
    };

    array.push(listObject);
    return array;
}