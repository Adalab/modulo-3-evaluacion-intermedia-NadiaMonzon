import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';

function App() {

  //variables de estado
  const [quote, setQuote] =useState([])
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
    return searchCharacter==='all' ? true : filterCharacter.character.includes(searchCharacter)})
  
  .map((oneQuote)=>{
    return (<div><p>{oneQuote.quote} <span>-{oneQuote.character}</span></p> </div>)
  })

  const renderNotFoundMsg= ()=>{
    if(quoteList.length ===0){
      return <p>{`Lo siento, no encontramos una frase que contenga ${search} en nuestro repertorio :( ¡Prueba a escribir algo diferente!`}</p>
    }
  }

  useEffect(()=>{
    callToApi().then((data)=>{
      setQuote(data)
    })
  },[])

  const handleNewQuote= (ev) =>{
    setNewQuote({
      ...newQuote, 
      [ev.target.id]: ev.target.value,
    })
  }

  const handleAddQuote = (ev) =>{
    ev.preventDefault();
    setQuote([...quote, newQuote])
    setNewQuote({
      quote: '',
      character: '',
    })
  }

  const handleSearch = (ev) =>{
    setSearch(ev.target.value)
  }

  const handleSearchSelect = (ev) =>{
    setSearchCharacter(ev.target.value)

  }


  return (
    <div className="App">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <form>
          <fieldset>
            <label htmlFor="filterQuote">Filtrar por frase</label>
            <input type="text" value={search} onChange={handleSearch} name='filterQuote' id='filterQuote'/>
            <label htmlFor="filterCharacter">Filtrar por personaje</label>
            <select value={searchCharacter} onChange={handleSearchSelect} name="filterCharacter">
              <option id="all" value="all">Todos</option>
              <option id="Ross" value="Ross">Ross</option>
              <option id="Monica" value="Monica">Monica</option>
              <option id="Joey" value="Joey">Joey</option>
              <option id="Phoebe" value="Phoebe">Phoebe</option>
              <option id="Chandler" value="Chandler">Chandler</option>
              <option id="Rachel" value="Rachel">Rachel</option>
            </select>
          </fieldset>
          {quoteList}
          {renderNotFoundMsg()}
          <fieldset>
            <h2>Añadir una nueva frase</h2>
            <label
              htmlFor="">
                Frase
            </label>
            <input
              type="text"
              id='quote'
              value={newQuote.quote}
              onChange={handleNewQuote}/>
            <label
              htmlFor="">
                Personaje
            </label>
            <input
              type="text"
              id='character'
              value={newQuote.character}
              onChange={handleNewQuote}/>
          
            <button onClick={handleAddQuote}>Añadir una nueva frase</button>
          </fieldset>
        </form>

      </main>
    </div>
  );
}

export default App;
