
import "../Krustycone.css"


function Menu() {

  return (
    <div>
           {/* Menu Section */}
      <section id="menu" className="menu mb-5">
        <div className="container">
          <h1 className="about-title p-5 text-center">MENU</h1>
          <div className="row">
            {/* Carousel */}
            <div className="col-sm text-center mb-5">
              <div className="masthead">
                <div
                  id="suds-carousel"
                  className="carousel fade-carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#suds-carousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#suds-carousel" data-slide-to="1"></li>
                    <li data-target="#suds-carousel" data-slide-to="2"></li>
                    <li data-target="#suds-carousel" data-slide-to="3"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="slide-1"></div>
                    </div>
                    <div className="carousel-item carousel-item-left">
                      <div className="slide-2"></div>
                    </div>
                    <div className="carousel-item carousel-item-left">
                      <div className="slide-3"></div>
                    </div>
                    <div className="carousel-item carousel-item-left">
                      <div className="slide-4"></div>
                    </div>

                  </div>
                 
                </div>
              </div>
            </div>

            {/* Menu Box */}
            <div className="col-sm">
              <div className="menu-box">
                <ul>
                  <li style={{ borderBottom: "none" }}>
                    <h5>Traditional Cones:</h5>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Margherita
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Giardiniera
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Veggie Supreme
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Pesto Genovese
                    </p>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <h5>Creme Cheese Cones:</h5>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Jalapeno N Olive Creme
                      Cheese
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Corn N Creme Cheese
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Potato Fries N Creme
                      Cheese
                    </p>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <h5>Desi Cones:</h5>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Mumbai Chat
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Mini Vada
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Paneer Tikka Talk
                    </p>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <h5>Global Cones:</h5>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Veggie Mexicana
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> American Hot Hot
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Sichuan Spring Veggie
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Crunchy Veg Siracha
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Cottage Cheese BBQ
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Cottage Cheese Piri Piri
                    </p>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <h5>Waffles:</h5>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Cream Waffle Royale
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> White Chocolate Bizzard
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Oreos on Mine
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Salted Caramel
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Nuttela Choc Indulgence
                    </p>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <h5>Pocket Fries:</h5>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Classic Salted
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Lemon Chilli
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Piri Piri
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Siracha
                    </p>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <h5>Shakes:</h5>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Just Orio Drunk
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Bubble Gum Strawberry
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Hazed & Confused.
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Ferrero Rocher
                    </p>
                  </li>
                  <li>
                    <p className="menu-title">
                      <i className="fa fa-circle"></i> Blueberry Creme Cheese
                    </p>
                  </li>

                  {/* Add more menu items here */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Menu