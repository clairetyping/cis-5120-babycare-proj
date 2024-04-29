document.addEventListener('DOMContentLoaded', (event) => {
    const rangeInput = document.getElementById('amountRange');
    const rangeDisplay = document.getElementById('amountDisplay');
    const labels = document.querySelectorAll('.slider-labels span');


    function updateSlider(value) {
        // Update the display value
        rangeDisplay.value = value + ' fl oz';
        rangeDisplay.textContent = value + ' fl oz'; // Set the text content for the output

        // Adjust the position of the output
        const newLeft = (value - parseFloat(rangeInput.min)) / (parseFloat(rangeInput.max) - parseFloat(rangeInput.min)) * 100;
        rangeDisplay.style.left = `calc(${newLeft}% + (${12 - newLeft * 0.24}px))`; 

        // Update active number label
        labels.forEach(label => {
            label.classList.remove('active');
            if (label.textContent.trim() === value.toFixed(2)) {
                label.classList.add('active');
            }
        });
    }
    
    // Initialize with the default value
    updateSlider(parseFloat(rangeInput.value));

    // Event listener for when the range value changes
    rangeInput.addEventListener('input', function () {
        updateSlider(parseFloat(rangeInput.value));
    });

      // Function to toggle the 'active' class for buttons
    function toggleActiveClass(button) {
        button.classList.toggle('active');
    }

    // Add click event listeners to milk type and ingredient buttons
    const milkTypeButtons = document.querySelectorAll('.button-group-top-row .button, .button-group-bottom-row .button');
    milkTypeButtons.forEach(button => {
        button.addEventListener('click', () => toggleActiveClass(button));
    });

    const ingredientButtons = document.querySelectorAll('.button-group-ingredient .button');
    ingredientButtons.forEach(button => {
        button.addEventListener('click', () => toggleActiveClass(button));
    });

    // Select the confirm button
    const confirmButton = document.getElementById('confirmFeedingButton');

    // Function to get selected values from buttons
    function getSelectedValues(buttons) {
        return Array.from(buttons).filter(button => button.classList.contains('active')).map(button => button.textContent);
    }

    // Event listener for the confirm button click
    confirmButton.addEventListener('click', function () {
        // Get the value of all the inputs
        const selectedMilkTypes = getSelectedValues(milkTypeButtons);
        const selectedIngredients = getSelectedValues(ingredientButtons);
        const memoInput = document.getElementById('memo-input').value;
        const amountValue = document.getElementById('amountDisplay').textContent; // The currently selected amount

        // Create an object with the data
        const feedingRecord = {
            milkTypes: selectedMilkTypes,
            ingredients: selectedIngredients,
            amount: amountValue,
            memo: memoInput
        };

        // Save the feeding record to local storage
        localStorage.setItem('feedingRecord_' + new Date().toISOString(), JSON.stringify(feedingRecord));

        // Optionally, confirm to the user that the data was saved
        alert('Feeding record saved!');
    });




});
