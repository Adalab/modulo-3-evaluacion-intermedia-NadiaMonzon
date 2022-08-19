import '../styles/App.scss';

function App() {
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

        <div>
          <p>Pivot!Pivot!Pivot!PivotPivot <span>-Ross</span></p>
        </div>


      </main>
    </div>
  );
}

export default App;
