import { useState } from 'react'
import {
  business,
  waLink,
  images,
  categories,
  products,
  riceSizes,
  hire,
} from './data.js'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['#products', 'Products'],
    ['#rice', 'Rice sizes'],
    ['#hire', 'Vehicle hire'],
    ['#about', 'About'],
    ['#contact', 'Contact'],
  ]
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label="Sylvaline Ventures home">
          <span className="brand-mark">S</span>
          <span className="brand-text">
            Sylvaline <small>Ventures</small>
          </span>
        </a>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Main">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn btn-gold header-cta" href={waLink('Hello Sylvaline, I want to place an order.')} target="_blank" rel="noreferrer">
          <WhatsAppIcon /> Order
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero" style={{ '--hero-img': `url(${images.hero})` }}>
      <div className="wrap hero-inner">
        <p className="eyebrow">Ijeshatedo · Lagos</p>
        <h1>
          Your whole market list, <span>in one shop.</span>
        </h1>
        <p className="lede">
          Frozen chicken and turkey, orobo, sausages, soft drinks, oil, rice, beans and garri.
          Buy for your home, your shop or your party, and hire a vehicle when you need to move.
        </p>
        <div className="hero-actions">
          <a className="btn btn-gold" href={waLink('Hello Sylvaline, I want to place an order.')} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> Order on WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${business.phones[0]}`}>
            Call {business.phones[0]}
          </a>
        </div>
        <ul className="hero-facts">
          <li><strong>Retail & bulk</strong> One pack or a full carton</li>
          <li><strong>Always fresh</strong> Frozen goods kept cold</li>
          <li><strong>Vehicle hire</strong> Trips, moves and deliveries</li>
        </ul>
      </div>
    </section>
  )
}

function Products() {
  const [active, setActive] = useState('all')
  const shown = active === 'all' ? products : products.filter((p) => p.cat === active)
  return (
    <section id="products" className="section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow dark">What we sell</p>
          <h2>Foodstuff for every kitchen</h2>
          <p className="muted">
            Prices move with the market, so send us a message for today's price.
          </p>
        </div>
        <div className="tabs" role="tablist" aria-label="Product categories">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={active === c.id ? 'tab active' : 'tab'}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="grid">
          {shown.map((p) => (
            <article className="card" key={p.name}>
              <div className="card-img">
                <img src={p.img} alt={p.name} loading="lazy" />
                <span className="card-tag">{p.tag}</span>
              </div>
              <div className="card-body">
                <h3>{p.name}</h3>
                <p>{p.note}</p>
                <a
                  className="card-link"
                  href={waLink(`Hello Sylvaline, what is today's price for ${p.name}?`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask today's price →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function RiceSizes() {
  return (
    <section id="rice" className="section rice">
      <div className="wrap rice-row">
        <div className="rice-img">
          <img src={images.rice} alt="Grains of rice" loading="lazy" />
        </div>
        <div className="rice-copy">
          <p className="eyebrow dark">Rice by the bag</p>
          <h2>Buy the size that fits your home</h2>
          <p className="muted">No need to buy a full bag if you don't need one.</p>
          <div className="sizes">
            {riceSizes.map((r, i) => (
              <div className="size" key={r.size}>
                <div className="sack" style={{ '--fill': `${(i + 1) * 33}%` }} aria-hidden="true" />
                <div>
                  <h3>{r.size}</h3>
                  <p className="weight">{r.weight}</p>
                  <p className="muted small">{r.for}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="btn btn-green" href={waLink('Hello Sylvaline, I want to buy rice. Which brands do you have in stock?')} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> Ask which brands are in stock
          </a>
        </div>
      </div>
    </section>
  )
}

function Hire() {
  return (
    <section id="hire" className="section hire">
      <div className="wrap hire-row">
        <div className="hire-copy">
          <p className="eyebrow">Sylvaline Hire Services</p>
          <h2>Need a vehicle? Book one with us.</h2>
          <p>
            Our vehicle hire service moves people and goods around Lagos. Get a quote before
            you book, then follow your trip from pickup to drop-off.
          </p>
          <div className="hire-services">
            {hire.services.map(([t, d]) => (
              <div key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <ul className="checks">
            {hire.perks.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <a className="btn btn-gold" href={hire.url} target="_blank" rel="noreferrer">
              Book a vehicle →
            </a>
            <a className="btn btn-ghost" href={`${hire.url}`} target="_blank" rel="noreferrer">
              See our fleet
            </a>
          </div>
        </div>
        <div className="hire-photos">
          <img className="hp-1" src={images.hireMain} alt="White SUV parked by a palm tree" loading="lazy" />
          <img className="hp-2" src={images.hireVan} alt="Delivery van with its back doors open" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function About() {
  const points = [
    ['Fair market prices', 'We buy in bulk so you pay less, whether you take one pack or ten cartons.'],
    ['Retail and wholesale', 'Homes, food sellers, restaurants and shop owners all buy from us.'],
    ['Easy ordering', 'Call or send a WhatsApp message. We confirm price and stock before you come.'],
  ]
  return (
    <section id="about" className="section">
      <div className="wrap about-row">
        <img className="about-img" src={images.shop} alt="Inside a foodstuff shop" loading="lazy" />
        <div>
          <p className="eyebrow dark">About us</p>
          <h2>A neighbourhood foodstuff store you can trust</h2>
          <p className="muted">
            Complete Sylvaline Ventures serves Ijeshatedo, Surulere, Itire, Aguda and nearby
            areas with quality foodstuff at honest prices.
          </p>
          <div className="points">
            {points.map(([t, d]) => (
              <div className="point" key={t}>
                <h3>{t}</h3>
                <p className="muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState('')
  const copy = async (value) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(value)
      setTimeout(() => setCopied(''), 1800)
    } catch {
      setCopied('')
    }
  }
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Visit or call</p>
          <h2>Come to the shop or order by phone</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Address</h3>
            <p>{business.address}</p>
            <a href={business.mapUrl} target="_blank" rel="noreferrer" className="card-link light">
              Get directions on Google Maps →
            </a>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            {business.phones.map((p) => (
              <p key={p} className="phone-row">
                <a href={`tel:${p}`}>{p}</a>
                <button className="copy" onClick={() => copy(p)}>
                  {copied === p ? 'Copied' : 'Copy'}
                </button>
              </p>
            ))}
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <p className="phone-row">
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <a href={waLink('Hello Sylvaline!')} target="_blank" rel="noreferrer" className="btn btn-gold small-btn">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <p>© {new Date().getFullYear()} {business.name}. Ijeshatedo, Lagos.</p>
        <p className="muted-light">Photos from Unsplash</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <RiceSizes />
        <Hire />
        <About />
        <Contact />
      </main>
      <Footer />
      <a className="wa-float" href={waLink('Hello Sylvaline, I want to place an order.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  )
}
