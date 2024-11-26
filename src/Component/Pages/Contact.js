import React from 'react'
import "../Krustycone.css"

import zomato from "../../assets/zomato.png";

function Contact() {
  return (
    <div>
            {/* Contact Us Section */}
      <section id="contact" className="main-footer">
        <div className="container">
          <h1 className="footer-title text-center">CONTACT US</h1>
          <div className="row">
            <div className="col-md-6">
              <ul className="contact-info">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  &emsp;&nbsp; Shop No. 3, Avighna lx, Building No. 4, Dr
                  B.A.Road,
                  <br />
                  &emsp;&nbsp;&nbsp;&emsp;Opp. to Ladoo Samrath, Lalbaug,
                  Mumbai- 400012
                </li>
                <li>
                  <a href="tel:+917400143648">
                    <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                    &emsp;&nbsp;+91 7400143648
                  </a>
                </li>
                <li>
                  <a href="mailto:info@krustycone.com">
                    <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                    &emsp;&nbsp;info@krustycone.com
                  </a>
                </li>
              </ul>
              <ul className="social-nav">
                <li>
                  <a href="#" className="btn btn-social-icon btn-linkedin">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-social-icon btn-linkedin">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-social-icon btn-linkedin">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-social-icon btn-linkedin">
                    <img width="40px" src={zomato} />
                  </a>
                </li>
                {/* Add more social icons here */}
              </ul>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name:"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email:"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Any Message.."
                    ></textarea>
                  </div>
                  <button className="btn btn-block btn-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact