import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';

import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <MainNavbar />

        <AppRouter />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
