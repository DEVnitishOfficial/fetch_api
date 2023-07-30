// const Button =  document.getElementById("fetchButton")
// const imageHolder = document.getElementById("imageContainer")

// Button.addEventListener( "click", () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response) => response.json())
//     .then((data) => {
//         const imgUrl = data.message;
//         const imageElement = document.createElement('img');
//         imageElement.src = imgUrl;
//         imageHolder.innerHTML = ''; // Clear previous content
//         imageHolder.appendChild(imageElement);
//     })
//     .catch((err) => {
//         console.log('something went wrong : ', err);
//     })
// });


const button = document.getElementById('fetchButton')
const blankContainer = document.getElementById('imageContainer');

 async function fetchingRandomData(){
    console.log("1");
    const fetched_data = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await fetched_data.json()  
    const imgUrl =  data.message;
    console.log(2);
    try{
        const imgElement = document.createElement('img')
        imgElement.src = imgUrl;
        imgElement.alt = 'dog image';
        blankContainer.innerHTML=' ';
        blankContainer.appendChild(imgElement);  
    }catch(err){
        console.log(err);
    }
    console.log(3);  
}
console.log(4);  

button.addEventListener('click',fetchingRandomData);


