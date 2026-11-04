const form = document.querySelector('#search-form');
const result = document.querySelector('#result');
const button = form.querySelector('button');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.querySelector('#query').value.trim();
  const parameters = new URLSearchParams({ query });
  button.disabled = true;
  result.setAttribute('aria-busy', 'true');
  result.textContent = 'Searching...';
  try {
    const response = await fetch(`superheroes.php?${parameters}`);
    if (!response.ok) throw new Error('Request failed');
    // The PHP endpoint escapes every value before returning HTML.
    result.innerHTML = await response.text();
  } catch (error) {
    result.textContent = 'Unable to load superheroes. Please try again.';
  } finally {
    button.disabled = false;
    result.removeAttribute('aria-busy');
  }
});
