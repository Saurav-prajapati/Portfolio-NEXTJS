import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { useRef, useState } from 'react';

export const Work = () => {
  const errorRef = useRef();

  return (
    <Section style={{ paddingLeft: '13%' }}>
      <Meta title="Work" description="what I am doing for all.." />

      {/* <section class="projects-area">
                <div class="container">
                    <h1 class="section-heading" data-aos="fade-up"><img src=" /images/star-2.png" alt="Star" /> All Projects <img src=" /images/star-2.png" alt="Star" /></h1>
                    <div class="row">
                        <div class="col-md-4">
                            <div data-aos="zoom-in">
                                <div class="project-item shadow-box">
                                    <a class="overlay-link" href="https://www.hootyballoo.com/"></a>
                                    <img src=" images/bg1.png" alt="BG" class="bg-img" />
                                    <div class="project-img">
                                        <img src=" /images/project1.jpg" alt="Project" />
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="project-info">
                                            <p>SHOPIFY</p>
                                            <h1>hootyballoo.com</h1>
                                        </div>
                                        <a href="https://www.hootyballoo.com/" class="project-btn" target='_blank'>
                                            <img src=" /images/icon.svg" alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in">
                                <div class="project-item shadow-box">
                                    <a class="overlay-link" href="https://mynwcpr.com/"></a>
                                    <img src=" images/bg1.png" alt="BG" class="bg-img" />
                                    <div class="project-img">
                                        <img src=" /images/project2.jpg" alt="Project" />
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="project-info">
                                            <p>SHOPIFY</p>
                                            <h1>mynwcpr.com</h1>
                                        </div>
                                        <a href="https://mynwcpr.com/ " class="project-btn">
                                            <img src=" /images/icon.svg" alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <h1 class="section-heading" data-aos="fade-up"><img src=" /images/star-2.png" alt="Star" /> All Projects <img src=" /images/star-2.png" alt="Star" /></h1>

                            <div class="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" class="flex-1">
                                    <div class="project-item shadow-box">
                                        <a class="overlay-link" href="https://italiving.de/"></a>
                                        <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                                        <div class="project-img">
                                            <img src=" /images/project3.jpg" alt="Project" />
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="project-info">
                                                <p>SHOPIFY</p>
                                                <h1>italiving.de</h1>
                                            </div>
                                            <a href="https://italiving.de/" class="project-btn">
                                                <img src=" /images/icon.svg" alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" class="flex-1">
                                    <div class="project-item shadow-box">
                                        <a class="overlay-link" href="https://ca.goodgoodbrand.com/"></a>
                                        <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                                        <div class="project-img">
                                            <img src=" /images/project4.jpg" alt="Project" />
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="project-info">
                                                <p> SHOPIFY</p>
                                                <h1>ca.goodgoodbrand.com</h1>
                                            </div>
                                            <a href="https://ca.goodgoodbrand.com/ " class="project-btn">
                                                <img src=" /images/icon.svg" alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" class="flex-1">
                                    <div class="project-item shadow-box">
                                        <a class="overlay-link" href="https://rousefit.com/"></a>
                                        <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                                        <div class="project-img">
                                            <img src=" /images/project5.jpg" alt="Project" />
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="project-info">
                                                <p>SHOPIFY</p>
                                                <h1>rousefit.com</h1>
                                            </div>
                                            <a href="https://rousefit.com/ " class="project-btn">
                                                <img src=" /images/icon.svg" alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" class="flex-1">
                                    <div class="project-item shadow-box">
                                        <a class="overlay-link" href="https://www.8000kicks.com/"></a>
                                        <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                                        <div class="project-img">
                                            <img src=" /images/project6.jpg" alt="Project" />
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="project-info">
                                                <p>SHOPIFY</p>
                                                <h1>8000kicks.com</h1>
                                            </div>
                                            <a href="https://www.8000kicks.com/" class="project-btn">
                                                <img src=" /images/icon.svg" alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      <section class="projects-area">
        <div class="container">
          <h1 class="section-heading" data-aos="fade-up">
            <img src=" /images/star-2.png" alt="Star" /> All Projects{' '}
            <img src=" /images/star-2.png" alt="Star" />
          </h1>
          <div class="row">
            <div class="col-md-6">
              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>hootyballoo.com</h1>
                    </div>
                    <a
                      href="https://www.hootyballoo.com/"
                      class="project-btn"
                      target="_blank"
                    >
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>mynwcpr.com</h1>
                    </div>
                    <a href="https://mynwcpr.com/ " class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>italiving.de</h1>
                    </div>
                    <a href="https://italiving.de/" class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p> SHOPIFY</p>
                      <h1>ca.goodgoodbrand.com</h1>
                    </div>
                    <a href="https://ca.goodgoodbrand.com/ " class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>rousefit.com</h1>
                    </div>
                    <a href="https://rousefit.com/ " class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>8000kicks.com</h1>
                    </div>
                    <a href="https://www.8000kicks.com/" class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>elementssupply.com</h1>
                    </div>
                    <a href="https://elementssupply.com/" class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>taylorleanne.com</h1>
                    </div>
                    <a href="https://taylorleanne.com/" class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>tellius.com</h1>
                    </div>
                    <a href="https://www.tellius.com/" class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>elitekeepershop.com</h1>
                    </div>
                    <a href="https://www.elitekeepershop.com/" class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>rouki.ca</h1>
                    </div>
                    <a href="https://www.rouki.ca/" class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>claudeberry.com</h1>
                    </div>
                    <a href="https://www.claudeberry.com/" class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>SHOPIFY</p>
                      <h1>manonsimard-boutique.com</h1>
                    </div>
                    <a href="https://www.manonsimard-boutique.com/" class="project-btn">
                      <img src=" /images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in">
                <div class="project-item p-4 shadow-box">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="project-info">
                      <p>React, Next, UI </p>
                      <h1>Many More</h1>
                    </div>
                    <img src=" /images/icon.svg" alt="Button" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h1 class="section-heading" data-aos="fade-up">
                <img src=" /images/star-2.png" alt="Star" /> All Projects{' '}
                <img src=" /images/star-2.png" alt="Star" />
              </h1>
              <div class="d-grid align-items-start gap-24">
                <div data-aos="zoom-in" class="flex-1">
                  <div class="project-item shadow-box">
                    <div class="d-flex align-items-center p-2 justify-content-between">
                      <div class="project-info">
                        <p>SHOPIFY</p>
                        <h1>zibaa.in</h1>
                      </div>
                      <a href="https://zibaa.in/" class="project-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-grid align-items-start gap-24">
                <div data-aos="zoom-in" class="flex-1">
                  <div class="project-item shadow-box">
                    <div class="d-flex align-items-center p-2 justify-content-between">
                      <div class="project-info">
                        <p>SHOPIFY</p>
                        <h1>pltdaddy.com</h1>
                      </div>
                      <a href="https://pltdaddy.com/" class="project-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-grid align-items-start gap-24">
                <div data-aos="zoom-in" class="flex-1">
                  <div class="project-item shadow-box">
                    <div class="d-flex align-items-center p-2 justify-content-between">
                      <div class="project-info">
                        <p>SHOPIFY</p>
                        <h1>flowerstore.co.uk</h1>
                      </div>
                      <a href="https://www.flowerstore.co.uk/" class="project-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in" class="flex-1">
                  <div class="project-item shadow-box">
                    <div class="d-flex align-items-center p-2 justify-content-between">
                      <div class="project-info">
                        <p>WORDPRESS</p>
                        <h1>classe365.com</h1>
                      </div>
                      <a href="https://classe365.com/" class="project-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-grid align-items-start gap-24">
                <div data-aos="zoom-in" class="flex-1">
                  <div class="project-item shadow-box">
                    <div class="d-flex align-items-center p-2 justify-content-between">
                      <div class="project-info">
                        <p>WORDPRESS</p>
                        <h1>elitesport.soccer</h1>
                      </div>
                      <a href="https://elitesport.soccer/" class="project-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div class="project-item p-4 shadow-box">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="project-info">
                        <p>Next.js</p>
                        <h1>epicwebtechno.co</h1>
                      </div>
                      <a href="https://www.epicwebtechno.co/" class="project-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div class="project-item p-4 shadow-box">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="project-info">
                        <p>Next.js</p>
                        <h1>ravisharma.live</h1>
                      </div>
                      <a href="https://www.ravisharma.live/" class="project-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-grid align-items-start gap-24">
                <div data-aos="zoom-in" class="flex-1">
                  <div class="project-item shadow-box">
                    <div class="d-flex align-items-center p-2 justify-content-between">
                      <div class="project-info">
                        <p>WORDPRESS</p>
                        <h1>systempkg.com</h1>
                      </div>
                      <a href="https://systempkg.com/" class="project-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-grid align-items-start gap-24">
                <div data-aos="zoom-in" class="flex-1">
                  <div class="project-item shadow-box">
                    <div class="d-flex align-items-center p-2 justify-content-between">
                      <div class="project-info">
                        <p>WORDPRESS</p>
                        <h1>traveesindia.com</h1>
                      </div>
                      <a href="https://traveesindia.com/" class="project-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-grid align-items-start gap-24">
                <div data-aos="zoom-in" class="flex-1">
                  <div class="project-item shadow-box">
                    <div class="d-flex align-items-center p-2 justify-content-between">
                      <div class="project-info">
                        <p>WORDPRESS</p>
                        <h1>jhakaashai.com</h1>
                      </div>
                      <a href="https://jhakaashai.com.com/" class="project-btn">
                        <img src=" /images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" class="flex-1">
                  <div class="project-item shadow-box">
                    <div class="d-flex align-items-center p-2 justify-content-between">
                      <div class="project-info">
                        <p>WORDPRESS</p>
                        <h1>Many More</h1>
                      </div>
                      <img src=" /images/icon.svg" alt="Button" />
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
