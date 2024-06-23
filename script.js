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

// show sidebar
function showSidebar(){
let sidebar =  document.querySelector('.sidebar-container');
sidebar.style.display = 'flex';
}

// hide sidebar
function hideSidebar(){
  let sidebar = document.querySelector('.sidebar-container');
  sidebar.style.display = 'none';
}

const navigateToHome = () => {
  window.location.href = "index.html";
}

 function spotifyGithub(){
   // Redirect to a new page
   window.location.href = "https://github.com/anshulkumar68/Spotify_Clone";
}

const moreProjects = () => {
   window.location.href = "projects.html";
}

const reactChatGithub = () => {
  window.location.href =
    "https://github.com/anshulkumar68/React_Chat_Application";
  } 
  
  const pigGameGithub = () => {
  window.location.href = "https://github.com/anshulkumar68/PIG_Game";
}

const passwordGeneratorGithub = () => {
  window.location.href =
    "https://github.com/anshulkumar68/Learning_Reactjs/tree/main/Learning_React";
}