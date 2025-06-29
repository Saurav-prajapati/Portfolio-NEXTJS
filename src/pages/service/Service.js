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
            <div className="col-md-4">
              <div className="service-sidebar" data-aos="fade-right">
                <div className="service-sidebar-inner shadow-box">
                  <ul>
                    <li>
                      <i className="iconoir-camera icon"></i>
                      PHOTOGRAPHY
                    </li>
                    <li>
                      <i className="iconoir-design-pencil icon"></i>
                      WEB DESIGNING
                    </li>
                    <li>
                      <i className="iconoir-color-filter icon"></i>
                      BRANDING
                    </li>
                    <li>
                      <i className="iconoir-code icon"></i>
                      DEVELOPMENT
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8">
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
                      <h3>Photography</h3>
                      <p>
                        I offer professional photography services tailored to elevate your
                        brand’s visual identity. From product shoots for e-commerce stores
                        to lifestyle and promotional photography, I ensure each image is
                        sharp, well-composed, and aligned with your brand's tone.
                        High-quality visuals help build trust — and I help deliver just
                        that.
                      </p>
                    </div>
                    <div className="service-item">
                      <h3>Web Designing</h3>
                      <p>
                        Your website is often the first impression of your business — I
                        make sure it's a great one. I design clean, responsive, and
                        user-focused websites that not only look stunning but also perform
                        well across all devices. Whether you need a fresh design or a
                        redesign, I create layouts that reflect your brand and keep users
                        engaged.
                      </p>
                    </div>
                    <div className="service-item">
                      <h3>Branding</h3>
                      <p>
                        I help businesses build strong, memorable brands from the ground
                        up. From logo design to brand colors, typography, and messaging —
                        I create cohesive visual identities that make your business stand
                        out. My goal is to make your brand look polished, professional,
                        and instantly recognizable.
                      </p>
                    </div>
                    <div className="service-item">
                      <h3>Development</h3>
                      <p>
                        I develop fast, functional, and fully responsive websites using
                        Shopify, WordPress, and modern frontend technologies. Whether
                        you’re launching an online store or need a custom business site, I
                        build with clean code, optimized speed, and user-friendly admin
                        panels. I turn ideas into smooth digital experiences.
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
