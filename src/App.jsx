import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, MapPin, Calendar, Users, MessageSquare, Phone, Mail, User, ChevronUp, Star, ArrowRight } from 'lucide-react';
import ThreeScene from './components/ThreeScene';
import './index.css';

// Side parallax images (wedding/event themed)
const SIDE_IMAGES = {
  left: [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80',
  ],
  right: [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80',
  ],
};

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const services = [
    { title: 'Weddings', icon: '💍', desc: 'Elegant spaces for your dream wedding celebration.' },
    { title: 'Birthdays', icon: '🎂', desc: 'Joyful setups and catering for memorable birthdays.' },
    { title: 'Corporate Events', icon: '💼', desc: 'Professional environments with top-tier AV support.' },

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
    'Valet Parking', 'Bridal Suite', 'AV & Lighting', 'Outdoor Garden'
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
        <button className="btn-primary">Download Full Menu <ArrowRight size={18} style={{ verticalAlign: 'middle', marginLeft: '5px' }} /></button>
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
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
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
        <div className="stat-number count-up" data-target="5">0</div>
        <div className="stat-label">Years Excellence</div>
      </div>
    </div>
  );
};

const BookNow = () => {
  const [status, setStatus] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');
    const formData = new FormData(event.target);
    formData.append("access_key", "88022166-38dd-404c-832f-7ff89b4cee77");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('');
        setShowSuccess(true);
        event.target.reset();
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        setStatus('Error: Could not send message.');
        setTimeout(() => setStatus(''), 4000);
      }
    } catch (error) {
      setStatus('Error: Something went wrong.');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <section id="book-now" className="gsap-section">
      <h2 className="section-title">Reserve Your <span>Date</span></h2>
      <div className="float-card contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><User size={16} /> Name</label>
                <input type="text" name="name" required placeholder="John Doe" />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Phone size={16} /> Phone</label>
                <input type="tel" name="phone" required placeholder="+91 98765 43210" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Mail size={16} /> Email</label>
            <input type="email" name="email" required placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Calendar size={16} /> Event Date</label>
                <input type="date" name="event_date" required />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Users size={16} /> Guests Count</label>
                <input type="number" name="guests" required placeholder="500" min="50" max="2000" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>Event Type</label>
            <select name="event_type" required>
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate</option>
              <option value="banquet">Banquet</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><MessageSquare size={16} /> Message</label>
            <textarea name="message" rows="4" placeholder="Any specific requirements?"></textarea>
          </div>

          <button
            type="submit"
            className={`btn-primary btn-submit-anim${status === 'Sending...' ? ' btn-loading' : ''}`}
            style={{ width: '100%', position: 'relative', overflow: 'hidden' }}
          >
            {status === 'Sending...' ? 'Sending...' : (
              <span className="btn-submit-text">🚀 Submit Request</span>
            )}
          </button>

          {/* Error message */}
          {status && status !== 'Sending...' && (
            <div className="form-error-msg">
              ⚠️ {status}
            </div>
          )}

          {/* Inline Success Animation */}
          {showSuccess && (
            <div className="inline-success-card">
              <div className="confetti-wrapper">
                {[...Array(12)].map((_, i) => (
                  <span key={i} className={`confetti-dot dot-${i}`}></span>
                ))}
              </div>
              <div className="success-check-wrap">
                <svg className="success-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="success-circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="success-tick" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>
              <h3 className="inline-success-title">Thank you! 🎉</h3>
              <p className="inline-success-text">
                Your form has been submitted successfully.<br />
                <strong>We will contact you soon.</strong>
              </p>
              <div className="success-timer-bar"></div>
            </div>
          )}
        </form>
      </div>

      <style>{`
        /* Error Message */
        .form-error-msg {
          margin-top: 1rem;
          padding: 0.9rem 1.2rem;
          background: linear-gradient(135deg, rgba(180,30,30,0.25), rgba(200,50,50,0.15));
          border: 1px solid rgba(220,60,60,0.4);
          color: #ff7b7b;
          border-radius: 10px;
          text-align: center;
          font-weight: 600;
          animation: shakeIn 0.5s ease;
        }

        @keyframes shakeIn {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }

        /* Inline Success Card */
        .inline-success-card {
          position: relative;
          margin-top: 1.5rem;
          padding: 2rem 1.5rem;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(34,197,94,0.12), rgba(16,185,129,0.08));
          border: 1px solid rgba(34,197,94,0.35);
          text-align: center;
          overflow: hidden;
          animation: successCardIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes successCardIn {
          0%   { opacity: 0; transform: translateY(30px) scale(0.92); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Confetti Dots */
        .confetti-wrapper {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .confetti-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: confettiFly 2s ease-out forwards;
          opacity: 0;
        }

        .dot-0  { background: #f43f5e; top: 60%; left: 10%; animation-delay: 0.1s; }
        .dot-1  { background: #f59e0b; top: 50%; left: 20%; animation-delay: 0.2s; }
        .dot-2  { background: #22d3ee; top: 70%; left: 30%; animation-delay: 0.15s; }
        .dot-3  { background: #a78bfa; top: 55%; left: 45%; animation-delay: 0.25s; }
        .dot-4  { background: #34d399; top: 65%; left: 60%; animation-delay: 0.1s; }
        .dot-5  { background: #fb923c; top: 50%; left: 75%; animation-delay: 0.3s; }
        .dot-6  { background: #f43f5e; top: 60%; left: 88%; animation-delay: 0.2s; }
        .dot-7  { background: #818cf8; top: 40%; left: 15%; animation-delay: 0.35s; }
        .dot-8  { background: #4ade80; top: 45%; left: 50%; animation-delay: 0.05s; }
        .dot-9  { background: #f59e0b; top: 35%; left: 70%; animation-delay: 0.4s; }
        .dot-10 { background: #22d3ee; top: 55%; left: 35%; animation-delay: 0.28s; }
        .dot-11 { background: #f472b6; top: 40%; left: 80%; animation-delay: 0.18s; }

        @keyframes confettiFly {
          0%   { opacity: 1; transform: translateY(0) rotate(0deg) scale(1); }
          100% { opacity: 0; transform: translateY(-120px) rotate(720deg) scale(0.5); }
        }

        /* Animated Checkmark */
        .success-check-wrap {
          width: 72px;
          height: 72px;
          margin: 0 auto 1rem;
        }

        .success-svg {
          width: 72px;
          height: 72px;
          display: block;
        }

        .success-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2.5;
          stroke: #22c55e;
          animation: drawCircle 0.7s cubic-bezier(0.65,0,0.45,1) 0.3s forwards;
        }

        .success-tick {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          stroke-width: 2.5;
          stroke: #22c55e;
          stroke-linecap: round;
          animation: drawTick 0.4s cubic-bezier(0.65,0,0.45,1) 0.9s forwards;
        }

        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }

        @keyframes drawTick {
          to { stroke-dashoffset: 0; }
        }

        /* Text */
        .inline-success-title {
          font-size: 1.6rem;
          background: linear-gradient(to right, #22c55e, #4ade80, #86efac);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          animation: fadeSlideUp 0.6s ease 1.1s both;
        }

        .inline-success-text {
          font-size: 1rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          animation: fadeSlideUp 0.6s ease 1.3s both;
        }

        [data-theme="ethereal"] .inline-success-text,
        [data-theme="mesh"] .inline-success-text {
          color: rgba(0,0,0,0.7);
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Timer bar — shrinks from 100% to 0 over 5s */
        .success-timer-bar {
          margin-top: 1.2rem;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(to right, #22c55e, #4ade80);
          animation: timerShrink 5s linear forwards;
          transform-origin: left;
        }

        @keyframes timerShrink {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `}</style>
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
            <li><a href="#"><Phone size={20} /></a></li>
            <li><a href="#"><Mail size={20} /></a></li>
            <li><a href="https://maps.app.goo.gl/C62ZTVpdiM3AGeAp9"><MapPin size={20} /></a></li>
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
        <div className="footer-col footer-map" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>Location</h3>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1rem' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5750247135875!2d80.19592257508704!3d13.062700912874373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266b0ab8651f5%3A0x9664fca1234d14f3!2s11%20HALL%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1780981279596!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navShrunk, setNavShrunk] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(false);

  const heroRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const leftPanelDeepRef = useRef(null);
  const rightPanelDeepRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    setIsMenuOpen(false);
  }, [theme]);

  // Navbar shrink on scroll
  useEffect(() => {
    const onScroll = () => setNavShrunk(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Confetti burst helper
  const fireConfetti = () => {
    setConfettiBurst(true);
    setTimeout(() => setConfettiBurst(false), 2200);
  };

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

      // Side Panel Parallax — Layer 1 (shallow)
      const nx = clientX / window.innerWidth - 0.5;
      const ny = clientY / window.innerHeight - 0.5;
      if (leftPanelRef.current) {
        gsap.to(leftPanelRef.current, { x: nx * -30, y: ny * 25, duration: 1.2, ease: 'power2.out' });
      }
      if (rightPanelRef.current) {
        gsap.to(rightPanelRef.current, { x: nx * 30, y: ny * 25, duration: 1.2, ease: 'power2.out' });
      }
      // Side Panel Parallax — Layer 2 (deep)
      if (leftPanelDeepRef.current) {
        gsap.to(leftPanelDeepRef.current, { x: nx * -55, y: ny * 45, duration: 1.8, ease: 'power2.out' });
      }
      if (rightPanelDeepRef.current) {
        gsap.to(rightPanelDeepRef.current, { x: nx * 55, y: ny * 45, duration: 1.8, ease: 'power2.out' });
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
            onUpdate: function () {
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

      <nav className={navShrunk ? 'nav-shrunk' : ''}>
        <div className="nav-container">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('home'); setIsMenuOpen(false); }} className="nav-logo">11 HALL</a>

          {/* Desktop links */}
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

          {/* Hamburger Button (mobile) */}
          <button
            className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {['Home', 'Services', 'Facilities', 'Menu', 'Gallery', 'Reviews', 'Book Now'].map((item) => {
            const id = item.toLowerCase().replace(' ', '-');
            return (
              <a
                key={item}
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo(id); setIsMenuOpen(false); }}
              >
                {item}
              </a>
            );
          })}
        </div>
      </nav>

      <main>
        <section id="home" className="gsap-section hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

          {/* HERO CENTRE CONTENT */}
          <div className="hero-content" ref={heroRef}>
            <h1 className="hero-title hero-levitate">11 HALL<br /><span>Convention Centre</span></h1>
            <h2 className="hero-subtitle">Where Celebrations Become Timeless</h2>
            <p className="hero-address">
              <MapPin size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} />
              No: 07, VV Koil St, Chinmaya Nagar, Chennai, Tamil Nadu 600092
            </p>

            {/* CTA Buttons row */}
            <div className="hero-btns">
              <button
                className="btn-primary"
                onClick={() => { scrollTo('book-now'); fireConfetti(); }}
              >
                Book Now
              </button>
              <a
                href="https://maps.app.goo.gl/C62ZTVpdiM3AGeAp9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tour"
              >
                <span className="tour-icon">🔮</span> 360° Virtual Tour
              </a>
            </div>

            {/* Confetti burst */}
            {confettiBurst && (
              <div className="confetti-hero-wrapper" aria-hidden="true">
                {[...Array(22)].map((_, i) => (
                  <span key={i} className={`ch-dot ch-dot-${i}`} />
                ))}
              </div>
            )}
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
          <ChevronUp size={16} style={{ transform: isThemeMenuOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%2011%20HALL%20Convention%20Centre"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.459-2.012A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.827-1.883l-.489-.291-5.022 1.194 1.216-4.898-.317-.504A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.261 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.62-3.201-1.978-1.183-1.057-1.981-2.363-2.213-2.761-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.199-.897-2.163-1.229-2.962-.324-.778-.653-.673-.897-.685l-.764-.013c-.266 0-.697.1-.1063.498-.365.398-1.396 1.362-1.396 3.32 0 1.957 1.428 3.849 1.627 4.115.199.266 2.811 4.289 6.813 6.014.953.411 1.696.656 2.275.84.956.304 1.826.261 2.514.158.767-.114 2.354-.962 2.686-1.892.332-.93.332-1.727.232-1.892-.1-.166-.365-.266-.763-.465z"/>
        </svg>
        <span className="whatsapp-label">WhatsApp</span>
      </a>
    </>
  );
}
