var z = document.getElementById("restaurant-request");
z.addEventListener("click", getRandomItem);


// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = ['Romacelli', 'Pour', 'Youngsville Sports Complex'];

const result = getRandomItem(array);
alert(result);