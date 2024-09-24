// Fetch the user data from the API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Parse the response as JSON
    .then(users => {
        // Get the table body element where the user details will be displayed
        const tableBody = document.querySelector('#userTable tbody');

        // Loop through the users and create table rows for each user
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.street}, ${user.address.city}</td>
            `;
            tableBody.appendChild(row); // Add the row to the table body
        });
    })
    .catch(error => console.error('Error fetching user data:', error)); // Handle any errors
