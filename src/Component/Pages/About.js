import React from 'react'
import About2 from "../../assets/About2.png"
import "../Krustycone.css"

function About() {
  return (
    <div>
       
      <section id="about" className="about mb-5">
        <div className="container">
          <h1 className="about-title text-center p-5">ABOUT US</h1>
          <div className="row text-center">
            <div className="col-sm-6 hover01">
              <img src={About2} width="90%" alt="krustycone about-img-2" />
            </div>
            <div className="col-sm-6">
              <p className="about-info">
                Krusty Cone, an idea born out of passion and mission to spread
                taste and delight, is a quirky food place located in the Lal
                Baugh arena of the Mumbai district. The city, being such an
                incredibly busy place, always has people on the go, consistently
                depending on top quality, good tasting fast-food. Krusty Cone
                fills the gap by delivering Cone Pizzas that are
                super-delicious, Waffles that give you as quickly as you go
                about your busy lives, Choose between our rustic, cheesy pizzas
                made in the compact-handy shape of a cone, or Waffles, all hot
                and crispy and freshly made shakes to complement the savory
                choices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About