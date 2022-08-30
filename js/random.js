const loadData = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUser(data.results));
}

const displayUser = users => {
    const userContainer = document.getElementById('user-container');
    for (const user of users) {
        console.log(user)

        const userDiv = document.createElement('div');
        userDiv.classList.add('background')
        userDiv.innerHTML = `
      <h3>User name: ${user.name.first} ${user.name.last}</h3>
      <p>Email: ${user.email}</p>
      <p>Location: ${user.location.city} ${user.location.country}</p>
      <p>User info</p>
      `;
        userContainer.appendChild(userDiv);
    }
}

loadData();