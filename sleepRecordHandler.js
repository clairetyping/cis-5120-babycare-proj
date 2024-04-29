// Function to save sleep data to localStorage
function saveSleepData(sleepData) {
    const timestamp = new Date().toISOString();
    localStorage.setItem('sleepRecord_' + timestamp, JSON.stringify(sleepData));
}

// Event listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the confirm button and other necessary elements
    const confirmButton = document.getElementById('confirmSleepButton');
    const nightButton = document.getElementById('nightButton');
    const dayButton = document.getElementById('dayButton');
    const fromPicker = document.getElementById('fromPicker');
    const toPicker = document.getElementById('toPicker');
    const memoInput = document.getElementById('memo-input');

    // Event listener for the confirm button
    confirmButton.addEventListener('click', () => {
        // Capture data from the form
        const sleepType = nightButton.classList.contains('active') ? 'Night' : 'Day';
        const fromTime = fromPicker.value;
        const toTime = toPicker.value;
        const memo = memoInput.value.trim();

        // Create an object with the captured data
        const sleepData = {
            sleepType,
            fromTime,
            toTime,
            memo
        };

        // Save the sleep data using the function
        saveSleepData(sleepData);

        // Provide feedback to the user
        alert('Sleep record saved successfully.');

        // Optionally, reset the form or redirect the user
        nightButton.classList.add('active');
        dayButton.classList.remove('active');
        fromPicker.value = '';
        toPicker.value = '';
        memoInput.value = '';
    });
});


