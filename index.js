
console.log('hello world');


let saveBtn = document.getElementById("saveInfo");

let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("password");

//window.addEventListener("load",function(){
  const checkLoginBtn = document.getElementById("checkLogin");

  //checkLoginBtn.addEventListener("click",function(e) {
  function validateForm(e){
  //alert("hel")
    e.preventDefault();
    const passError = document.getElementById("loginpassError"); 
    const emailError = document.getElementById("loginemailError"); 
   // passError.innerHTML = "failed";
    if(userEmail.value === "" || userPassword === null || !userEmail.value.includes("@")) {
       passError.innerHTML = userPassword.value ==="" ? "Password can't be empty" : "";
       emailError.innerHTML = userEmail.value == "" ? "Not Valid Email" : "";
       //return false;
     }else{
      this.submit();
     }
    //  if (!userEmail.value.includes("@")) {
    //    emailError.innerHTML = "Inavlid Email";
    //  } 
    }
  //})


const mainLinksContainer = document.querySelector(".main-links-container");
const profileBtn = document.getElementById("profile");
const linksButton = document.getElementById("links");
const customizeContainer = document.querySelector(".create-links-container")

const profileDetails = document.querySelector(".main-right-container")
 

linksButton.addEventListener("click",function(event) {
   if(event.target === this){
    this.classList.add('active-btn');
    profileBtn.classList.remove("active-btn")
    profileDetails.style.display = 'none';
  customizeContainer.style.display  = 'block';

}

})

const rightC  = document.querySelector(".main-right-container");
profileBtn.addEventListener("click",function(event) {
  if(event.target === this){
   this.classList.add("active-btn");
   linksButton.classList.remove("active-btn");
    customizeContainer.style.display = 'none';
   profileDetails.style.display  = 'block';

  }
  })




let addLink = document.getElementById("addLink");


let listItem = '';
let clickedOption ='';
let getValue  ='';
let selectOption ='';


 function countingTheChildren(container,innerCounter){

    let  counter = container.children.length ;
    innerCounter.innerHTML =  counter;

}

let counterDiv = '';
let counter ='';

let websiteUrl =  [];




function addDiv(){
 
//alert('ger')
console.log(mainLinksContainer.children.length)

 let createMain = document.createElement("div");
 createMain.innerHTML = `
 <div class="created-link-div" id="createLink" >
                   <div class="select-link">
                    <div class="top-content">
                        <h2 class="description">Link #<span id="count">${counterDiv}</span></h2>
                        <button id="remove" class="description">Remove</button>
                    </div>
                    <h4 class="description">Platform</h4>
                    <div class="select-option">
                        <div class="items"><i class=""></i>Click to select...<i class="fa fa-arrow-down down-icon"></i></div>
                        <div class="list-options">
                        <li value="github"  data-background="rgb(26,26,26)" class="options"><i class="fa fa-github"></i>GitHub</li>
                        <li value="youtube" data-background="rgb(238,57,57)" class="options"><i class="fa fa-youtube"></i>YouTube</li>
                        <li value="linked" data-background="rgb(45,104,255)" class="options"><i class="fa fa-linkedin"></i>Linked In</li>
                        <li value="twitter" data-background="rgb(67,183,233)" class="options"><i class="fa fa-twitter"></i>Twitter</li>
                        <li value="google" data-background="rgb(45,104,255)" class="options"><i class="fa fa-google"></i>Google</li>
                        <li value="instagram" data-background="rgb(197,57,142)" class="options"><i class="fa fa-instagram"></i>Instagram</li>
                        <li value="twitch" data-background="rgb(145,70,255)" class="options"><i class="fa fa-twitch"></i>Twitch</li>
                        <li value="stack-overflow" data-background="rgb(236,113,0)" class="options"><i class="fa fa-stack-overflow"></i>Stack Overflow</li>
                        <li value="facebook" data-background="rgb(36,66,172)" class="options"><i class="fa fa-facebook"></i>Facebook</li>


                        </div>
                        <h4 class="description">Link</h4>
                        <div class="input">
                        <input type="text" class="social-link" placeholder= "Write the link of {github} ">
                        <span class="error-url" ></span>
                        <i class="fa fa-chain social-link-icon"></i>
                     
                        </div>
                    </div>
                   </div>
 `;
 
 mainLinksContainer.append(createMain);

 selectOption = createMain.querySelector(".select-option")
   counter = createMain.querySelector("#count");

   let mainDiv = createMain.querySelector(".items");

  const  listItem = createMain.querySelector(".list-options");
  console.log(listItem)
  mainDiv.addEventListener("click",() => closeLists(listItem));

  let removeBtn = createMain.querySelector("#remove");

  removeBtn.addEventListener("click",function() {
   createMain.remove();
   linkContainer.remove();
   countingTheChildren(mainLinksContainer,counter)

  })

 
   websiteUrl = createMain.querySelector(".social-link");

   const errorMsg = createMain.querySelector(".error-url");
   websiteUrl.addEventListener("input",() => checkUrl(websiteUrl.value,errorMsg,getValue));
   

  const options = createMain.querySelectorAll(".options");
 options.forEach(option => {
 // clickedOption = option;
   option.addEventListener("click",() => addOptions(mainDiv,option,clickedOption));
  
   countingTheChildren(mainLinksContainer,counter)
  
});
saveBtn.disabled = true;
saveBtn.classList.add("disabled-btn")

}

 function closeLists(items){

    if(items.style.display === "none" || items.style.display === "" ){
      items.style.display = "block";
      }else{
        items.style.display = "none";
    
      }

}


function addOptions(mainDiv,item,back) {
  mainDiv.innerHTML = '';
  getValue = item.getAttribute("value");
  back = item.getAttribute("data-background")
 
  let div = document.createElement("div");
  div.innerHTML = item.innerHTML;
  
  selectOption.querySelector(".input input").placeholder = `Type your full user link of ${getValue}`;
  mainDiv.appendChild(div);
  closeLists(mainDiv.nextElementSibling); 
  
 linkCreate(websiteUrl.value,back,getValue.toUpperCase());


}


addLink.addEventListener("click",addDiv);
//let urlPattern;
function checkUrl(inputValue,error) {

let platforms = ["facebook",'twitter',"linkedin",'instagram',"youtube","github",'google'];
let platformName = platforms.join("|");

  const newRegex = new RegExp(`^(https?:\/\/)?(?:www\.)?(${platformName})\.com\/\\S([-a-zA-Z0-9@:%_+.~#?&//=]*)*$`, 'i');
   let urlPattern = newRegex.test(inputValue);
  
  console.log(urlPattern)

  if(urlPattern === true ) {
    error.innerHTML= "URL is Correct";

    error.style.color = 'blue';
    
  }else{
   error.innerHTML = 'Url is inocorrect ';
   error.style.color = 'red';
  }
  saveBtn.disabled = true;
 
  console.log(urlPattern);
  if(urlPattern ){
    saveBtn.classList.remove("disabled-btn");
    saveBtn.style.cursor = 'pointer';
    console.log('mathced');
    saveBtn.disabled = false;
    //return true;
  }else{
    saveBtn.classList.add("disabled-btn");
    console.log('mathced');
    saveBtn.disabled = true; 
  }

  return newRegex.test(inputValue);

}



const linkBox = document.querySelector(".link-box")


let linkContainer  = [];
let earlyLinkText = '';
function linkCreate(linkAddress,getBackground,linkText) {
  linkContainer = document.createElement("div"); 
  linkContainer.innerHTML  = ` 
 
  <a  target="_blank">${linkText}</h4> 
  <span class="material-symbols-outlined link-icon">east</span> 

  `;
  
  earlyLinkText = linkContainer.querySelector('a');
  linkContainer.className = "link-style";
  linkContainer.style.backgroundColor = getBackground;
 
  linkBox.appendChild(linkContainer);
  addLinksThroughBtn(linkText)
  saveToLocalStorage();
}

let anchor = '';

function addLinksThroughBtn(linksText){
  
   anchor = document.createAttribute("href");
  anchor = websiteUrl.value;
  earlyLinkText.setAttribute('href',anchor);
 // console.log(anchor);
 
}

saveBtn.disabled = true;
saveBtn.classList.add("disabled-btn");
saveBtn.style.cursor = 'not-allowed';

saveBtn.addEventListener("click",addCredentials);

let userNameInput = document.getElementById("first-name");
let lastNameInput = document.getElementById("last-name");
let emailInput = document.getElementById("email");
let profileName = document.getElementById("username");
let profileEmail = document.getElementById("user-email");


let allInputElem = document.querySelectorAll(".input-name");

allInputElem.forEach(input => {
  input.addEventListener("input",checkForValue)
});

function checkForValue(){
  if(userNameInput.value === '' || lastNameInput.value === '' || emailInput.value === ''){
    saveBtn.disabled = true;
    saveBtn.style.cursor = 'not-allowed'
    saveBtn.classList.add("disabled-btn")
  }else{
    saveBtn.disabled = false;
    saveBtn.style.cursor = 'pointer'

    saveBtn.classList.remove("disabled-btn")
  }
}



userNameInput.value =localStorage.getItem('firstName');
lastNameInput.value = localStorage.getItem("lastName");
emailInput.value = localStorage.getItem("email");



function saveToLocalStorage(){

  localStorage.setItem("firstName",userNameInput.value);
  localStorage.setItem("lastName",lastNameInput.value)
  localStorage.setItem("email",emailInput.value);
 // localStorage.setItem("user-image",);
  localStorage.setItem("link",linkBox.innerHTML);
  localStorage.setItem("anchor",anchor);

}



function addingUserInfoToProfile(){
 

  profileName.innerHTML = `${userNameInput.value } ${lastNameInput.value}`;
  profileEmail.innerHTML = emailInput.value;
  
  }
  

function addCredentials(){
 
  addLinksThroughBtn()
  saveToLocalStorage();
  addingUserInfoToProfile();
  

}


let clearHistory = document.getElementById("clearHistory");

clearHistory.addEventListener("click",function() {
  window.localStorage.clear();
  window.location.reload();
})


