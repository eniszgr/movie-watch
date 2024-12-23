import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import WatchList from "./components/WatchList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element ={<WatchList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
