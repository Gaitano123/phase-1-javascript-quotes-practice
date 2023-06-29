document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/quotes')
    .then(res => res.json())
    .then(quotes => {
        quotes.forEach(quote => {
            createQuote(quote)
            addQuote(quote);
        })
    })

    function createQuote(quote){
        const list = document.createElement('li')
        list.innerHTML=`
        <blockquote class="blockquote">
        <p class="mb-0">${quote.quote}</p>
        <footer class="blockquote-footer">${quote.author}</footer>
        <br>
        <button class='btn-success'>Likes: <span>0</span></button>
        <button class='btn-danger'>Delete</button>
        </blockquote>
        `
        document.querySelector('.the-quote').appendChild(list)
    }

    function formSetting(){
        const form = document.getElementById('new-quote-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const quoteInput = `${quote.quote}`
            const authorInput = `${quote.author}`
            const quote = {
              quote: quoteInput,
              author: authorInput
            };
            addQuote(quote)
        })
    }

    formSetting()

    function addQuote(quote) {
        fetch('http://localhost:3000/quotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quote)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
})