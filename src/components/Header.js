function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img
            src="/img/logo.png"
            alt="Логотип с картинкой кроссовок"
            width="40"
            height="40"
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img
              src="/img/cart.svg"
              alt="Корзина покупок"
              width="18"
              height="18"
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img
              src="/img/user.svg"
              alt="Корзина покупок"
              width="18"
              height="18"
            />
          </li>
        </ul>
      </header>
  );
}

export default Header;