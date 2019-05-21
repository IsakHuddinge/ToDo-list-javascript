// Creates a new dictionary and adds it to the array
addListItem: function (listArray, itemTitle, itemDescription, itemDeadline){
    var listObject = {
            title:itemTitle,
            description: itemDescription,
            deadline: itemDeadline,
            done: false
    };

    listArray.push(listObject);
    return listArray;
}