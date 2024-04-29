document.addEventListener('DOMContentLoaded', () => {
    const btnShowSleep = document.getElementById('btnShowSleep');
    const sleepModal = document.getElementById('sleepModal');
    const sleepInfo = document.getElementById('sleepInfo');
    const sleepTypeDisplay = document.getElementById('sleepTypeDisplay');
    const closeSleepModal = sleepModal.querySelector('.close');  


    function getMostRecentSleepRecord() {
        let mostRecentRecord;
        let mostRecentTimestamp = -Infinity;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('sleepRecord_')) {
                const timestamp = Date.parse(key.split('_')[1]);
                if (timestamp > mostRecentTimestamp) {
                    mostRecentTimestamp = timestamp;
                    mostRecentRecord = JSON.parse(localStorage.getItem(key));
                }
            }
        }
        return mostRecentRecord;
    }

  
    const mostRecentRecord = getMostRecentSleepRecord();
    
   
    if (mostRecentRecord) {
       
        sleepTypeDisplay.textContent = mostRecentRecord.sleepType;

       
        btnShowSleep.addEventListener('click', () => {
            sleepInfo.innerHTML = `
                <p>Type: ${mostRecentRecord.sleepType}</p>
                <p>From: ${mostRecentRecord.fromTime}</p>
                <p>To: ${mostRecentRecord.toTime}</p>
                <p>Memo: ${mostRecentRecord.memo}</p>
            `;
            sleepModal.style.display = 'block';
        });
    } else {
        sleepTypeDisplay.textContent = 'No recent sleep records found.';
        sleepInfo.textContent = 'No recent sleep records found.';
    }

   
    closeSleepModal.addEventListener('click', () => {
        sleepModal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === sleepModal) {
            sleepModal.style.display = 'none';
        }
    });
});
