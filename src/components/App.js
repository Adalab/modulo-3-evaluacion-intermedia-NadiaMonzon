import '../styles/App.scss';
import quotes from "../data/quotes.json";
import { useState } from 'react';

function App() {

  //variables de estado
  const [quote, setQuote] =useState(quotes)
  const [newQuote, setNewQuote] =useState({
    quote: "",
    character:"",
  })

  //renderizado

  const quoteList = quote.map((oneQuote)=>{
    return (
    <div>
      <p>{oneQuote.quote} <span>-{oneQuote.character}</span></p>
    </div>)
  })

  const handleNewQuote= (ev) =>{
    setNewQuote({
      ...newQuote, 
      [ev.target.id]: ev.target.value,
    })

  }

  const handleAddQuote = (ev) =>{
    ev.preventDefault();
    setQuote([...quote, newQuote])
  }

  //filtrado




  return (
    <div className="App">
      <main>
        <h1>Frases de Friends</h1>
        <fieldset>
          <label htmlFor="">Filtrar por frase</label>
          <input type="text"/>
          <label htmlFor="">Filtrar por personaje</label>
          <select>
            <option id="Todos" value="Todos">Todos</option>
            <option id="Ross" value="Ross">Ross</option>
            <option id="Monica" value="Monica">Monica</option>
            <option id="Joey" value="Joey">Joey</option>
            <option id="Phoebe" value="Phoebe">Phoebe</option>
            <option id="Chandler" value="Chandler">Chandler</option>
            <option id="Rachel" value="Rachel">Rachel</option>
          </select>
        </fieldset>

        {quoteList}

        <fieldset>
          <h2>Añadir una nueva frase</h2>
          <label htmlFor="">Frase</label>
          <input type="text" id='quote' value={newQuote.quote} onChange={handleNewQuote}/>
          <label htmlFor="">Personaje</label>
          <input type="text" id='character' value={newQuote.character} onChange={handleNewQuote}/>
          <button onClick={handleAddQuote}>Añadir una nueva frase</button>
        </fieldset>

      </main>
    </div>
  );
}

export default App;
