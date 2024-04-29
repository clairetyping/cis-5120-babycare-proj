function showTab(selectedTab) {
    // Reset all tabs to default style
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        tab.style.backgroundColor = 'rgba(60, 60, 67, 0.2)'; // Not selected background color
        tab.style.color = 'rgba(60, 60, 67, 0.3)'; // Not selected text color
    });

    // Hide all content
    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
    });

    // Set the selected tab to active style
    document.getElementById(selectedTab).style.display = 'block';
    document.querySelector(`[onclick="showTab('${selectedTab}')"]`).classList.add('active');
    document.querySelector(`[onclick="showTab('${selectedTab}')"]`).style.backgroundColor = '#FFFFFF';
    document.querySelector(`[onclick="showTab('${selectedTab}')"]`).style.color = '#3C3C43';
}

// Initial call to set 'Activities' as the default selected tab
document.addEventListener('DOMContentLoaded', function() {
    showTab('activities');
});
