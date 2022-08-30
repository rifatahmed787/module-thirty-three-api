document.getElementById('kanye-quotes').addEventListener('click', function () {
    const loadQuote = () => {
        fetch('https://api.kanye.rest/')
            .then(res => res.json())
            .then(data => displayQuotes(data));
    }

    const displayQuotes = quote => {
        const blockQutoe = document.getElementById('quotes');
        blockQutoe.innerText = quote.quote;

    }
    loadQuote();
})

