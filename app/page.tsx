'use client';

import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Leaf,
  Menu,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Sun,
  X,
  type LucideIcon,
} from 'lucide-react';

const fruitImage = '/images/ChatGPT Image Sep 7, 2026, 11_07_01 AM.png';
const brandImage = '/images/Screenshot_2026-09-06_111431.png';
const careersImage = 'images/carrer.webp';
const distributorImage = 'https://images.pexels.com/photos/32418799/pexels-photo-32418799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const products = [
  ['Dried Orange', 'Bright citrus flavor with a naturally satisfying crunch.', '/images/Dried%20Orange.webp', 'orange'],
  ['Dried Pineapple', 'Tropical sweetness with a delicious chewy-crisp texture.', '/images/Dried%20Pineapple.webp', 'pineapple'],
  ['Dried Strawberry', 'Naturally fruity, vibrant and irresistibly delicious.', '/images/Dried%20Strawberry.webp', 'strawberry'],
  ['Dried Kiwi', 'A refreshing balance of sweet and tangy flavor.', '/images/Dried%20Kiwi.webp', 'kiwi'],
  ['Dried Apple', 'Light, crisp and naturally satisfying.', '/images/Dried%20Apple.webp', 'apple'],
  ['Banana Chips', 'Golden, crunchy and full of familiar banana goodness.', '/images/Banana.webp', 'banana'],
  ['Dried Apricot', 'Soft, naturally sweet and packed with fruity flavor.', '/images/Dried%20Apricot.webp', 'apricot'],
  ['Onion Powder', 'Fine, savory onion powder with a bold aromatic finish.', 'images/onion.webp', 'onion'],
  ['Garlic Powder', 'Aromatic garlic powder for quick and delicious flavor boosts.', 'images/garlic.webp', 'garlic'],
  ['Beetroot Powder', 'Naturally vibrant color with an earthy, sweet finish.', 'images/beetroot.webp', 'beetroot'],
  ['Okara Chips', 'Light, crunchy and naturally satisfying with a wholesome bite.', 'images/Okra.webp', 'mixed'],
  ['Mixed Fruit', 'A colorful mix of delicious dried fruit favorites.', '/images/Mixed.webp', 'mixed'],
];

type Benefit = [string, string, string, LucideIcon];

const benefits: Benefit[] = [
  ['01', '100% NATURAL', 'Carefully selected fruits with a naturally delicious taste.', Leaf],
  ['02', 'PREMIUM QUALITY', 'Quality-focused preparation and careful handling.', Sparkles],
  ['03', 'MADE WITH CARE', 'Every batch is prepared with attention to detail.', Sun],
  ['04', 'NOTHING EXTRA', 'Simple fruit-focused snacking without unnecessary extras.', Check],
];

const steps = [
  ['01', 'SELECT', 'Quality fruits are carefully selected for taste, texture and freshness.', 'images/select.webp'],
  ['02', 'PREPARE', 'Each fruit is washed, sliced and carefully prepared for drying.', 'images/prepare.webp'],
  ['03', 'DRY', 'The fruit is gently dried to lock in natural flavor and a satisfying crunch.', 'images/dry.webp'],
  ['04', 'PACK', 'Finished fruit is packed with care to preserve freshness and premium quality.', 'images/Mixed.webp'],
];

const distributorBenefits = [
  ['Premium Product Range', 'A curated selection of naturally dried fruits customers love.'],
  ['Quality-Focused Brand', 'A brand built on care, consistency and premium ingredients.'],
  ['Growing Market Opportunity', 'Rising demand for healthy, natural everyday snacks.'],
  ['Long-Term Partnership', 'Reliable supply and a collaborative approach to growth.'],
];

function Logo() {
  return (
    <a href="/#top" className="brand-lockup" aria-label="Crunchlisious home">
      <img src="/images/logo.webp" alt="Crunchlisious logo" className="brand-logo" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = ['Home', 'About', 'Products', 'Our Process', 'Why Us', 'Careers', 'Contact'];

  return (
    <main id="top">
      <header className="site-header">
        <div className="container nav-inner">
          <Logo />
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item} href={item === 'Home' ? '/#top' : item === 'Contact' ? '/#contact' : item === 'Why Us' ? '/#about' : `/#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="mobile-contact" href="/#partner" onClick={closeMenu}>Partner With Us <ArrowRight size={16} /></a>
          </nav>
          <a className="button button-orange nav-cta" href="/#partner">Partner With Us <ArrowRight size={16} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" style={{ backgroundImage: `url("${fruitImage}")` }} />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow light">NATURALLY DRIED <span /></p>
          <h1 id="hero-title">Make food<br /><em>delicious.</em></h1>
          <p className="hero-copy">Premium dried fruits and vegetables made from carefully selected produce, naturally transformed into delicious everyday snacks.</p>
          <div className="hero-actions">
            <a className="button button-orange" href="/#products">Discover our products <ArrowRight size={17} /></a>
            <a className="text-link light" href="/#about">Our story <ArrowDownRight size={17} /></a>
          </div>
          {/* <div className="hero-note"><span>01</span><span className="note-line" /><span>Real produce. Thoughtfully made.</span></div> */}
        </div>
        <a href="/#collection" className="scroll-cue" aria-label="Scroll to collection"><span>Scroll to explore</span><ChevronDown size={18} /></a>
      </section>

      <section className="intro-section" id="collection">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">OUR COLLECTION <span /></p>
            <h2>Naturally delicious.<br /><em>Simply better.</em></h2>
          </div>
          <div className="intro-copy"><p>Discover a colorful collection of naturally dried fruits, crafted for delicious everyday moments.</p><a href="/#products" className="circle-link" aria-label="Explore collection"><ArrowDownRight size={21} /></a></div>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="container">
          <div className="section-topline"><p className="eyebrow">THE COLLECTION <span /></p><span className="section-count">{String(products.length).padStart(2, '0')} / {String(products.length).padStart(2, '0')}</span></div>
          <div className="products-grid">
            {products.map(([name, description, image, tone], index) => (
              <article className="product-item" key={name}>
                <div className={`product-image tone-${tone}`} style={{ backgroundImage: `url("${image}")` }}><span className="product-number">{String(index + 1).padStart(2, '0')}</span><a href="/#contact" className="product-arrow" aria-label={`Explore ${name}`}><ArrowUpRight /></a></div>
                <div className="product-details"><h3>{name}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section" id="about">
        <div className="container benefits-layout">
          <div className="benefits-heading"><p className="eyebrow">WHY CRUNCHLISIOUS <span /></p><h2>Good fruit.<br /><em>Great taste.</em><br />Nothing extra.</h2><p>We keep the goodness of real fruit at the heart of everything we make.</p></div>
          <div className="benefits-list">{benefits.map(([number, title, text, Icon]) => <div className="benefit" key={title}><span className="benefit-number">{number}</span><Icon className="benefit-icon" size={24} /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="process-section" id="our-process">
        <div className="container process-wrapper">
          <div className="section-topline process-topline">
            <div>
              <p className="eyebrow">OUR PROCESS <span /></p>
              <h2>From fresh fruit<br /><em>to delicious crunch.</em></h2>
            </div>
            <p className="section-description">A simple, careful process designed to bring out the natural character of every fruit.</p>
          </div>

          <div className="process-line">
            {steps.map(([number, title, text, image]) => (
              <div className="process-step" key={number}>
                <div className="process-visual" style={{ backgroundImage: `linear-gradient(180deg, rgba(19, 31, 23, .18), rgba(19,31,23,.2)), url("${image}")` }}>
                  <span className="process-number">{number}</span>
                </div>
                <div className="process-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container story-grid"><div className="story-image" style={{ backgroundImage: `url("${fruitImage}")` }}><span>EST. 2026</span></div><div className="story-copy"><p className="eyebrow">OUR STORY <span /></p><h2>Real fruit.<br /><em>Thoughtfully made.</em></h2><p>Crunchlisious started with a simple idea — make food delicious by celebrating the natural character of real fruit.</p><p>We carefully transform quality fruits into flavorful dried snacks that bring color, crunch and convenience to everyday moments.</p><a className="text-link" href="/#promise">Learn more <ArrowRight size={17} /></a></div></div>
      </section>

      <section className="promise-section" id="promise"><div className="container promise-inner"><p className="eyebrow">OUR PROMISE <span /></p><h2>Quality you can <em>taste.</em></h2><p className="promise-lead">From the fruit we select to the way we prepare and pack it, quality remains at the heart of Crunchlisious.</p><div className="promise-points">{['Carefully selected fruits', 'Hygienic preparation', 'Consistent quality', 'Careful packaging'].map((point, index) => <div key={point}><span>0{index + 1}</span><p>{point}</p><Check size={18} /></div>)}</div></div></section>

      <section className="packaging-section"><div className="container packaging-inner"><div className="packaging-copy"><p className="eyebrow light">THE BRAND EXPERIENCE <span /></p><h2>Packed<br /><em>with care.</em></h2><p>A premium experience from the first look to the final bite.</p><a className="button button-light" href="/#contact">Discover Crunchlisious <ArrowRight size={17} /></a></div><div className="packaging-visual"><div className="pouch"><span>CRUNCH<br />LISIOUS</span><small>MAKE FOOD<br />DELICIOUS</small></div><span className="visual-caption">NATURALLY DRIED / 01</span></div></div></section>

      {/* CAREERS SECTION */}
      <section className="careers-section" id="careers">
        <div className="container careers-grid">
          <div className="careers-image" style={{ backgroundImage: `url("${careersImage}")` }}>
            <span className="section-tag">CAREERS / 01</span>
          </div>
          <div className="careers-copy">
            <p className="eyebrow">CAREERS <span /></p>
            <h2>Grow with<br /><em>Crunchlisious.</em></h2>
            <p className="section-lead">We&apos;re always looking for passionate people who want to grow with a brand built around quality, creativity and delicious ideas.</p>
            <p className="section-lead">&ldquo;At Crunchlisious, we believe great products are made by great people. Join us as we build a brand that makes everyday food more delicious.&rdquo;</p>
            <div className="careers-actions">
              <a className="button button-orange" href="/careers/apply">Apply for a job <ArrowRight size={17} /></a>
              <a className="text-link" href="/#careers">View open positions <ArrowDownRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* DISTRIBUTOR PARTNERSHIP SECTION */}
      <section className="distributor-section" id="partner">
        <div className="container distributor-grid">
          <div className="distributor-copy">
            <p className="eyebrow">PARTNER WITH US <span /></p>
            <h2>Bring Crunchlisious<br /><em>to your market.</em></h2>
            <p className="section-lead">Partner with Crunchlisious and help bring premium dried fruits to more customers across your city and beyond.</p>
            <div className="distributor-benefits">
              {distributorBenefits.map(([title, desc], i) => (
                <div className="dist-benefit" key={title}>
                  <span className="dist-number">0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                  <Check size={18} className="dist-check" />
                </div>
              ))}
            </div>
            <div className="distributor-actions">
              <a className="button button-dark" href="/partners/apply">Become a distributor <ArrowRight size={17} /></a>
              <a className="text-link" href="/#contact">Partnership enquiry <ArrowDownRight size={16} /></a>
            </div>
          </div>
          <div className="distributor-image" style={{ backgroundImage: `url("${distributorImage}")` }}>
            <span className="section-tag">PARTNERS / 02</span>
          </div>
        </div>
      </section>

      <section className="message-section" style={{ backgroundImage: `linear-gradient(90deg, rgba(27, 48, 31, .85), rgba(27,48,31,.1)), url("${fruitImage}")` }}><div className="container"><p className="eyebrow light">THE CRUNCHLISIOUS WAY <span /></p><h2>Real fruit.<br />Real flavor.<br /><em>Real crunch.</em></h2><p>Naturally dried fruit made to bring a little more deliciousness to every day.</p></div></section>

      <section className="testimonials-section"><div className="container"><div className="section-topline"><div><p className="eyebrow">CUSTOMER LOVE <span /></p><h2>Loved for<br /><em>the crunch.</em></h2></div><span className="quote-mark">&ldquo;</span></div><div className="testimonial-grid">{['Fresh, flavorful and genuinely delicious.', 'Beautiful quality with amazing natural fruit flavor.', 'A simple snack that feels special.'].map((quote, index) => <blockquote key={quote}><span>0{index + 1}</span><p>&ldquo;{quote}&rdquo;</p><footer>Crunchlisious friend</footer></blockquote>)}</div></div></section>

      <section className="final-cta" id="contact" style={{ backgroundImage: `linear-gradient(rgba(35, 53, 36, .78), rgba(35, 53, 36, .78)), url("${fruitImage}")` }}><div className="container"><p className="eyebrow light">A LITTLE MORE DELICIOUS <span /></p><h2>Make food<br /><em>delicious.</em></h2><p>Discover the naturally delicious world of Crunchlisious.</p><div className="hero-actions"><a className="button button-orange" href="https://wa.me/919873774919?text=Hello%20Crunchlisious%2C%20I%20would%20like%20to%20get%20in%20touch.">Get in touch <ArrowRight size={17} /></a><a className="text-link light" href="/#products">Explore products <ArrowRight size={17} /></a></div></div></section>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><Logo /><p>Premium naturally dried fruits and vegetables made with care and a passion for deliciousness.</p><span className="footer-signature">Naturally made. Thoughtfully shared.</span></div><div className="footer-links"><h3>Explore</h3><a href="/#top">Home</a><a href="/#about">About</a><a href="/#products">Products</a><a href="/#our-process">Our process</a><a href="/#careers">Careers</a><a href="/#partner">Partners</a></div><div className="footer-contact"><h3>Say hello</h3><p className="footer-ceo">CEO <strong>Deepanshu Jain</strong></p><a href="mailto:crunchlisious@gmail.com"><Mail size={16} /> crunchlisious@gmail.com</a><a href="tel:+919873774919"><Phone size={16} /> +91 98737 74919</a><a href="/#contact"><MapPin size={16} /> Rohini, Sector 4, Delhi</a><a href="/#contact"><Instagram size={16} /> Instagram</a></div></div><div className="container footer-bottom"><span>© 2026 Crunchlisious. All rights reserved.</span><span>Made for delicious moments.</span></div></footer>
    </main>
  );
}

function ArrowUpRight() {
  return <ArrowRight size={18} className="arrow-up-right" />;
}
