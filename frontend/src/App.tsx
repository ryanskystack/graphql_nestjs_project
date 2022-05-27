import LatestArticlesPage from './pages/LatestArticlesPage';
import ArticlePage from './pages/ArticlePage';
import ManagementPage from './pages/ManagementPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div >
      <Router>
        <div className="navBar">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/" component={LatestArticlesPage} />        
          <Route exact path="/articles/:post_id" component={ArticlePage}  />
          <Route exact path="/management" component={ManagementPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
