// console.log("Welcome" + " " + userName.value);

// document.getElementById('name').textContent = localStorage.getItem('userName');
// document.getElementById('u-name').textContent = localStorage.getItem('userN');

// console.log("welcome" + " " + localStorage.getItem('userN'));
const radios = document.getElementsByName('option');

radios.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    if (event.target.checked) {
      document.getElementById('content').style.display = 'block';
    }
  });
});


