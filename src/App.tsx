import './App.css';
import './styles/index.scss';
import {Route,Routes} from "react-router-dom";
import Account from './components/pages/Account';
import List from './components/pages/List';
import StaticComponent from './components/static-components/StaticComponent';

function App() {
  return (
    <StaticComponent>
      <Routes>
        <Route path="/" element={<List />}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </StaticComponent>
  );
}

export default App;
