 let profilePicture = document.querySelector("#profile-picture"); 


 window.addEventListener("load",function() {
   let userName = document.getElementById("username");
   let userEmail = document.getElementById("user-email");

   let getValue = localStorage.getItem("firstName");
   let lastName = localStorage.getItem("lastName")
   let userImage = localStorage.getItem("user-image");
   let linkBox = document.querySelector(".link-box")

   profilePicture.style.backgroundImage = `url("${userImage}")`;
   userName.innerHTML =`${getValue}${lastName}`;
   let getEmail = localStorage.getItem("email");
   userEmail.innerHTML = getEmail;
   let getLinks = localStorage.getItem("link");
   let getUrl = localStorage.getItem('anchor');
   linkBox.innerHTML =  getLinks;

 })

  let  selectImageInput = document.querySelector("#fileInput");
  let   importedContainer = document.querySelector("#importedImage");
  
   selectImageInput.addEventListener("change",  selectedImage);


let imageSrc = '';
function selectedImage(){
  let fileReader = new FileReader();

  const imageCreate = document.createElement("img");
  fileReader.addEventListener("load",function() {
    imageSrc = this.result; 
    imageCreate.src = imageSrc; 
   
   localStorage.setItem("user-image",imageSrc);
    profilePicture.style.backgroundImage  = `url('${imageSrc}')`;
    profilePicture.className = "profile-pict";
    profilePicture.style.border = "2px solid rgb(99,58,255)"
    imageCreate.classList.add("imported-img");
    importedContainer.append(imageCreate);
    
  })
  fileReader.readAsDataURL(this.files[0])
 
}

let containerDiv = document.querySelector(".main-right-container");

