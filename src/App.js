import "./style/style.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import robot from './img/GitHub_Logo.png'; // gives image path

function App() {
  return (
    <HashRouter>
      <div className="container">
        <div className="header">
          <div className="navbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Plantbook
              </a>
              <nav>
                <ol className="navbar-nav">
          
            
                  <li className="nav-item">
                    <a className="nav-link">
                      <NavLink to="/login">Войти</NavLink>
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
        </div>
           <footer>
            <a href="https://github.com/kaatinga/plantbook"><img className="github" src={robot} alt="this is car image" /></a>
           
         
           
    </footer>
      </div>
    </HashRouter>
  
  );
}

export default App;
