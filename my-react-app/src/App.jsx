import React, { useState, useEffect } from 'react';
import './App.css'; // Your existing CSS file

const App = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Header Navigation */}
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <div className="nav-brand">
              <img
                src="Whatsapp4u.png"
                alt="Whatsapp4u Logo"
                className="logo"
              />
            </div>
            <div className="nav-menu" id="navMenu" className={navActive ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-list">
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About Us</a></li>
                <li><a href="#services" className="nav-link">Services</a></li>
                <li><a href="#categories" className="nav-link"> Our Categories</a></li>
                <li><a href="#team" className="nav-link">Our Team</a></li>
                <li><a href="#contact" className="nav-link">Contacts</a></li>
              </ul>
              <div className="nav-contact">
                <div className="contact-info">
                  <i className="fas fa-phone"></i>
                  <span>+91 95000 60448, +91 95000 82252</span>
                </div>
                <div className="contact-info">
                  <i className="fas fa-envelope"></i>
                  <span>contact@whatsapp4u.com</span>
                </div>
              </div>
            </div>
            <div className="hamburger" id="hamburger" onClick={toggleNav}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-subtitle">
                <h1>Digital</h1>
                <h1>Marketing</h1>
              </div>
              <div className="hero-description">
                <p>
                  Whatsapp4u – The Digital Marketing & Software Development
                  Solutions enhance the best branding & networking solutions to
                  your business.
                </p>
              </div>
              <div className="hero-contact">
                <div className="contact-item">
                  <div className="contact-icon">
                    <img
                      src="https://qads.co.in/wp-content/uploads/2020/03/img_box_29_orange-1.png"
                      alt="Phone"
                    />
                  </div>
                  <div className="contact-details">
                    <h3>+91 95000 60448</h3>
                    <p>contact@whatsapp4u.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://qads.co.in/wp-content/uploads/2022/08/Digital-Marketing_1.png"
                alt="Digital Marketing"
              />
            </div>
          </div>
          <div className="decorative-elements">
            <div className="floating-element triangle-orange">
              <img
                src="https://qads.co.in/wp-content/uploads/2019/12/triangle_orange-1.png"
                alt="Triangle"
              />
            </div>
            <div className="floating-element circle">
              <img
                src="https://qads.co.in/wp-content/uploads/2019/12/circle-1.png"
                alt="Circle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="section-badge">Who We Are?</div>
              <h2 className="section-title">Boosts Your Website Traffic!</h2>
              <div className="divider"></div>
              <p>
                Whatsapp4u is a digital marketing, website design, and application
                development agency based in India. Our team creates visually
                appealing designs, websites, high-performance web applications and
                kickass online campaigns.
              </p>
              <p>
                Our team of experienced staffs are on hand to discuss your goals
                for growth, and how we can best help you achieve them.
              </p>
              <p>
                We value our clients. We go beyond the call of duty to achieve the
                goals set. These qualities help us retain continued success.
              </p>
              <a href="#services" className="btn-primary">Discover more</a>
            </div>

            <div className="about-image">
              <div className="service-card">
                <img src="./DigitalMarketing.png" alt="Digital Marketing" />
                <h4>Digital Marketing</h4>
              </div>

              <div className="service-card">
                <img src="./Website.png" alt="Website Development" />
                <h4>Website Development</h4>
              </div>

              <div className="service-card">
                <img src="./App.png" alt="Application Development" />
                <h4>Application Development</h4>
              </div>

              <div className="service-card">
                <img src="./Whatsapp.png" alt="Bulk Whatsapp Marketing" />
                <h4>Bulk Whatsapp Marketing</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <div className="container">
          <div className="experience-content">
            <div className="experience-text">
              <div className="section-badge">experience</div>
              <h2 className="section-title">
                ANYONE CAN CHOOSE BUSINESS BUT SOME CAN MAKE IT MORE UNIQUE
              </h2>
              <div className="divider"></div>
              <p>
                Then, Whatsapp4u –The Digital Marketing Solutions will be the
                perfect choice. Digital Marketing is a growing trend of Effective
                Marketing. When Customers tend to Online, then Business should
                tend itself to ONLINE. Do choose us & Refer all our COMPLETE
                MARKETING PACKAGES starting from DESIGNING to DEVELOPMENT packages
                covers every one of business holders.
              </p>
            </div>
            <div className="experience-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <img
                    src="https://qads.co.in/wp-content/uploads/2022/08/Employess-Stat.png"
                    alt="Employees"
                  />
                </div>
                <div className="stat-info">
                  <h3>Digital Marketing</h3>
                  <div className="stat-bar">
                    <div className="stat-progress" style={{width: '99%'}}></div>
                  </div>
                  <span>99%</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <img
                    src="https://qads.co.in/wp-content/uploads/2022/08/Employess-Stat.png"
                    alt="Employees"
                  />
                </div>
                <div className="stat-info">
                  <h3>App Development</h3>
                  <div className="stat-bar">
                    <div className="stat-progress" style={{width: '95%'}}></div>
                  </div>
                  <span>95%</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <img
                    src="https://qads.co.in/wp-content/uploads/2022/08/Employess-Stat.png"
                    alt="Employees"
                  />
                </div>
                <div className="stat-info">
                  <h3>Website Development</h3>
                  <div className="stat-bar">
                    <div className="stat-progress" style={{width: '98%'}}></div>
                  </div>
                  <span>98%</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <img
                    src="https://qads.co.in/wp-content/uploads/2022/08/Employess-Stat.png"
                    alt="Employees"
                  />
                </div>
                <div className="stat-info">
                  <h3>Billing Software Development</h3>
                  <div className="stat-bar">
                    <div className="stat-progress" style={{width: '98%'}}></div>
                  </div>
                  <span>98%</span>
                </div>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=919944441205&text="
                className="btn-primary"
              >
                Let's Start !
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">5</div>
              <div className="stat-label">Years Of Professional Service</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50+</div>
              <div className="stat-label">Experts Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title">What We Offer</h2>
          <div className="services-detailed">
            <div className="service-detailed-card">
              <div className="service-detailed-icon">
                <img
                  src="https://qads.co.in/wp-content/uploads/2022/08/home10_service1-active-1_png.png"
                  alt="App Development"
                />
              </div>
              <h3>App Development</h3>
              <p>
                Online marketing and bargaining has become very much easy with the
                arrival of android phones. While sitting at your home, you can buy
                and sell anything you want.
              </p>
            </div>
            <div className="service-detailed-card">
              <div className="service-detailed-icon">
                <img
                  src="https://qads.co.in/wp-content/uploads/2022/08/home10_service4-active-1_png.png"
                  alt="Billing Software"
                />
              </div>
              <h3>Billing Software</h3>
              <p>
                A billing software can be any software designed to handle time and
                billing tracking as well as invoicing customers for services and
                products.
              </p>
            </div>
            <div className="service-detailed-card">
              <div className="service-detailed-icon">
                <img
                  src="https://qads.co.in/wp-content/uploads/2022/08/home10_service2-active-1_png.png"
                  alt="Web Development"
                />
              </div>
              <h3>Web Development</h3>
              <p>
                All our web design projects are directly handled by the senior
                creative team. The team includes the Art Director, Creative
                Director and Copywriter – all of whom have over 10 years of
                expertise in building world-class websites.
              </p>
            </div>
            <div className="service-detailed-card">
              <div className="service-detailed-icon">
                <img
                  src="https://qads.co.in/wp-content/uploads/2022/08/home10_service5-active-1_png.png"
                  alt="Bulk Whatsapp"
                />
              </div>
              <h3>Bulk Whatsapp</h3>
              <p>
                WhatsApp bulk messages are a very effective method businesses uses
                to contact leads and build customer loyalty.
              </p>
            </div>
            <div className="service-detailed-card">
              <div className="service-detailed-icon">
                <img
                  src="https://qads.co.in/wp-content/uploads/2022/08/home10_service3-active-1_png.png"
                  alt="Digital Marketing"
                />
              </div>
              <h3>Digital Marketing</h3>
              <p>
                Any business requires promotion for its growth. Promotion involves
                communicating the existence of your business to a maximum number
                of people and also to convince them to buy your products and
                services.
              </p>
            </div>
            <div className="service-detailed-card">
              <div className="service-detailed-icon">
                <img
                  src="https://qads.co.in/wp-content/uploads/2022/08/home10_service6-active-1_png.png"
                  alt="Social Media Marketing"
                />
              </div>
              <h3>Social Media Marketing</h3>
              <p>
                Social Media Platforms are upcoming day-by-day. The most common
                and user-friendly platforms of all known are Facebook & Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Have New Business Plan?</h2>
          <p>Feel Free to Reach Us</p>
          <div className="cta-contact">
            <h3>+91 95000 60448</h3>
            <a
              href="https://api.whatsapp.com/send?phone=919500060448&text="
              className="btn-primary"
            >
              Send message
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-details">
                <div className="contact-item">
                  <img
                    src="https://qads.co.in/wp-content/uploads/2019/12/img_box_29_violet-1.png"
                    alt="Contacts"
                  />
                  <div>
                    <h6>+91 95000 60448 +91 95000 82252</h6>
                    <p>contact@whatsapp4u.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <img
                    src="https://qads.co.in/wp-content/uploads/2019/12/img_box_30_violet-1.png"
                    alt="Location"
                  />
                  <div>
                    <p>
                      2nd & 3rd Floor, Aravindha Complex,<br />
                      100 Feet Road, Periyar Statue,<br />
                      Karaikudi, Tamil Nadu 630001.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Enquiry Form</h3>
              <form>
                <select required>
                  <option value="">Select your Service*</option>
                  <option value="digital-marketing">Digital marketing</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="website">Website Development</option>
                  <option value="billing">Billing Softwares</option>
                  <option value="whatsapp">WhatsApp Bulk Softwares</option>
                </select>
                <a
                  href="https://api.whatsapp.com/send?phone=919944441205"
                  className="btn-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>About</h4>
              <p>
                We focus on the needs of small to middle market businesses to
                improve and grow their return.
              </p>
              <div className="social-links">
                <a href="https://twitter.com/IndQads">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/qadsofficial">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="http://instagram.com/qads_ind/?r=nametag">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Community</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Newsletter</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 — Whatsapp4u. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
