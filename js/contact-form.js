/**
 * js/contact-form.js — Web3Forms async submission with inline status feedback.
 */

export function initContactForm() {
  const form = document.querySelector('form[data-web3forms]');
  const statusEl = document.getElementById('form-status');
  if (!form || !statusEl) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn ? submitBtn.textContent : 'Send Enquiry';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }
    statusEl.textContent = '';

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      const result = await response.json();
      if (response.ok && result.success) {
        statusEl.textContent = 'Enquiry sent. I will get back to you shortly.';
        form.reset();
      } else {
        statusEl.textContent = 'Could not send enquiry. Please email chanchalsrivastava309@gmail.com directly.';
      }
    } catch {
      statusEl.textContent = 'Network error. Please email chanchalsrivastava309@gmail.com directly.';
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    }
  });
}