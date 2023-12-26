

const copy = document.getElementById("copyUrl");
const copyMsg = document.querySelector(".copied-url-msg")
copy.addEventListener("click",() => {
  let windowLocation = window.location.pathname;
  try {
    navigator.clipboard.writeText(windowLocation);
    
  } catch (error) {
    alert('failed',error);
  }
  copyMsg.style.display = "block";
  setTimeout(() => {
    copyMsg.style.display = "none";
  },2000)

})

