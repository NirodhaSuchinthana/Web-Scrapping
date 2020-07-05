const cheerio = require('cheerio');
const request = require('request');

request('https://ikman.lk/en/ad/samsung-galaxy-note-10-plus-used-for-sale-colombo-43', (error, response, html ) => {
    if (!error && response.statusCode == 200) {
        // console.log(html);
        const $ = cheerio.load(html);

    // <h1 class="t-bold">Welcome to ikman.lk - the largest marketplace in Sri Lanka!</h1>
        //const siteWelcomeQuote = $('.home-top .container .row .col-6 .t-bold');
        const price = $('.description-section--oR57b .description--1nRbz')
        //console.log(siteWelcomeQuote.text());

        console.log(price.children('p').text());
    }
});
