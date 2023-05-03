import './App.css';
import Nav from "./components/Nav";
import Desc from "./components/Desc";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        wiki = {item.wiki}
        name = {item.name}
        info = {item.info}
        img = {item.img}
        rating = {item.rating}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      <Desc />
      <div className='card--list--container'>
        <section className='card--list'>
          {cards}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
