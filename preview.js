

const copy = document.getElementById("copyUrl");
const copyMsg = document.querySelector(".copied-url-msg")
copy.addEventListener("click",() => {
  let windowLocationUrl = window.location.href;
  try {
    navigator.clipboard.writeText(windowLocationUrl);
    
  } catch (error) {
    alert('failed',error);
  }
  copyMsg.style.display = "block";
  setTimeout(() => {
    copyMsg.style.display = "none"
  },2000)

})

