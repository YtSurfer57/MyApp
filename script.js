function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('visible'); // Remove visible class from all sections
    });

    const newSection = document.getElementById(sectionId);
    newSection.classList.add('visible'); // Add the visible class

    // Smoothly scroll to the section
    newSection.scrollIntoView({ behavior: 'smooth' });
}

function showParentOptions() {
    showSection('parent-options');
}

function showMomOptions() {
    showSection('mom-options');
}

function showDadOptions() {
    showSection('dad-options');
}

function showGPUComparison() {
    showSection('gpu-comparison');
}

function showCPUComparison() {
    showSection('cpu-comparison');
}

function showMotherboardComparison() {
    // Replace 'next-page-id' with the actual ID of the next page you want to show.
    showSection('motherboard-comparison'); 
}

function showSsdComparison() {
    showSection('ssd-comparison');
}

function showRamComparison() {
    showSection('ram-comparison');
}

function showInternetSpeedComparison() {
    showSection('internet-speed-comparison');
}

function showEndingPage() {
    showSection('ending-page-crap');
}

function showEndingPage1() {
    showSection('ending-page-nice');
}

function showRecomendations() {
    showSection('Recomendation-page');
}

function showOptions() {
    showSection('navigation-buttons');
}

// Assuming showSection is defined to manage transitions

function showBackExit() {
    showSection('back-exit');
}

function exitApp() {
    alert("Exiting the application. Goodbye!");
    window.close(); // Attempt to close the current tab
}

function ComputerEnd() {
    alert("Thanks for reading, Goodbye!!!");
    showSection('parent-options');
}

function checkPasswordForMom() {
    var password = prompt("Please enter the password:");
    if (password === "MyMother!!") {
        showMomOptions(); // Call your function to show the dad options
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function checkPasswordForDad() {
    var password = prompt("Please enter the password:");
    if (password === "AbhishekMyFather") {
        showDadOptions(); // Call your function to show the dad options
    } else {
        alert("Incorrect password. Please try again.");
    }
}

// Function to show the mom/dad options page
function showMomOrDadOptions() {
    // Your logic to display the mom or dad options goes here
    // For example:
    // document.getElementById("optionsPage").style.display = "block";
    // Or update the content of the page to show the options
    console.log("Redirecting to mom/dad options...");
}



// Initial fade-in effect for visible section
document.addEventListener('DOMContentLoaded', () => {
    showSection('intro');
});
