// Function for the "Yes" response
function respondYes() {
    document.getElementById("responseMessage").innerHTML = "Yay! You're my Valentine! ❤️ 😊";
    document.getElementById("videoIframe").src = "https://www.youtube.com/embed/kPa7bsKwL-c?si=A-q4t4Y8S-IuBFZf"; // Set the 'Yes' video link
    document.getElementById("videoContainer").style.display = "block"; // Show the video container
}

// Function for the "No" response
function respondNo() {
    document.getElementById("responseMessage").innerHTML = "Aww, maybe next time! 😢 🎤";
    document.getElementById("videoIframe").src = "https://www.youtube.com/embed/ol2-D7NpOLk?si=cZCjNnriA99xs5YX"; // Set the 'No' video link
    document.getElementById("videoContainer").style.display = "block"; // Show the video container
}
