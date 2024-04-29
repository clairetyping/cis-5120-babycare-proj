document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("feedingModal");
    const btnShowFeeding = document.getElementById("btnShowFeeding");
    const spanClose = modal.querySelector('.close');  // Ensure this correctly targets the close button within the feedingModal
    const feedingInfo = document.getElementById("feedingInfo");
    const milkTypeDisplay = document.getElementById("milkTypeDisplay"); 
    const amountDisplay = document.getElementById("amountDisplay"); 

    function getMostRecentFeedingRecord() {
        let feedingRecords = Object.keys(localStorage)
            .filter(key => key.startsWith('feedingRecord_'))
            .map(key => ({
                key: key,
                value: JSON.parse(localStorage.getItem(key)),
                timestamp: new Date(key.split('_')[1]).getTime()
            }))
            .sort((a, b) => b.timestamp - a.timestamp);

        return feedingRecords.length > 0 ? feedingRecords[0].value : null;
    }

    function updateFeedingDisplay() {
        var mostRecentRecord = getMostRecentFeedingRecord();

        if (mostRecentRecord) {
            milkTypeDisplay.textContent = mostRecentRecord.milkTypes[0];
            amountDisplay.textContent = mostRecentRecord.amount;
            feedingInfo.innerHTML = `
                <p>Milk Types: ${mostRecentRecord.milkTypes.join(', ')}</p>
                <p>Ingredients: ${mostRecentRecord.ingredients.join(', ')}</p>
                <p>Amount: ${mostRecentRecord.amount}</p>
                <p>Memo: ${mostRecentRecord.memo}</p>
            `;
        } else {
            milkTypeDisplay.textContent = 'No Record';
            amountDisplay.textContent = '';
            feedingInfo.textContent = "No recent feeding information found.";
        }
    }

    updateFeedingDisplay();

    btnShowFeeding.onclick = function() { 
        modal.style.display = "block"; 
    };


    spanClose.onclick = function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        modal.style.display = "none";
    };
   
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
