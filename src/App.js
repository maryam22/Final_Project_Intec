import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import Header from "./pages/Header";
import Searchform from "./component/SearchForm";
import Channels from "./component/Channels";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [article, setArticle] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=3abd75c46fb44453a895b63bba8124bf`
        );
        const articles = await res.json();
        console.log(articles.articles);
        setArticle(articles.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchArticle();
  }, [country]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Switch>
          <Route
            exact path="/about">
            <Header />
          </Route>
          <Route exact path="/news">
          <Searchform
          searchText={(text) => {
            setCountry(text);
          }}
        />
            <News article={article} />

          </Route>
          <Route exact path="/channels">
            <Channels />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
