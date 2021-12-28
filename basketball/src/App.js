import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Friends from "./pages/friends"
import Settings from "./pages/settings"
import Park from "./pages/park" 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/cats' component={Friends} />
        <Route path='/sheeps' component={Settings} />
        <Route path='/goats' component={Park} />
      </Routes>
    </Router>
  );
}

export default App;
