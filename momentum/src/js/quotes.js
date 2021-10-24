export let quote = document.querySelector('.quote')
export let quoteAuthor = document.querySelector('.author')
export let changeQuote = document.querySelector('.change-quote')

import { getRandom } from './slider';
import { lang } from "./settings";


export async function getQuotes() {
    const quotes = '../qoutes.json';
    const res = await fetch(quotes);
    const data = await res.json();
  let randomQuote = getRandom(0, 59);
  if (lang === 'EN') {
    quote.textContent = `"${data[randomQuote].textEN}"`;
    quoteAuthor.textContent = `${data[randomQuote].authorEN}`
  } else {
    quote.textContent = `"${data[randomQuote].textRU}"`;
    quoteAuthor.textContent = `${data[randomQuote].authorRU}`
  }
    
    
  }
getQuotes();
  
changeQuote.addEventListener('click', getQuotes);

