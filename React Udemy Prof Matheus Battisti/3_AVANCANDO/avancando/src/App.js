
import './App.css';
import city from './assets/city.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';



function App() {
  return (
    <div className="App">
      <h1>Avançando com React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>

      {/*Imagem em src/assets*/}
      <div>
       <img src={city} alt="cidade" />
      </div>
      <ManageData/>
      <ListRender/>
    </div>
  );
}

export default App;
