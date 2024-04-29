document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const memoInput = document.getElementById('memo-input');
    const previewContainer = document.getElementById('diaperPreview'); 
    const confirmButton = document.getElementById('confirmDiaperButton');

    const customUploadBtn = document.querySelector('.custom-upload-btn');
    const fileInput = document.getElementById('file-upload');


    // Setup button active state toggling
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Handle file input changes and update the preview
    fileInput.addEventListener('change', function(event) {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Empty the preview container and append new image element
                previewContainer.innerHTML = '';
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Uploaded Image';
                img.style = 'width:100%; height:auto; border-radius: 8px;';
                previewContainer.appendChild(img);
    
                // Fade out the upload button
                customUploadBtn.classList.add('faded');
            };
            reader.readAsDataURL(file);
        }
    });

    // Confirm button event
    confirmButton.addEventListener('click', () => {
        const selectedType = document.querySelector('.button.active') ? document.querySelector('.button.active').textContent : 'None';
        const memoText = memoInput.value.trim();

        if (!selectedType || !memoText) {
            alert('Please select a type and write a memo.');
            return;
        }

 
        if (previewContainer.querySelector('img')) {
            const base64Image = previewContainer.querySelector('img').src;
            const diaperRecord = {
                type: selectedType,
                memo: memoText,
                image: base64Image
            };

            const timestamp = Date.now();
            localStorage.setItem('diaperRecord_' + timestamp, JSON.stringify(diaperRecord));
            alert('Record saved successfully!');
        } else {
            alert('Please add a photo before confirming.');
        }
    });


    if (customUploadBtn) {
        customUploadBtn.addEventListener('click', function() {
            fileInput.click(); 
        });
    }


});
