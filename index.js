const inputBox = document.getElementById('box');
const button = document.getElementById('btn');
const listOfLuckies = document.getElementById("luckies")

button.addEventListener('click', (e) => {

    e.preventDefault();
    /* console.log(inputBox.value)
    console.log("clicked"); */

    listOfLuckies.innerHTML = "";
    


    for (let i = 0; i < inputBox.value; i++) {
        


        const numArray = [Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), Math.floor(Math.random() * 90)];


        numArray.sort(function(a, b){return a-b});

        
        let num = numArray.join("-")

        let joker = null

        while (joker in numArray || joker == null) {
            
            joker = Math.floor(Math.random() * 90)

        }


        num += ` | ${joker} | ${Math.floor(Math.random() * 90)}`


        let li = document.createElement('li');
        li.appendChild(document.createTextNode(num));
        listOfLuckies.appendChild(li);
        /* listOfLuckies.innerHTML += `<li>${num}</li>`; */
    }

    inputBox.value = "";

})