function diff(arr1, arr2) {

    var newArray = arr2.concat(arr1);  

    var newestArray = [];

    for (var i=0 ; i<newArray.length ; i++) {  //NOW COMPARING EACH ELEMENT OF  newArray  WITH ARR1 AD ARR2 AND PUSHING NOT SAME VALUES TO newestArray
        if (arr1.indexOf(newArray[i])===-1) {
            newestArray.push(newArray[i]);
        }  

        if (arr2.indexOf(newArray[i])===-1) {
            newestArray.push(newArray[i]);
        }
    }

    return newestArray;   //It is returning an empty arrray but it should return "pink wool"
}

//diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

console.log(
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));