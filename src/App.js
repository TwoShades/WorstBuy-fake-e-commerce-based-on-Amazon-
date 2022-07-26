import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import ProductPage from "./ProductPage";
import Search from "./Search"

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />

        <Routes>
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
            <Route path="/ProductPage/:id" element={<ProductPage />} />
            <Route path="/Search/" element={<Search />} />
        </Routes>
        {/*<Switch>*/}
        {/*  <Route path="/Checkout">*/}

        {/*    <Checkout />*/}
        {/*  </Route>*/}
        {/*  <Route path="/">*/}

        {/*    <Home />*/}
        {/*  </Route>*/}
        {/*</Switch>*/}

      </div>
    </Router>
  );
}

export default App;
