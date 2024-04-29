document.addEventListener('DOMContentLoaded', function() {
    const dates = document.querySelectorAll('.dates .date');
    const todayLabel = document.getElementById('todayLabel');

    // Function to update the selected date
    function updateSelectedDate(selectedElement) {
        dates.forEach(date => {
            date.classList.remove('selected'); 
            if (date.dataset.day === '13') {
                date.classList.add('default'); 
            }
        });
        selectedElement.classList.add('selected'); 
        if (selectedElement.dataset.day === '13') {
            selectedElement.classList.remove('default'); 
        }
    }

    
    dates.forEach(date => {
        date.addEventListener('click', function() {
            updateSelectedDate(this);
        });
    });

   
    const todayDateElement = document.querySelector('.date[data-day="13"]');
    if (todayDateElement) {
        todayDateElement.classList.add('today', 'selected'); 
        todayDateElement.classList.remove('default');
    }

    
    todayLabel.style.display = 'block';


    const settingsButton = document.getElementById('settingsButton');
    const settingsMenu = document.getElementById('settingsMenu');

    settingsButton.addEventListener('click', function(event) {
        toggleDropdown(settingsMenu);
        event.stopPropagation(); 
    });

   
    function toggleDropdown(dropdown) {
        const isDisplayed = dropdown.style.display === 'block';
        dropdown.style.display = isDisplayed ? 'none' : 'block';
    }


    window.addEventListener('click', function() {
        settingsMenu.style.display = 'none';
    });


    settingsMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });


 
    var btnShowDefaultActivity = document.getElementById('defaultActivity');


    var modalDefaultActivity = document.getElementById('defaultActivityModal');

   
    var spanCloseDefaultActivity = modalDefaultActivity.getElementsByClassName('close')[0];

    btnShowDefaultActivity.onclick = function() {
        modalDefaultActivity.style.display = 'block';
    };

  

    spanCloseDefaultActivity.onclick = function() {
        modalDefaultActivity.style.display = 'none';
    };

    
    modalDefaultActivity.addEventListener('click', function(event) {
        if (event.target === modalDefaultActivity) {
            modalDefaultActivity.style.display = 'none';
        }
    });
    
});
