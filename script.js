const inputval = document.querySelector("[data-input]");
const image = document.querySelector("#imageID");
const buttonHere = document.querySelector("[data-button]");
const imgbox = document.querySelector(".qrimage");

buttonHere.addEventListener('click', () => {
   if(inputval.value.length > 0){ 
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputval.value;
        console.log(image.src);
        imgbox.classList.add('image')
    }
    else{
        inputval.classList.add('error');
    }
})

   

  