import React from 'react'
import "../Krustycone.css"

import quote from "../../assets/quote.png";


function Reviews() {
  return (
    <div>
             
      {/* Reviews Section */}
      <section id="review" className="testimonial">
        <div className="container">
          <h1 className="testimonial-title text-center">TESTIMONIALS</h1>
          <div className="row blog">
            <div className="col-md-12">
              <div
                id="blogCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row text-center">
                      <div className="col-md-4 col-sm-12 mb-5">
                        <div className="box">
                          <img src={quote} width="50px"  />
                          <p>
                            Amazing food , a different concept the ambience is
                            just on point , loved their shakes , hazelnut shake
                            is a must have and the staff is also friendly !.
                          </p>
                          <p>- Vipul Shah</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 mb-5">
                        <div className="box">
                          <img src={quote} width="50px"  />
                          <p>
                            Amazing and cute lil place!! I tried Ferrero Rocher
                            shake was simply awesome. Also had Jalapeno and
                            olive creme cheese cone served with salted fries and
                            trust me you have to keep ur stomach half empty for
                            this cheesy fun!! A must visit🤩!!.
                          </p>
                          <p>- Rakhi Sonkuare</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 mb-5">
                        <div className="box">
                          <img src={quote} width="50px" />
                          <p>
                            Loved it!! Just amazing 😊😍😍😍 Pizza cones and the
                            hazel shake my new fav😍💕💕 A must visit for every
                            foodie lover. Ambiance and food a perfect combo at
                            krusty cone!!!❤️❤️.
                          </p>
                          <p>- Jitendra Jain</p>
                        </div>
                      </div>
                      {/* Add more reviews here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Reviews