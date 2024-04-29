document.addEventListener('DOMContentLoaded', (event) => {

    var modal = document.getElementById("diaperModal");

    var btn = document.getElementById("btnShowDiaper");
    var span = modal.querySelector('.close');


   
    btn.onclick = function() {
        var diaperInfo = document.getElementById("diaperInfo");
        
       
        let mostRecentRecord = null;
        let mostRecentTimestamp = 0;
    
        // Retrieve and parse the keys to find the most recent record
        Object.keys(localStorage)
            .forEach(key => {
                if (key.startsWith('diaperRecord_')) {
                   
                    const timestamp = parseInt(key.split('_')[1]);
                    if (timestamp > mostRecentTimestamp) {
                        mostRecentTimestamp = timestamp;
                        mostRecentRecord = JSON.parse(localStorage.getItem(key));
                    }
                }
            });
    
        if (mostRecentRecord) {
            diaperInfo.innerHTML = `
                <p>Type: ${mostRecentRecord.type}</p>
                <p>Memo: ${mostRecentRecord.memo}</p>
                <img src="${mostRecentRecord.image}" alt="Diaper Image" style="width:100%; max-width:300px; height:auto;" />
            `;
            modal.style.display = "block";
        } else {
            diaperInfo.innerHTML = "<p>No recent diaper information found.</p>";
        }
    };
    
  
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});
