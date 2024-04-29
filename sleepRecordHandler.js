
function saveSleepData(sleepData) {
    const timestamp = new Date().toISOString();
    localStorage.setItem('sleepRecord_' + timestamp, JSON.stringify(sleepData));
}


document.addEventListener('DOMContentLoaded', () => {
  
    const confirmButton = document.getElementById('confirmSleepButton');
    const nightButton = document.getElementById('nightButton');
    const dayButton = document.getElementById('dayButton');
    const fromPicker = document.getElementById('fromPicker');
    const toPicker = document.getElementById('toPicker');
    const memoInput = document.getElementById('memo-input');


    confirmButton.addEventListener('click', () => {
     
        const sleepType = nightButton.classList.contains('active') ? 'Night' : 'Day';
        const fromTime = fromPicker.value;
        const toTime = toPicker.value;
        const memo = memoInput.value.trim();


        const sleepData = {
            sleepType,
            fromTime,
            toTime,
            memo
        };

       
        saveSleepData(sleepData);

      
        alert('Sleep record saved successfully.');


        nightButton.classList.add('active');
        dayButton.classList.remove('active');
        fromPicker.value = '';
        toPicker.value = '';
        memoInput.value = '';
    });
});


