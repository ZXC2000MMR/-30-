const text = document.getElementById('text');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
});