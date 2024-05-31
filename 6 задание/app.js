const addOptionBtn = document.getElementById('addOptionBtn');
const dropdown = document.getElementById('dropdown');

num=0

addOptionBtn.addEventListener('click', function() {
  const option = document.createElement('option');
  option.text = num++, 'Новая опция ';
  dropdown.add(option);
});