import './App.css';
import './styles/index.scss';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Account from './components/pages/Account';
import SignedUpAccount from './components/pages/SignedUpAccount';
import List from './components/pages/List';
import StaticComponent from './components/static-components/StaticComponent';

type RootState = {
  userAccount: {
    email: string;
    password: string;
    locale: string;
  };
};

function App() {
  const userAccount = useSelector((state: RootState) => state.userAccount);

  const isLoggedIn = userAccount.email !== '';

  return (
    <StaticComponent>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/account" element={isLoggedIn ? <SignedUpAccount title="Account" /> : <Account />} />
      </Routes>
    </StaticComponent>
  );
}

export default App;
