const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",

  },
];



data.forEach(car => {
  console.log(car)
  const { name, price, imageURL, description } = car;
  const vehicleContainer = document.getElementById('vehicle-container');

  const vehicleDiv = document.createElement('div');
  vehicleDiv.classList.add("col");
  vehicleDiv.innerHTML = `
  <div class="card">
  <img  src="${imageURL ? imageURL : "https://i.ibb.co/g9CSkZQ/image.png"}" class="card-img-top " alt="...">
     <div class="card-body">
       <h5 class="card-title">Car name: ${name}</h5>
       <p class="card-text">Description: ${description}</p>
       <button class="btn btn-primary">price $ ${price}</button>
     </div>
  </div>
`;
  vehicleContainer.appendChild(vehicleDiv);
})


