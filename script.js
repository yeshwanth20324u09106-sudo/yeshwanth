document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const messageEl = document.getElementById('form-message');
  messageEl.textContent = "Thanks! Your message has been sent.";
  messageEl.style.color = 'green';

  // Optional: Reset form
  this.reset();
});
