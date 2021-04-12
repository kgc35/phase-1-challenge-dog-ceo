console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" //added from lab

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
        debugger
        

    })

})