import IconCart from '../../assets/images/icon-cart.svg';
import './Perfume.css';

function Perfume() {
  return (
    <main>
      <div className="perfume_container">
        <div className="perfume_image" />
        <div className="perfume_informations">
          <p className="overline">perfume</p>
          <h1 className="header">Gabrielle Essence Eau De Parfum</h1>
          <p className="paragraphe">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="prices">
            <span className="new_price">$149.99</span>
            <span className="old_price">$169.99</span>
          </div>
          <button type="button" className="button-cart">
            <img src={IconCart} alt="icon cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default Perfume;
