document.querySelector('#search-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const response = await fetch('superheroes.php');
    if (!response.ok) throw new Error('Request failed');
    alert(await response.text());
  } catch (error) {
    alert('Unable to load superheroes. Please try again.');
  }
});
