// Function for the "Yes" response
function respondYes() {
    document.getElementById("responseMessage").innerHTML = "Yay! You're my Valentine! ❤️ 😊";
    document.getElementById("videoIframe").src = "https://www.youtube.com/embed/kPa7bsKwL-c?si=K_dAYFyDebW2Kkkf"; // Set the 'Yes' video
    document.getElementById("videoContainer").style.display = "block"; // Show the video
}

// Function for the "No" response
function respondNo() {
    document.getElementById("responseMessage").innerHTML = "Aww, maybe next time! 😢 🎤";
    document.getElementById("videoIframe").src = "https://www.youtube.com/embed/AtPrjYp75uA?si=gvJOLMDrs947Jsae"; // Set the 'No' video
    document.getElementById("videoContainer").style.display = "block"; // Show the video
}
