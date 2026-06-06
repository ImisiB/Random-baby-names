function getRandomName() {
  let url = 'https://api.api-ninjas.com/v1/babynames?gender=neutral';
  fetch(url, {
    method: 'GET',
    headers: {
      'X-Api-Key': 'Sge6uzhiEW+sDDX6NR+esA==sal0MxtCUkulmgcn'
    }
  })
  .then(response => response.json())
  .then(data => {
    document.querySelector('.name-display').innerHTML = '<h2>List of names: </h2>';
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const name = data[i];
      document.querySelector('.name-display').innerHTML += `<p>${i + 1}. ${name}</p>`;
    }
  })
  .catch(error => console.error('Error fetching names:', error));
}
document.querySelector('.generate-button').addEventListener('click', () => {
  getRandomName();
});