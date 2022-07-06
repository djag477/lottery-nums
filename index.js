const inputBox = document.getElementById('box');
const button = document.getElementById('btn');
const listOfLuckies = document.getElementById("luckies")

button.addEventListener('click', (e) => {
    e.preventDefault();
    /* console.log(inputBox.value)
    console.log("clicked"); */
    listOfLuckies.innerHTML = "";
    let amount = inputBox.value;
     
    for (let i = 0; i < amount; i++) {
        let numArray = Array(6).fill(null).map((_, i) => Math.floor((Math.random() * 90) + 1));
        //Here we have created a numArray with 6 null-valued elements. Then we have changed all elements to random num in a new array, by using map. The new array is our numArray.

        numArray.sort(function(a, b){return a-b});  
        let num = numArray.join("-");
        
        let joker = null;
        while (joker in numArray || joker == null) {
            joker = Math.floor((Math.random() * 90) + 1)
        }
        num += ` | ${joker} | ${Math.floor((Math.random() * 90) + 1)}`

        let li = document.createElement('li');
        li.appendChild(document.createTextNode(num));
        listOfLuckies.appendChild(li);
        /* listOfLuckies.innerHTML += `<li>${num}</li>`; */
    }

    inputBox.value = "";

});
//I AM ADDING A CHANGE FOR U DANIEL
