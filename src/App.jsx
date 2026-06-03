import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, MapPin, Calendar, Users, MessageSquare, Phone, Mail, User, ChevronUp, Star, ArrowRight } from 'lucide-react';
import ThreeScene from './components/ThreeScene';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const services = [
    { title: 'Weddings', icon: '💍', desc: 'Elegant spaces for your dream wedding celebration.' },
    { title: 'Birthdays', icon: '🎂', desc: 'Joyful setups and catering for memorable birthdays.' },
    { title: 'Corporate Events', icon: '💼', desc: 'Professional environments with top-tier AV support.' },
    { title: 'Banquets', icon: '🍽️', desc: 'Grand feasts in our luxurious banquet halls.' }
  ];

  return (
    <section id="services" className="gsap-section">
      <h2 className="section-title">Our <span>Services</span></h2>
      <div className="grid-4">
        {services.map((s, i) => (
          <div key={i} className="float-card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{s.icon}</div>
            <h3 style={{ marginBottom: '1rem' }}>{s.title}</h3>
            <p style={{ color: 'var(--text-light)' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Facilities = () => {
  const facilities = [
    'Grand Ballroom', 'Valet Parking', 'Bridal Suite', 'AV & Lighting', 'Outdoor Garden', 'Exclusive Bar'
  ];

  return (
    <section id="facilities" className="gsap-section">
      <h2 className="section-title">Premium <span>Facilities</span></h2>
      <div className="grid-3">
        {facilities.map((f, i) => (
          <div key={i} className="float-card" style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '1rem 0' }}>{f}</h3>
            <div style={{ width: '50px', height: '2px', background: 'var(--gold-primary)', margin: '0 auto' }}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Menu = () => {
  const vegItems = [
    { name: 'Veg Meals', desc: 'Traditional multi-course feast served on a banana leaf.', price: '₹450', img: 'https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=150&q=80' },
    { name: 'Paneer Butter Masala', desc: 'Creamy tomato gravy with fresh cottage cheese.', price: '₹320', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=150&q=80' },
  ];

  const nonVegItems = [
    { name: 'Mutton Biryani', desc: 'Authentic dum style biryani cooked with tender meat.', price: '₹480', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=150&q=80' },
    { name: 'Butter Chicken', desc: 'Tender chicken cooked in a smooth buttery gravy.', price: '₹380', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=150&q=80' },
  ];

  return (
    <section id="menu" className="gsap-section" style={{ maxWidth: '1200px' }}>
      <h2 className="section-title">Exquisite <span>Menu</span></h2>
      <div className="grid-2">
        {/* Left Column: Veg */}
        <div>
          <h3 className="menu-column-title">🌿 Vegetarian Feast</h3>
          {vegItems.map((item, i) => (
            <div key={i} className="menu-item-card">
              <img src={item.img} alt={item.name} className="menu-item-img" />
              <div className="menu-item-info">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Non-Veg */}
        <div>
          <h3 className="menu-column-title">🍗 Non-Veg Signature</h3>
          {nonVegItems.map((item, i) => (
            <div key={i} className="menu-item-card">
              <img src={item.img} alt={item.name} className="menu-item-img" />
              <div className="menu-item-info">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <button className="btn-primary">Download Full Menu <ArrowRight size={18} style={{ verticalAlign: 'middle', marginLeft: '5px' }}/></button>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <section id="gallery" className="gsap-section">
      <h2 className="section-title">Event <span>Gallery</span></h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div key={i} className="gallery-item">
            <img src={src} alt={`Event ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { text: "The perfect venue for our wedding! The arrangements were impeccable and the food was extraordinary.", author: "Priya & Rahul" },
    { text: "Professional staff, stunning decor, and an overall seamless experience for our corporate conference.", author: "TechCorp India" },
    { text: "Highly recommend 11 HALL! The antigravity theme lighting made my daughter's sweet 16 unforgettable.", author: "Sneha V." },
  ];

  return (
    <section id="reviews" className="gsap-section">
      <h2 className="section-title">Client <span>Love</span></h2>
      <div className="grid-3">
        {reviews.map((r, i) => (
          <div key={i} className="float-card testimonial-card">
            <div className="stars">
              <Star fill="currentColor" size={24}/>
              <Star fill="currentColor" size={24}/>
              <Star fill="currentColor" size={24}/>
              <Star fill="currentColor" size={24}/>
              <Star fill="currentColor" size={24}/>
            </div>
            <p className="testimonial-text">"{r.text}"</p>
            <p className="testimonial-author">- {r.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Statistics = () => {
  // Simple GSAP counter logic happens in useEffect of App
  return (
    <div className="stats-container gsap-section">
      <div className="stat-item">
        <div className="stat-number count-up" data-target="500">0</div>
        <div className="stat-label">Events Hosted</div>
      </div>
      <div className="stat-item">
        <div className="stat-number count-up" data-target="3">0</div>
        <div className="stat-label">Grand Halls</div>
      </div>
      <div className="stat-item">
        <div className="stat-number count-up" data-target="15">0</div>
        <div className="stat-label">Years Excellence</div>
      </div>
    </div>
  );
};

const BookNow = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Success! We will contact you shortly to confirm your booking.');
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="book-now" className="gsap-section">
      <h2 className="section-title">Reserve Your <span>Date</span></h2>
      <div className="float-card contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><User size={16}/> Name</label>
                <input type="text" required placeholder="John Doe" />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Phone size={16}/> Phone</label>
                <input type="tel" required placeholder="+91 98765 43210" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Mail size={16}/> Email</label>
            <input type="email" required placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Calendar size={16}/> Event Date</label>
                <input type="date" required />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Users size={16}/> Guests Count</label>
                <input type="number" required placeholder="500" min="50" max="2000" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>Event Type</label>
            <select required>
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate</option>
              <option value="banquet">Banquet</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><MessageSquare size={16}/> Message</label>
            <textarea rows="4" placeholder="Any specific requirements?"></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            {status === 'Sending...' ? 'Sending...' : 'Submit Request'}
          </button>
          
          {status && status !== 'Sending...' && (
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(19,115,51,0.2)', color: '#5bb974', borderRadius: '8px', textAlign: 'center' }}>
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <h3>11 HALL</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: 1.6 }}>Where celebrations become timeless. Experience luxury and antigravity aesthetics in the heart of Chennai.</p>
          <ul className="footer-links" style={{ display: 'flex', gap: '1rem' }}>
            <li><a href="#"><Phone size={20}/></a></li>
            <li><a href="#"><Mail size={20}/></a></li>
            <li><a href="#"><MapPin size={20}/></a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#services">Our Services</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#menu">Exquisite Menu</a></li>
            <li><a href="#gallery">Event Gallery</a></li>
            <li><a href="#book-now">Book Your Event</a></li>
          </ul>
        </div>
        <div className="footer-col footer-map">
          <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>Location</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.986835153406!2d80.1837651!3d13.0676451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266b0266cf293%3A0x8f7d88c2fb821038!2sChinmaya%20Nagar%20Stage%201%2C%20Chinmaya%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="footer-col">
          <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>Newsletter</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Subscribe for exclusive offers and updates.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button>Join</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} 11 HALL Convention Centre. All rights reserved.</p>
      </div>
    </footer>
  );
};

const THEMES = [
  { id: 'midnight', name: '1. Midnight Royal' },
  { id: 'mesh', name: '2. Dreamy Mesh' },
  { id: 'ethereal', name: '3. Ethereal White' },
  { id: 'liquid', name: '4. Liquid Gold' },
  { id: 'starry', name: '5. Starry Constellation' }
];

export default function App() {
  const [theme, setTheme] = useState('midnight');
  const [activeSection, setActiveSection] = useState('home');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  
  const heroRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Custom Cursor Logic
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Hero Parallax
      if (heroRef.current) {
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;
        gsap.to(heroRef.current, { x: x, y: y, duration: 1, ease: 'power2.out' });
      }

      // Cursor Dot (immediate)
      if (cursorDotRef.current) {
        gsap.to(cursorDotRef.current, { x: clientX, y: clientY, duration: 0, ease: 'none' });
      }
      
      // Cursor Ring (trailing)
      if (cursorRingRef.current) {
        gsap.to(cursorRingRef.current, { x: clientX, y: clientY, duration: 0.15, ease: 'power2.out' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initial floating hero animation
    gsap.fromTo('.hero-levitate', 
      { y: 30, opacity: 0 }, 
      { y: -10, opacity: 1, duration: 2, ease: 'power2.out' }
    );
    
    gsap.to('.hero-levitate', {
      y: 10,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: 2
    });

    // Scroll Progress Bar
    gsap.to('.scroll-progress-bar', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1
      }
    });

    // Count Up Statistics Animation
    const counters = document.querySelectorAll('.count-up');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      ScrollTrigger.create({
        trigger: counter,
        start: "top 90%",
        onEnter: () => {
          gsap.to(counter, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            onUpdate: function() {
              counter.innerHTML = Math.round(this.targets()[0].innerHTML) + (target === 500 || target === 15 ? "+" : "");
            }
          });
        },
        once: true
      });
    });

    // ScrollTrigger reveals for generic sections
    const sections = gsap.utils.toArray('.gsap-section');
    sections.forEach((sec) => {
      gsap.fromTo(sec, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Update active nav link
    const navSections = gsap.utils.toArray('main > section');
    navSections.forEach((sec) => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top center",
        end: "bottom center",
        onToggle: self => {
          if (self.isActive) setActiveSection(sec.id);
        }
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="custom-cursor-dot" ref={cursorDotRef}></div>
      <div className="custom-cursor-ring" ref={cursorRingRef}></div>
      <div className="scroll-progress-bar" style={{ scaleX: 0 }}></div>

      <div className="watermark">11 HALL Convention Centre</div>
      
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
        <Canvas>
          <ThreeScene theme={theme} />
        </Canvas>
      </div>

      <nav>
        <div className="nav-container">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="nav-logo">11 HALL</a>
          <ul className="nav-links">
            {['Home', 'Services', 'Facilities', 'Menu', 'Gallery', 'Reviews', 'Book Now'].map((item) => {
              const id = item.toLowerCase().replace(' ', '-');
              return (
                <li key={item}>
                  <a 
                    href={`#${id}`} 
                    className={activeSection === id ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <main>
        <section id="home" className="gsap-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div className="hero-content" ref={heroRef}>
            <h1 className="hero-title hero-levitate">11 HALL<br/><span>Convention Centre</span></h1>
            <h2 className="hero-subtitle">Where Celebrations Become Timeless</h2>
            <p className="hero-address">
              <MapPin size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} />
              No: 07, VV Koil St, Chinmaya Nagar, Chennai, Tamil Nadu 600092
            </p>
            <button className="btn-primary" onClick={() => scrollTo('book-now')}>Book Now</button>
          </div>
        </section>

        <Statistics />
        <Services />
        <Facilities />
        <Menu />
        <Gallery />
        <Testimonials />
        <BookNow />
      </main>

      <Footer />

      <div className="theme-picker">
        <div className={`theme-list ${isThemeMenuOpen ? 'open' : ''}`}>
          {THEMES.map(t => (
            <button 
              key={t.id}
              className={`theme-option ${theme === t.id ? 'active' : ''}`}
              onClick={() => {
                setTheme(t.id);
                setIsThemeMenuOpen(false);
              }}
            >
              {t.name}
            </button>
          ))}
        </div>
        <button 
          className="theme-btn" 
          onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
        >
          <Palette size={20} /> 
          Theme 
          <ChevronUp size={16} style={{ transform: isThemeMenuOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}/>
        </button>
      </div>
    </>
  );
}
