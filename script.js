function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('visible');
    });

    const newSection = document.getElementById(sectionId);
    newSection.classList.add('visible');

    
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



function showBackExit() {
    showSection('back-exit');
}

function exitApp() {
    alert("Exiting the application. Goodbye!");
    window.close(); 
}

function ComputerEnd() {
    alert("Thanks for reading, Goodbye!!!");
    showSection('parent-options');
}

function checkPasswordForMom() {
    var password = prompt("Please enter the password:");
    if (password === "MyMother!!") {
        showMomOptions(); 
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function checkPasswordForDad() {
    var password = prompt("Please enter the password:");
    if (password === "AbhishekMyFather") {
        showDadOptions();
    } else {
        alert("Incorrect password. Please try again.");
    }
}


function showMomOrDadOptions() {
    
    console.log("Redirecting to mom/dad options...");
}




document.addEventListener('DOMContentLoaded', () => {
    showSection('intro');
});
