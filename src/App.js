import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import logo from "./logo.jpg"
import "./style.css"

function App() {
  return (
    <>
      <img src={logo} alt='logo' />
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
