function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" alt="Логотип с картинкой кроссовок" width="40" height="40"/>
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img src="/img/cart.svg" alt="Корзина покупок" width="18" height="18"/>          
            <span>1205 руб.</span>
          </li>
          <li>
          <img src="/img/user.svg" alt="Корзина покупок" width="18" height="18"/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        ....
        </div>      
    </div>
  );
}

export default App;
