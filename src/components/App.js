import '../styles/App.scss';
import quotes from "../data/quotes.json";
import { useState, useEffect } from 'react';
import ls from '../services/localStorage';

function App() {

  //variables de estado
  const [quote, setQuote] =useState(quotes)
  const [newQuote, setNewQuote] =useState({
    quote: "",
    character:"",
  })
  const [search, setSearch]= useState('')
  const [searchCharacter, setSearchCharacter ] =useState('')

  //renderizado

  const quoteList = quote
  .filter((filterQuote)=>{
    return filterQuote.quote.toLowerCase().includes(search.toLowerCase())})
  .filter((filterCharacter) =>{
    return filterCharacter.character.toLowerCase().includes(searchCharacter.toLowerCase())})
  
  .map((oneQuote)=>{
    return (<div><p>{oneQuote.quote} <span>-{oneQuote.character}</span></p> </div>)})


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

  const handleSearch = (ev) =>{
    setSearch(ev.target.value)
  }

  const handleSearchSelect = (ev) =>{
    setSearchCharacter(ev.target.value)

  }


  return (
    <div className="App">
      <main>
        <h1>Frases de Friends</h1>
        <fieldset>
          <label htmlFor="filterQuote">Filtrar por frase</label>
          <input type="text" value={search} onChange={handleSearch} name='filterQuote' id='filterQuote'/>
          <label htmlFor="filterCharacter">Filtrar por personaje</label>
          <select value={searchCharacter} onChange={handleSearchSelect} name="filterCharacter">
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
