import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { useRef, useState } from 'react';

export const About = () => {
  const errorRef = useRef();

  return (
    <div style={{ paddingLeft: '12%' }}>
      <Meta title="About" description="About me and my work all is their." />
      <section class="about-area">
        <div class="container">
          <div class="d-flex about-me-wrap align-items-start">
            <div data-aos="zoom-in">
              <div class="about-image-box shadow-box">
                <img src="/images/bg1.png" alt="BG" class="bg-img" />
                <div class="image-inner">
                  <img src="/images/me2.png" alt="About Me" />
                </div>
              </div>
            </div>

            <div class="about-details" data-aos="zoom-in">
              <h1 class="section-heading" data-aos="fade-up">
                <img src=" /images/star-2.png" alt="Star" /> Self-summary{' '}
                <img src=" /images/star-2.png" alt="Star" />
              </h1>
              <div class="about-details-inner shadow-box">
                <img src=" /images/icon2.png" alt="Star" />
                <h1>Saurav Prajapati</h1>
                <p>
                  Hello, my name is Saurav Prajapati, and I reside in Karawal Nagar,
                  Delhi. I am a dedicated web developer with over more than three years of
                  professional experience. I started with a 6-month internship at
                  Whoomama, followed by a 2 year at Epic Web Techno as a Junior Web
                  Developer, where I worked with Next.js and React. I then spent seven
                  months at Lemniscate Technologies as a Web Developer. Currently, I am a
                  Shopify Developer at Eglogics Softech Pvt. Ltd., focusing on creating
                  and customizing Shopify stores. My passion lies in web development, and
                  I specialize in Shopify and WordPress development.
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-24">
            <div class="col-md-6" data-aos="zoom-in">
              <div class="about-edc-exp about-experience shadow-box">
                <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                <h3>EXPERIENCE</h3>

                <ul>
                  <li>
                    <p class="date">Aug 2022 - Nov 2022</p>
                    <h2>Wordpress Designer & Developer</h2>
                    <p class="type">Woohmama (Online Internship)</p>
                  </li>
                  <li>
                    <p class="date">Sep 2021 - Oct 2023</p>
                    <h2>Web Developer</h2>
                    <p class="type">Epic Web Techno</p>
                  </li>
                  <li>
                    <p class="date">Oct 2023 - April 2024</p>
                    <h2>Web Developer</h2>
                    <p class="type">Lemniscate Technologies</p>
                  </li>
                  <li>
                    <p class="date">April 2024 - (Present) </p>
                    <h2>Shopify Developer</h2>
                    <p class="type">Eglogics Softech Pvt. Ltd.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6" data-aos="zoom-in">
              <div class="about-edc-exp about-education shadow-box">
                <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                <h3>EDUCATION</h3>

                <ul>
                  <li>
                    <p class="date">2017 - 2018</p>
                    <h2>
                      X<sup>th</sup>
                    </h2>
                    <p class="type">CBSE Board</p>
                  </li>
                  <li>
                    <p class="date">2019 - 2020</p>
                    <h2>
                      {' '}
                      Xll<sup>th</sup>
                    </h2>
                    <p class="type">CBSE Board</p>
                  </li>
                  <li>
                    <p class="date">2020 - 2023</p>
                    <h2>Bachelor of Arts</h2>
                    <p class="type">Delhi University</p>
                  </li>
                  <li>
                    <p class="date">Nov 2020 - Nov 2021</p>
                    <h2>Diploma in Graphic & Web Designing</h2>
                    <p class="type">Vision Institute</p>
                  </li>
                  <li>
                    <p class="date">Nov 2020 - Nov 2021</p>
                    <h2>MCA (Master of Computer Applications)</h2>
                    <p class="type">MDU (Maharshi Dayanand University)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row mt-24">
            <div class="col-md-12">
              <div class="d-flex profile-contact-credentials-wrap gap-24">
                {/* <div data-aos="zoom-in">
                                    <div class="about-profile-box info-box shadow-box h-full">
                                        <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                                        <div class="inner-profile-icons shadow-box">
                                            <a href="#">
                                                <i class="iconoir-dribbble"></i>
                                            </a>
                                            <a href="#">
                                                <i class="iconoir-twitter"></i>
                                            </a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="infos">
                                                <h4>Stay with me</h4>
                                                <h1>Profiles</h1>
                                            </div>

                                            <a href="contact" class="about-btn">
                                                <img src=" /images/icon.svg" alt="Button" />
                                            </a>

                                        </div>
                                    </div>
                                </div> */}

                <div data-aos="zoom-in" class="flex-1">
                  <div class="about-contact-box info-box shadow-box">
                    <a class="overlay-link" href="contact"></a>
                    <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                    <img src=" /images/icon2.png" alt="Icon" class="star-icon" />
                    <h1>
                      Let's <br />
                      work <span>together.</span>
                    </h1>
                    <a href="contact" class="about-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>

                <div data-aos="zoom-in" class="h-full">
                  <div class="about-crenditials-box info-box shadow-box">
                    <a class="overlay-link" href="credentials"></a>
                    <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                    <img src=" /images/sign.png" alt="Sign" />
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="infos">
                        <h4>more about me</h4>
                        <h1>Credentials</h1>
                      </div>

                      <a href="credentials" class="about-btn">
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
    </div>
  );
};
