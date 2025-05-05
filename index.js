// -----------------------------function to display all apps----------------------
// function displayApps(){
//     document.querySelector(".all-apps").style.display="flex";
// }
// -------------------scrolling animation--------------
document.addEventListener("DOMContentLoaded", () => {
    const divElements = document.querySelectorAll("div"); // Select all <div> elements

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in"); // Add animation class when in view
            }
        });
    });

    divElements.forEach((div) => observer.observe(div)); // Observe each <div> element
});
// ----------------------------best chatboot-----------

// DOM Elements


// ------------------------chatbot-----------------------
function openChatOverFlow(){
    document.querySelector(".chat-overflow").style.display="flex";

};
function openChattingPage(){
    document.querySelector(".chat-overflow").style.display="none";
    document.querySelector(".chat-container").style.display="flex";

};
const greetings = [
    "Hi there 👋, how was your day?",
    "Hello! Hope you're doing well today 😊",
    "Hey! How has your day been so far?",
    "Good to see you 🙌 How's your day going?",
    "Welcome! How's everything with you today? 🌟",
    "Hi 👋, how are you feeling today?",
    "Hey there! What's the best part of your day so far? 😄",
    "Hi! Long time no chat 😄",
    "Hello friend! How are things on your end?",
    "Yo! What’s up? 😎",
    "Greetings! What’s new today?",
    "Good day! Anything exciting going on?",
    "Hi there! Ready to get started? 💡",
    "Hey! It’s great to hear from you again 👏"
  ];
  
  const goodbye = [
    "It was great chatting with you! 👋",
    "Talk to you soon! Stay awesome 🌟",
    "Thanks for sharing your day with me 😊",
    "Goodbye for now, take care! ✨",
    "Catch you later! Stay positive 😎",
    "See you next time! 👋",
    "Bye! Wishing you a fantastic day ahead! 🌞",
    "Farewell! Stay safe and happy! ✌️",
    "Signing off for now! 💻",
    "Later gator! 🐊",
    "Peace out! ✌️",
    "Alright then, take care! 😊",
    "Until next time! 🎉"
  ];
  
  const assistancePrompts = [
    "What can I help you with today? 🤔",
    "How may I assist you? 😊",
    "Is there anything you need help with? 🚀",
    "Let me know what you need! 👨‍💻",
    "I'm here to help! What can I do for you?",
    "Tell me, how can I assist you today? 💬",
    "Need support with something? Just ask! 🙌",
    "What would you like help with? 🎯",
    "Do you have a question? I'm all ears 👂",
    "Anything you'd like to explore or fix? 🔧",
    "Let’s solve something together! 💡",
    "Shoot your question my way 🚀",
    "Looking for advice or help with something?"
  ];
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const chatMessages = document.getElementById('chat-messages');
  sendButton.addEventListener('click', function (){
    // console.log("btn clicked")
    var userMessage = document.getElementById("message-input").value;
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    
    // console.log(userMessage)

    // function checkGreetings(){
        // if(greetings.includes(userMessage.toLowerCase())){
        //     const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        //     console.log(randomGreeting)
        // }
        
    // }; 
});

//   console.log(goodbye[1])
//   ---------------------getting user inputs values-------
// function sendMessage(){
//     var userInputValues = document.getElementById("texting").value;
//     var userResponse = document.getElementById("chatting-body")
//     var newText = document.createElement("p");
//     newText.classList.add("chatting-body")
//     newText.innerHTML= `
//     <div class="chatting-body">
//     <p id="user-input">${userInputValues}</p> <i class="fa-solid fa-user"></i> 
    
//     </div>
//     `;
//     document.getElementById("texting").value = "";
//     console.log(userInputValues)
//     checkGreetings() 


// };
// --------------------------dispalyong projects card----------------------------

  const projects = document.querySelectorAll('.project');


  const portfolioCard = document.querySelector('.portfolio-card');
  const projectImageCard = document.getElementById('project-image-card');
  const projectTitle = document.getElementById('project-title');
  const projectDescription = document.getElementById('project-description');
//   --------------technologies on project cards----------
  const technologySkills = document.getElementById('technology-skills');
  const technologySkills2 = document.getElementById('technology-skills2');
  const technologySkills3 = document.getElementById('technology-skills3');
  const technologySkills4 = document.getElementById('technology-skills4');
  const technologySkills5 = document.getElementById('technology-skills5');
  const technologySkills6 = document.getElementById('technology-skills6');

 
  const closeBtn = document.querySelector('.fa-xmark');

 
  projects.forEach(project => {
    project.addEventListener("click", () => {

      const image = project.dataset.image;
      const title = project.dataset.title;
      const description = project.dataset.description;
      const tecskills = project.dataset.tecskills;
      const tecskills2 = project.dataset.tecskills2;
      const tecskills3 = project.dataset.tecskills3;
      const tecskills4 = project.dataset.tecskills4;
      const tecskills5 = project.dataset.tecskills5;
      const tecskills6 = project.dataset.tecskills6;


      projectImageCard.src = image;
      projectTitle.innerText = title;
      projectDescription.innerText = description;
      technologySkills.innerText = tecskills;
      technologySkills2.innerText = tecskills2;
      technologySkills3.innerText = tecskills3;
      technologySkills4.innerText = tecskills4;
      technologySkills5.innerText = tecskills5;
      technologySkills6.innerText = tecskills6;

   
      portfolioCard.style.display = "block";
    //   document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", () => {
    portfolioCard.style.display = "none";
  });



// ----------------------functions to open projects, skills,certficates-------------------
var project = document.getElementById("projects");
var certificates = document.querySelector(".certificates");
var skills = document.querySelector(".skills-section");
function openProjects(){
    project.style.display="block";
    certificates.style.display="none";
    skills.style.display="none";
    
};
function openCertificates(){
    project.style.display="none";
    certificates.style.display="block";
    skills.style.display="none";
    
};
function openMyskills(){
    project.style.display="none";
    certificates.style.display="none";
    skills.style.display="block";
    
};
// --------------------------skills---------------------
var pythonCard = document.getElementById("python-card");
var javascriptCard = document.getElementById("javascript-card");
var htmlCard = document.getElementById("html-card");
var cssCard = document.getElementById("css-card");
var phpCard = document.getElementById("php-card");
var cCard= document.getElementById("c-card");

var pythonContent = document.querySelector(".python");
var javascriptContent = document.querySelector(".JavaScript");
var htmlContent = document.querySelector(".html");
var cssContent = document.querySelector(".css");    
var phpContent = document.querySelector(".php");
var cContent = document.querySelector(".c-programming");


pythonCard.addEventListener("click", function() {
    pythonContent.style.display= "flex";
    javascriptContent.style.display= "none";
    htmlContent.style.display= "none";
    cssContent.style.display= "none";
    phpContent.style.display= "none";
    cContent.style.display= "none";


});

javascriptCard.addEventListener("click", function() {
    javascriptContent.style.display= "flex";
    pythonContent.style.display= "none";
    htmlContent.style.display= "none";
    cssContent.style.display= "none";
    phpContent.style.display= "none";
    cContent.style.display= "none";

});

htmlCard.addEventListener("click", function() {
    htmlContent.style.display= "flex";
    javascriptContent.style.display= "none";
    pythonContent.style.display= "none";
    cssContent.style.display= "none";
    phpContent.style.display= "none";
    cContent.style.display= "none";

}
);

cssCard.addEventListener("click", function() {
    cssContent.style.display= "flex";
    javascriptContent.style.display= "none";
    htmlContent.style.display= "none";
    pythonContent.style.display= "none";
    phpContent.style.display= "none";
    cContent.style.display= "none";

}
);

phpCard.addEventListener("click", function() {
    phpContent.style.display= "flex";
    javascriptContent.style.display= "none";
    htmlContent.style.display= "none";
    cssContent.style.display= "none";
    pythonContent.style.display= "none";
    cContent.style.display= "none";

}
);

cCard.addEventListener("click", function() {
    cContent.style.display= "flex";
    javascriptContent.style.display= "none";
    htmlContent.style.display= "none";
    cssContent.style.display= "none";
    phpContent.style.display= "none";
    pythonContent.style.display= "none";

}
);
// ------------------------opening testimony form-------------------
var testimonyForm = document.querySelector(".client-testimony-form");
function openCommentForm(){
    // console.log("testimony form opened")
    testimonyForm.style.display="block";
    // testimonyForm.classList.add('active');
};
function closeCommentForm(){
    // console.log("testimony form closed")
    testimonyForm.style.display="none";

}
// -------------------------getting comment form values-------------------
document.getElementById("comment-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the default form submission

    // Collect form values
    var commenterName = document.getElementById("name").value;
    var commenterEmail = document.getElementById("email").value;
    var commenterPhone = document.getElementById("phone").value;
    var commenterColor = document.getElementById("color").value;
    var commenterRole = document.getElementById("role").value;
    var commenterDesc = document.getElementById("commenter-description").value;
    var commenterImage = document.getElementById("image").value;
    var successAlert = document.querySelector(".succes-alert");
    var errorAlert = document.querySelector(".error-alert");

    // Create the new comment card
    var newCommentCard = document.createElement("div");
    newCommentCard.classList.add("client-card");
    newCommentCard.style.background = `linear-gradient(to bottom, #ffffff 60%, ${commenterColor} 50%)`;

    newCommentCard.innerHTML = `
        <div class="title">
            <p>What <br> <span class="client-heading">Our Client</span> <br><span class="about-heading">ABOUT US</span></p>
        </div><br>
        <div class="about">
            <div class="top">
                <div class="profile">
                    <img src="${commenterImage}" id="client-image" alt="Client Image">
                </div>
                <div class="personal-info">
                    <h5 id="user-name">${commenterName}</h5>
                    <h5 id="user-role">${commenterRole}</h5>
                    <p>⭐⭐⭐⭐⭐</p> <!-- static 5 stars (you can make it dynamic later if you want) -->
                </div><br>
            </div>
            <p id="client-desc">${commenterDesc}</p>
        </div><br>
        <div class="tel-info">
            <p id="phone-number"><i class="fa-solid fa-phone-volume"></i> ${commenterPhone}</p>
            <a href="#" id="client-email"><i class="fa-solid fa-globe"></i> ${commenterEmail}</a>
        </div>
    `;
    setTimeout(function(){
        successAlert.style.display="block";
        setTimeout(function(){
            successAlert.style.display="none";

        }, 3000); //hide

    }, 100);// show
    // errorAlert.style.display="block";

    // Insert the new card at the beginning of the clients container
    let investorList = document.querySelector(".clients");
    investorList.insertBefore(newCommentCard, investorList.firstChild);

    // Clear form fields after submission
    document.getElementById("comment-form").reset();
});



// ------------------------scrolling comments-------------------
var commentContainers = document.querySelector(".clients");
function scrollCommentLeft(){
    commentContainers.scrollBy(240, 0);

}
function scrollCommentRight(){
    commentContainers.scrollBy(-240,0);
}




// // Disable right-click
// Disable right-click context menu
// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//     alert("Right-click is disabled on this page contact SEMANA for more info Tel:+250787845162.");
// });

// // Disable text copying using keyboard shortcuts (CTRL+C, Command+C)
// document.addEventListener('keydown', function(event) {
//     if ((event.ctrlKey && event.key === 'c') || 
//         (event.metaKey && event.key === 'c') || 
//         (event.ctrlKey && event.key === 'u') ||  // CTRL+U for view source
//         (event.metaKey && event.key === 'u') ||  // Command+U for view source
//         // F12 key for developer tools
//         event.key === 'F12' || 
//         // CTRL+SHIFT+I or Command+Option+I for inspect element
//         ((event.ctrlKey && event.shiftKey && event.key === 'i') || 
//          (event.metaKey && event.altKey && event.key === 'i'))) {
//         event.preventDefault();
//         alert("This action is disabled on this page contact SEMANA for more info Tel:+250787845162.");
//     }
// });

// // Disable copy operation
// document.addEventListener('copy', function(event) {
//     event.preventDefault();
//     alert("Copying is disabled on this page Contact SEMANA for more info Tel:+250787845162. ");
// });

// // Disable text selection
// document.addEventListener('selectstart', function(event) {
//     event.preventDefault();
//     return false;
// });

// // Detect and block DevTools opening
// (function() {
//     // Function to check if DevTools is open
//     function checkDevTools() {
//         const widthThreshold = window.outerWidth - window.innerWidth > 160;
//         const heightThreshold = window.outerHeight - window.innerHeight > 160;
        
//         if (widthThreshold || heightThreshold) {
//             document.body.innerHTML = "Inspector tools detected. This action is not allowed contact SEMANA for more info Tel:+250787845162.";
//             return true;
//         }
//         return false;
//     }
    
//     // Check periodically
//     setInterval(checkDevTools, 1000);
    
//     // Also listen for resize events which might indicate DevTools opening
//     window.addEventListener('resize', checkDevTools);
// })();

// // Block F12 key specifically
// document.onkeydown = function(e) {
//     if (e.key === 'F12') {
//         e.preventDefault();
//         alert("Developer tools access is disabled contact SEMANA for more info Tel:+250787845162.");
//         return false;
//     }
// };

// // Additional protection against inspect element
// document.addEventListener('keydown', function(e) {
//     // Prevent opening dev tools via various keyboard shortcuts
//     if ((e.ctrlKey && e.shiftKey && e.key === 'C') || // Chrome
//         (e.ctrlKey && e.shiftKey && e.key === 'J') || // Chrome
//         (e.ctrlKey && e.shiftKey && e.key === 'I') || // Chrome/Firefox
//         (e.metaKey && e.altKey && e.key === 'I') ||   // Safari/Chrome on Mac
//         (e.metaKey && e.altKey && e.key === 'J') ||   // Safari/Chrome on Mac
//         (e.metaKey && e.altKey && e.key === 'C')) {   // Safari/Chrome on Mac
//         e.preventDefault();
//         alert("Developer tools access is disabled contact me for more info Tel:+250787845162.");
//     }
// });
// -----------------------opening menu on responsive------------------------------
var sidemenu = document.querySelector(".links-button");

function openmenu(){
     sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-150px";
    // document.body.style.right="-150px";
}
// document.body.addEventListener('click', function() {
//     console.log("yoyooyoyo");
// });


// const x = document.getElementById("ornella");
// x.addEventListener('mouseover', function(){
//     console.log("ornella clicked");

// } );

// function changed(){
//     console.log("ornella clicked changed");

// }
// -------------------contact us--------------
const form = document.querySelector("form");
const Username = document.getElementById("contact-username");
const emailing = document.getElementById("User-contact-email");
const subjecting = document.getElementById("subject");
const message = document.getElementById("textarea-input");

function sendEmail (){

 const bodyMessage = `
 Full Name: ${Username.value}<br>
 Email: ${emailing.value}<br>
 Subject: ${subjecting.value}<br>
 Message: ${message.value}
`;
 Email.send({
   Host : "smtp.elasticemail.com",
   Username : "semana.coder.expert@gmail.com",
   Password : "D6F5E3A4A93F840BF5D6817C9E62EDD9705B",
   To : 'semana.coder.expert@gmail.com',
   From : "semana.coder.expert@gmail.com",
   Subject: "New message from contact form",
   Body : bodyMessage
}).then(response => {
 if (response === "OK") {
   Swal.fire({
     title: "Good job!",
     text: "Thanks for getting in touch ! We’ll review your submission shortly!",
     icon: "success"
   });
 }
});

}


form.addEventListener("submit" , (e) => {
 e.preventDefault();

 sendEmail();
})