import '../styles/App.scss';
import quotes from "../data/quotes.json";
import { useState } from 'react';

function App() {

  //variables de estado
  const [quote, setQuote] =useState(quotes)

  //renderizado

  const quoteList = quote.map((oneQuote)=>{
    return (
    <div>
      <p>{oneQuote.quote} <span>-{oneQuote.character}</span></p>
    </div>)
  })

  //filtrado




  return (
    <div className="App">
      <main>
        <h1>Frases de Friends</h1>
        <label htmlFor="">Filtrar por frase</label>
        <input type="text"/>

        <label htmlFor="">Filtrar por personaje</label>
        <select>
          <option value="Todos">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>

        {quoteList}


      </main>
    </div>
  );
}

export default App;
