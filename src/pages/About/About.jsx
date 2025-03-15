import React, { useEffect } from "react";
import { showcaseImgs } from "../../Constants";
import ImageSlider from "../../components/Slider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./About.css";

const About = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Header />
      <section className="showcase">
        <div className="wrapper">
          <ImageSlider
            slidesToShow={1}
            slidesToScroll={1}
            images={showcaseImgs}
            isCarousel={false}
            autoplay={true}
            isBanner={true}
          />
        </div>
      </section>
      <section className="left_right_showcase">
        <div className="wrapper">
          <div className="left_right_showcase__first">
            <div>
              <h2>hotel pride</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci commodi distinctio vitae dolor culpa. Vitae, tempore
                nesciunt. Eum dolorem vero quibusdam voluptatum tempore
                molestias doloribus cumque nostrum dolores praesentium
                laudantium deleniti molestiae commodi odit nesciunt, suscipit
                ratione quaerat quos ab non modi sapiente sequi quod! Ex
                assumenda at dolorem? Neque sapiente aliquam, animi accusantium
                fugiat pariatur quam, natus ut eum commodi voluptatibus porro
                impedit est asperiores iure corporis error minus soluta eveniet
                amet modi perspiciatis ea nobis? Voluptates aspernatur, voluptas
                nam rem explicabo qui assumenda natus tenetur repellat error
                laboriosam ab accusamus voluptatum hic dicta fugiat illo a
                perspiciatis doloribus?
              </p>
            </div>
            <figure>
              <img
                src="https://www.conradpune.com/wp-content/uploads/2022/07/2-4.png"
                alt=""
              />
            </figure>
          </div>
          <div className="left_right_showcase__second">
            <figure>
              <img
                src="https://www.conradpune.com/wp-content/uploads/2022/07/1-4.png"
                alt=""
              />
            </figure>
            <div>
              <h2>more about us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                ipsa velit quas sint nostrum praesentium error aspernatur
                adipisci iste expedita, unde officiis, illo id ullam aperiam
                quis, quasi ducimus asperiores soluta quisquam natus deleniti
                ut. Beatae quod maiores magni dolores repudiandae culpa itaque
                quibusdam dolorum, delectus consequatur iste reiciendis
                expedita? Velit officiis placeat atque accusamus ratione! Nam
                dolorum qui ex quaerat culpa exercitationem libero aut atque
                modi enim. Ullam deleniti sed excepturi debitis accusantium
                dolor fuga tenetur cumque, magnam quaerat nesciunt vero libero
                aut optio laudantium consectetur, recusandae consequuntur
                veniam, modi laboriosam eum inventore officia cum quasi.
                Accusantium, hic saepe?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_us">
        <div className="wrapper">
          <div className="contact_us__container">
            <div className="map_container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0768406872535!2d72.93531957337089!3d19.14811344970818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b86e528cb077%3A0x1f221447c0a2ee0a!2sHotel%20Pride!5e0!3m2!1sen!2sin!4v1741511073152!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="address_container">
              <h2>hotel pride</h2>
              <ul>
                <li>
                  <span className="address_container__heading">Address</span>
                  <span>:</span>
                  <span className="address_container__description">
                    Hotel Pride, Lbs Marg, Rs, Dreams Mall Rd, next to Icici
                    Bank, Bhandup West, Mumbai, Maharashtra 400078
                  </span>
                </li>
                <li>
                  <span className="address_container__heading">Email</span>
                  <span>:</span>
                  <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                </li>
                <li>
                  <span className="address_container__heading">Telephone</span>
                  <span>:</span>
                  <a href="tel:9876543210">9876543210</a>
                </li>
              </ul>
              <div className="address__nearby">
                <div className="address__nearby-walk-container">
                  <span className="address__nearby-walk"></span>
                </div>
                <ul>
                  {/* <li>
                    <span>Nearest International Airport</span>&nbsp;11.9 km T2 -
                    Chhatrapati Shivaji International Airport
                  </li>
                  <li>
                    <span>Nearest Railway Station</span>&nbsp;1.1km Bhandup
                    Railway Station
                  </li>
                  <li>
                    <span>Nearest Tourist Attractions</span>&nbsp;6.5km Red
                    Carpet Wax Museum
                  </li> */}
                  <li>
                    <span>Nearest International Airport</span>&nbsp;11.9 km away
                  </li>
                  <li>
                    <span>Nearest Railway Station</span>&nbsp;1.1 km away
                  </li>
                  <li>
                    <span>Nearest Tourist Attractions</span>&nbsp;6.5 km away
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
