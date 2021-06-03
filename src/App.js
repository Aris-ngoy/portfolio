import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Menu from './Components/menu';
import InitRouters from './pages/InitRouters';

function App() {
  return (
    <Router className=" w-screen h-screen">
      <div className="flex flex-row w-full">
        <Menu />
        <div className="flex-4 bg-gray-50 w-full">
          <InitRouters />
        </div>
      </div>
    </Router>
  );
}

export default App;
