function scrollToContent() {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}


document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.querySelector('.contact-btn');

  if (contactBtn) {
    contactBtn.addEventListener('click', async () => {
      const email = contactBtn.getAttribute('data-email');

      try {
        await navigator.clipboard.writeText(email);
        const originalText = contactBtn.textContent;
        contactBtn.textContent = 'Email copied!';
        setTimeout(() => contactBtn.textContent = originalText, 2000);
      } catch (err) {
        console.error('Failed to copy email: ', err);
      }
    });
  }
});