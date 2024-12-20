// Fetch and display data
fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const container = document.querySelector('.container');
        let users = '';
        data.payload.forEach(user => {
            users += `<p>${user.nombre}</p>
                      <p>${user.email}</p>`;
        });
        container.innerHTML = users;
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
