import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

const arr = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",    
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15999,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8999,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 24999,
    imageUrl: "/img/sneakers/4.jpg",
  },  
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">               
          {arr.map((obj) => (
          <Card key={obj.id}
            id={obj.id}            
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClick={() => console.log(obj)}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
