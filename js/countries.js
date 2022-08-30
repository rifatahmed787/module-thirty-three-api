const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));

}

const displayCountries = conuntries => {
    // for (const country of conuntries) {
    //     console.log(country)
    // }
    const countryContainer = document.getElementById('countries-container');
    conuntries.forEach(country => {
        const countryDiv = document.createElement('div');
        // console.log(country)
        countryDiv.classList.add('countries');
        countryDiv.innerHTML = `
        <h3>name: ${country.name.common}</h3>
        <h3>Official name: ${country.name.official}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
    })
}
const loadCountryDetails = (code) => {

    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCoutryDetail(data[0]))
    // console.log('get country details:', code)
    // console.log(url)
}

const displayCoutryDetail = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <img src="${country.flags.png}">
    `;


}
loadCountries();