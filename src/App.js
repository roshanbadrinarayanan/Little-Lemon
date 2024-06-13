import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Nav from './Nav';
import "./style.css"
//import "./styles.css"


function App(){
  return(
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path='' element={<HomePage />} />
        
        </Routes>
      </>
    </Router>
  )
}
/*function App(){
  return(
    <h1>Hello</h1>
  )
}*/

export default App;
