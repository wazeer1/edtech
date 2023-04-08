import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Store from './components/context/Store';
import Mainrouter from './components/routers/Router/Mainrouter';

function App() {
  return (
    <BrowserRouter>
      <Store>
        <Mainrouter/>
      </Store>
    </BrowserRouter>
  );
}

export default App;
