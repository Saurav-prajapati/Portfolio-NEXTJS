import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { useRef, useState } from 'react';

export const Service = () => {
  const errorRef = useRef();

  return (
    <Section>
      <Meta title="Service" description="what I am Offering.." />
      <section className="service-area">
        <div className="container">
          <h1 className="section-heading" data-aos="fade-up">
            <img src=" /images/star-2.png" alt="Star" /> My Offerings{' '}
            <img src=" /images/star-2.png" alt="Star" />
          </h1>

          <div className="row">
            <div className="col-md-5">
              <div className="service-sidebar" data-aos="fade-right">
                <div className="service-sidebar-inner shadow-box">
                  <ul>
                    <li>
                      <i className="iconoir-shop icon"></i>
                      Shopify Store Development
                    </li>

                    <li>
                      <i className="iconoir-code icon"></i>
                      Shopify Theme Customization
                    </li>

                    <li>
                      <i className="iconoir-shop icon"></i>
                      Responsive Web Design
                    </li>

                    <li>
                      <i className="iconoir-cart icon"></i>
                      E-commerce Solutions
                    </li>

                    <li>
                      <i className="iconoir-flash icon"></i>
                      Website Performance Optimization
                    </li>

                    <li>
                      <i className="iconoir-settings icon"></i>
                      Custom Features & API Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <h1 className="section-heading" data-aos="fade-up">
                <img src=" /images/star-2.png" alt="Star" /> My Offerings{' '}
                <img src=" /images/star-2.png" alt="Star" />
              </h1>
            </div>

            <div className="col-md-12 mt-5">
              <div className="service-content-wrap" data-aos="zoom-in">
                <div className="service-content-inner shadow-box">
                  <div className="service-items">
                    <div className="service-item">
                      <h3>Shopify Store Development</h3>
                      <p>
                        I develop fully customized Shopify stores tailored to business
                        goals and customer experience. From store setup to complete theme
                        development, I build scalable and high-performing e-commerce
                        websites designed to drive sales and provide seamless shopping
                        experiences.
                      </p>
                    </div>

                    <div className="service-item">
                      <h3>Shopify Theme Customization</h3>
                      <p>
                        I customize Shopify themes based on specific business
                        requirements, including layout changes, custom sections,
                        metafields integration, and UI enhancements. My focus is to create
                        unique storefronts that improve user engagement and conversion
                        rates.
                      </p>
                    </div>

                    <div className="service-item">
                      <h3>Responsive Web Design</h3>
                      <p>
                        I design responsive and mobile-first websites that deliver
                        consistent performance across all devices. Using modern frontend
                        technologies like HTML, CSS, JavaScript, and Tailwind CSS, I
                        ensure clean layouts and smooth user experiences.
                      </p>
                    </div>

                    <div className="service-item">
                      <h3>E-commerce Solutions</h3>
                      <p>
                        I provide complete e-commerce solutions including product setup,
                        store optimization, payment integration, and user experience
                        improvements. My goal is to help businesses build reliable online
                        stores that support long-term growth.
                      </p>
                    </div>

                    <div className="service-item">
                      <h3>Website Performance Optimization</h3>
                      <p>
                        I optimize website speed and performance by improving code
                        structure, reducing load time, and enhancing overall
                        responsiveness. Fast-loading websites improve SEO rankings and
                        deliver better user satisfaction.
                      </p>
                    </div>

                    <div className="service-item">
                      <h3>Custom Features & API Integration</h3>
                      <p>
                        I implement custom functionalities using Shopify APIs, webhooks,
                        and third-party integrations. From advanced cart logic to dynamic
                        features, I build scalable solutions tailored to unique business
                        workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-12">
              <div className="d-flex profile-contact-credentials-wrap gap-24">
                <div data-aos="zoom-in">
                  <div className="about-profile-box info-box shadow-box h-full">
                    <img src=" /images/bg1.png" alt="BG" className="bg-img" />
                    <div className="inner-profile-icons shadow-box">
                      <a
                        href="https://www.linkedin.com/in/saurav-parjapati-bv191102/"
                        target="_blank"
                      >
                        <i className="iconoir-linkedin"></i>
                      </a>
                      <a href="tel:9868464518" target="_blank">
                        <i className="iconoir-phone"></i>
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>Stay with me</h4>
                        <h1>Profiles</h1>
                      </div>

                      <a href="contact" className="about-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" className="flex-1">
                  <div className="about-contact-box info-box shadow-box">
                    <a className="overlay-link" href="/contact"></a>
                    <img src=" /images/bg1.png" alt="BG" className="bg-img" />
                    <img src=" /images/icon2.png" alt="Icon" className="star-icon" />
                    <h1>
                      Let's <br />
                      work <span>together.</span>
                    </h1>
                    <a href="/contact" className="about-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>

                <div data-aos="zoom-in" className="h-full">
                  <div className="about-crenditials-box info-box shadow-box">
                    <a className="overlay-link" href="/credentials"></a>
                    <img src=" /images/bg1.png" alt="BG" className="bg-img" />
                    <img src=" /images/sign.png" alt="Sign" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>more about me</h4>
                        <h1>Credentials</h1>
                      </div>

                      <a href="/credentials" className="about-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Section>
  );
};
