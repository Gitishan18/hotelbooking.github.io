document.getElementById('book-now-btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Booking successful!');
  });
  
const personsInput = document.getElementById('persons');
const costDisplay = document.getElementById('cost-display');


personsInput.addEventListener('change', updateCost);

function updateCost() {
  const numberOfPersons = parseInt(personsInput.value);
  let cost;

  if (numberOfPersons === 1) {
    cost = 1000;
  } else if (numberOfPersons === 2) {
    cost = 2000;
  } else if (numberOfPersons === 3) {
    cost = 3500;
  } else {
    
    cost = 4000;
  }

  costDisplay.textContent = cost + ' Rs';
}
