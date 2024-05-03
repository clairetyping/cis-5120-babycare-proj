document.addEventListener('DOMContentLoaded', function() {
    
    // Shared elements across multiple pages
    let loginButton = document.getElementById('loginButton');
    let signUpButton = document.getElementById('signupButton');
    let getStartedButton = document.getElementById('getStartedButton');
    let newFamilyButton = document.getElementById('newFamilyButton');
    let addButton = document.getElementById('addButton');
    let diaperIcon = document.getElementById('diaperIcon');
    let loginToMain = document.getElementById('loginToMain');
    let confirmSleepButton = document.getElementById('confirmSleepButton');
    let confirmFeedingButton = document.getElementById('confirmFeedingButton');
    
    // Elements that may not exist on all pages
    let photoButton = document.getElementById('photoButton');
    let photoUpload = document.getElementById('photoUpload');
    let boyButton = document.getElementById('boyButton');
    let girlButton = document.getElementById('girlButton');
    let confirmButton = document.getElementById('confirmButton');
    let confirmDiaperButton = document.getElementById('confirmDiaperButton');

    // Utility function to handle navigation
    function navigateTo(url) {
        window.location.href = url;
    }

    // Photo button and upload logic for registerUser.html
    if (photoButton && photoUpload) {
        photoButton.addEventListener('click', function() {
            photoUpload.click();
        });
        photoUpload.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var preview = document.getElementById('preview');
            preview.style.backgroundImage = `url('${e.target.result}')`;
            preview.style.display = 'block'; 
        };
        reader.readAsDataURL(event.target.files[0]);
    }
});
    }

    // Gender button logic for registerUser.html
    if (boyButton) {
        boyButton.addEventListener('click', function() {
            boyButton.classList.add('selected');
            girlButton.classList.remove('selected');
        });
    }
    if (girlButton) {
        girlButton.addEventListener('click', function() {
            girlButton.classList.add('selected');
            boyButton.classList.remove('selected');
        });
    }

    // Confirm button logic for both pages
    /*
    if (confirmButton) {
        confirmButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission if confirmButton is part of a form
            navigateTo('mainPage.html');
        });
    }
    */

    if (confirmButton) {
        confirmButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            const babyName = document.getElementById('babyName').value;
            if (babyName) {
                localStorage.setItem('babyName', babyName); 
                console.log('Saved name:', babyName);
                navigateTo('mainPage.html'); 
            } else {
                console.log('No name entered'); 
            }
        });
    }
    if (confirmDiaperButton) {
        confirmDiaperButton.addEventListener('click', function() {
            navigateTo("newDiaperInMain.html");
        });
    }

    // Shared navigation logic for multiple pages
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            navigateTo('loginPage.html');
        });
    }
    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            navigateTo('signupPage.html');
        });
    }
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function() {
            navigateTo('newUserPage.html');
        });
    }
    if (newFamilyButton) {
        newFamilyButton.addEventListener('click', function() {
            navigateTo('registerUserPage.html');
        });
    }
    if (addButton) {
        addButton.addEventListener('click', function() {
            navigateTo("addRecord.html");
        });
    }
    if (diaperIcon) {
        diaperIcon.addEventListener('click', function() {
            navigateTo("recordDiaper.html");
        });
    }
    if (loginToMain) {
        loginToMain.addEventListener('click', function() {
            navigateTo("mainPage.html");
        });
    }
    if (confirmSleepButton) {
        confirmSleepButton.addEventListener('click', function() {
            navigateTo("newSleepInMain.html");
        });
    }
    if (confirmFeedingButton) {
        confirmFeedingButton.addEventListener('click', function() {
            navigateTo("newFeedingInMain.html");
        });
    }

    document.querySelectorAll('.back-link').forEach(backLink => {
        backLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            navigateTo(this.getAttribute('href')); 
        });
    });


    var defaultActivityModal = document.getElementById("defaultActivityModal");
    var btnDefaultActivity = document.getElementById("defaultActivity");
    /*var spanClose = defaultActivityModal.getElementsByClassName("close")[0];*/
    var spanClose = defaultActivityModal ? defaultActivityModal.getElementsByClassName("close")[0] : null;
    

    if (defaultActivityModal && btnDefaultActivity && spanClose) {
        btnDefaultActivity.onclick = function() {
            defaultActivityModal.style.display = "block";
        };

        spanClose.onclick = function() {
            defaultActivityModal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target === defaultActivityModal) {
                defaultActivityModal.style.display = "none";
            }
        };
    }
   
});




function capitalizeFirstLetter(string) {
    return string && string.length > 0 ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : "";
}

function updateBabyName() {
    const displayNameElements = document.querySelectorAll('#babyNameDisplay');
    if (displayNameElements.length > 0) {
        const babyName = localStorage.getItem('babyName');
        const formattedName = capitalizeFirstLetter(babyName);
        displayNameElements.forEach(element => {
            element.textContent = formattedName ? formattedName : "Little one!";
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateBabyName(); 
});
