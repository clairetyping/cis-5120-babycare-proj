function showTab(selectedTab) {

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        tab.style.backgroundColor = 'rgba(60, 60, 67, 0.2)'; 
        tab.style.color = 'rgba(60, 60, 67, 0.3)'; 
    });


    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
    });

   
    document.getElementById(selectedTab).style.display = 'block';
    document.querySelector(`[onclick="showTab('${selectedTab}')"]`).classList.add('active');
    document.querySelector(`[onclick="showTab('${selectedTab}')"]`).style.backgroundColor = '#FFFFFF';
    document.querySelector(`[onclick="showTab('${selectedTab}')"]`).style.color = '#3C3C43';
}


document.addEventListener('DOMContentLoaded', function() {
    showTab('activities');
});
