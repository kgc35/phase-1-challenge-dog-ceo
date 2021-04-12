console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" //added from lab
const breedUrl = "https://dog.ceo/api/breeds/list/all" //added from lab

//need to wait for content to load
document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
    .then(res => res.json())
    .then((responsePOJO) => {

        let imageContainer = document.querySelector("div#dog-image-container");

        console.log(responsePOJO)

        //Now DOM Manipulation
        dogArray = responsePOJO.message;



        dogArray.forEach(element => {
            // console.log(element)

            let blankImg = document.createElement("img");
            blankImg.src = element

            imageContainer.append(blankImg)
        })
        // debugger
    })
        //declare variable of location for dog breeds

        let breedContainer = document.querySelector("ul#dog-breeds");
        console.log(breedContainer)

        // fetch the dog breeds

    fetch(breedUrl)
    .then(res => res.json())
    .then((breedPOJO) => {
        console.log(breedPOJO)

        breedArray = Object.keys(breedPOJO.message)
        debugger

   //append the dog breeds to the location

   breedArray.forEach(element =>{
   let blankLi = document.createElement("li")
   blankLi.class = "breeds"
   blankLi.innerText = element;
   breedContainer.append(blankLi)
})
    })

     
    function colorChange() {
        console.log("This is test. we will make the color change.")
    }
    
    breedListItems = document.querySelector("ul#dog-breeds")
    
    breedListItems.addEventListener("click",colorChange)
    

})

