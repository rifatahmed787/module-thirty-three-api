const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};

const { found, message, result } = person;
// console.log(result);

document.getElementById('found-container').innerText = `found: ${found} message:${message}`;

result.forEach(singlePerson => {
    // console.log(singlePerson)
    const personContainer = document.getElementById('person-container');
    const personDiv = document.createElement('div');
    personDiv.classList.add("col");
    personDiv.innerHTML = `
        <div class="card">
         <div class="card-body shadow-lg">
           <h3 class="card-title">Name: ${singlePerson.name.common}</h3>
           <h3 class="card-title">Full-name: ${singlePerson.name.fullName[0]} ${singlePerson.name.fullName[1]}</h3>
           <p class="card-text">Age: ${singlePerson.age}</p>
           <p class="card-text">isMale: ${singlePerson.isMale ? true : false}</p>
           <p class="card-text">street: ${singlePerson.address.street}</p>
           <p class="card-text">house: ${singlePerson.address.house}</p>
         </div>
      </div>
        `;
    // <h3 class="card-title">Full-name: ${singlePerson.name.fullName.join(' ')}</h3>
    personContainer.appendChild(personDiv);

})