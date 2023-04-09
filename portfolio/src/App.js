import './App.css';
import Banner from './components/Banner'
import Falecomigo from './components/Falecomigo'
import Linguagens from './components/Linguagens'
import Navbar from './components/Navbar'
import Projetos from './components/Projetos'
import Quemsoueu from './components/Quemsoueu'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Quemsoueu/>
      <Projetos/>
      <Linguagens/>
      <Falecomigo/>
    </div>
  );
}

export default App;
