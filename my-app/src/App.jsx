import './App.css'

function App(){
  const items = ["React", "JavaScript", "Vite"];
  
  return (
    <section>
    <h1>Hola mundo</h1>

    <ul>
      {
        items.map((item, index) => (
          <li key={item}>{item}</li>
        ))
      }
    </ul>
    </section>
  );
}

export default App
