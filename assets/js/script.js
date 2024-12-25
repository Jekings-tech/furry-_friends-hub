 //Fetch puppies from the backend
function loadPuppies() {
  fetch('http://localhost:5000/api/puppies')
    .then(response => response.json())
    .then(puppies => {
      const puppyList = document.querySelector('.puppy-list');
      if (puppyList) {
        puppies.forEach(puppy => {
          const puppyCard = document.createElement('div');
          puppyCard.classList.add('puppy-card');
          puppyCard.innerHTML = `
            <img src="${puppy.image}" alt="${puppy.name}">
            <h3>${puppy.name}</h3>
            <p>Price: ${puppy.price}</p>
            <button onclick="alert('${puppy.name} selected!')">View Details</button>
          `;
          puppyList.appendChild(puppyCard);
        });
      }
    })
    .catch(err => console.error('Error loading puppies:', err));
}
ction submitContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.error) {
              alert(data.error);
            } else {
              alert(data.success);
              form.reset();
            }
          })
          .catch(err => console.error('Error submitting form:', err));
      });
    }
  }
  
  // Initialize website features
  document.addEventListener('DOMContentLoaded', function () {
    loadPuppies();
    submitContactForm();
  });