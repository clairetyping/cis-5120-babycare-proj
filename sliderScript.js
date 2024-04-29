document.addEventListener('DOMContentLoaded', (event) => {
    const rangeInput = document.getElementById('amountRange');
    const rangeDisplay = document.getElementById('amountDisplay');
    const labels = document.querySelectorAll('.slider-labels span');


    function updateSlider(value) {
      
        rangeDisplay.value = value + ' fl oz';
        rangeDisplay.textContent = value + ' fl oz'; 

        
        const newLeft = (value - parseFloat(rangeInput.min)) / (parseFloat(rangeInput.max) - parseFloat(rangeInput.min)) * 100;
        rangeDisplay.style.left = `calc(${newLeft}% + (${12 - newLeft * 0.24}px))`; 

      
        labels.forEach(label => {
            label.classList.remove('active');
            if (label.textContent.trim() === value.toFixed(2)) {
                label.classList.add('active');
            }
        });
    }
    
    
    updateSlider(parseFloat(rangeInput.value));


    rangeInput.addEventListener('input', function () {
        updateSlider(parseFloat(rangeInput.value));
    });


    function toggleActiveClass(button) {
        button.classList.toggle('active');
    }

  
    const milkTypeButtons = document.querySelectorAll('.button-group-top-row .button, .button-group-bottom-row .button');
    milkTypeButtons.forEach(button => {
        button.addEventListener('click', () => toggleActiveClass(button));
    });

    const ingredientButtons = document.querySelectorAll('.button-group-ingredient .button');
    ingredientButtons.forEach(button => {
        button.addEventListener('click', () => toggleActiveClass(button));
    });

    
    const confirmButton = document.getElementById('confirmFeedingButton');


    function getSelectedValues(buttons) {
        return Array.from(buttons).filter(button => button.classList.contains('active')).map(button => button.textContent);
    }


    confirmButton.addEventListener('click', function () {
       
        const selectedMilkTypes = getSelectedValues(milkTypeButtons);
        const selectedIngredients = getSelectedValues(ingredientButtons);
        const memoInput = document.getElementById('memo-input').value;
        const amountValue = document.getElementById('amountDisplay').textContent; // The currently selected amount


        const feedingRecord = {
            milkTypes: selectedMilkTypes,
            ingredients: selectedIngredients,
            amount: amountValue,
            memo: memoInput
        };


        localStorage.setItem('feedingRecord_' + new Date().toISOString(), JSON.stringify(feedingRecord));

        alert('Feeding record saved!');
    });




});
