
import { useState } from 'react';
import './App.css';
import city from './assets/city.jpg';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';



function App() {
  const name = "Isadora";
  const [userName] = useState("Maria");
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
      <CondicionalRender/>
      <ShowUserName name={userName}/>
    </div>
  );
}

export default App;
