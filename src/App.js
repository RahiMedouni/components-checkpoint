import logo from './logo.svg';
import './App.css';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
      <img src={"/imagevictor.jpg"} alt='inPublic' />
      <br />
      <div className='textApp'>
     <FullName />
     <Adress />
      </div>
         </div>
  );
}

export default App;
