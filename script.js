// Function to set scroll to particular div
function scrollToChat() {
  var element = document.getElementById("lets-chat");
  element.scrollIntoView({ behavior: "smooth" });
}

// to download
document.querySelector(".resume-download").addEventListener("click", function(){
    let result = window.confirm("Do you want to download the Resume ?");
    if(result === false)
        event.preventDefault();
});
