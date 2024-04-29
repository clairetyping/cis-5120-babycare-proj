document.addEventListener('DOMContentLoaded', function() {
    const nightButton = document.getElementById('nightButton');
    const dayButton = document.getElementById('dayButton');

    nightButton.addEventListener('click', function() {
        nightButton.classList.add('active');
        dayButton.classList.remove('active');
    });

    dayButton.addEventListener('click', function() {
        dayButton.classList.add('active');
        nightButton.classList.remove('active');
    });
});
