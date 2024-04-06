//button
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'button-selected' class from all buttons
        document.querySelectorAll('.button').forEach(btn => btn.classList.remove('button-selected'));
        // Add 'button-selected' class to the clicked button
        this.classList.add('button-selected');
    });
});

//upload image
function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
      var output = document.getElementById('preview');
      output.innerHTML = '<img src="' + reader.result + '" />';
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  