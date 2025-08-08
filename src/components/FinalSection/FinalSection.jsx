
import React from "react";
import "./FinalSection.css";

const articles = [
  {
    title: "10 AI Content Creation Tools for Businesses",
    category: "GUIDES",
    image: "https://mydukaan.io/blog/wp-content/uploads/AI-Content-Creation-Tools.jpg",
  },
  {
    title: "Dukaan Dimensions 2022 – A Retrospective on the Growth",
    category: "PRESS",
    image: "https://mydukaan.io/blog/wp-content/uploads/dukaan-dimensions-featured-image-1200x385.jpg",
  },
  {
    title: "How to Sell Antiques Online – Detailed Step Guide",
    category: "SELL ONLINE",
    image: "https://mydukaan.io/blog/wp-content/uploads/sell-antiques-online-1200x385.jpg",
  },
];

function FinalSection() {
  return (
    <section className="final-section">
      {/* 1. Enterprise Banner */}
      <div className="enterprise-banner">
        <div className="enterprise-content">
          <h2>Scale your business with Dukaan Enterprise</h2>
          <p>
            Unlock your brand’s online potential on Dukaan’s lightning fast infrastructure
            with custom built features.
          </p>
          <ul>
            <li>99.9% uptime</li>
            <li>Returns & Exchange</li>
            <li>Custom Plugins & Integrations</li>
            <li>Under 1ms Latency</li>
            <li>Controlled Shipping</li>
            <li>Personalised Storefront Design</li>
          </ul>
          <button>Learn more</button>
        </div>
      </div>

      {/* 2. Blog Articles */}
      <div className="articles-section">
        <h3>Grow your online store. <br />Learn the tips and tricks from experts.</h3>
        <div className="articles">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <img src={article.image} alt={article.title} />
              <span>{article.category}</span>
              <p>{article.title}</p>
            </div>
          ))}
        </div>
        <button className="view-all">View all</button>
      </div>

      {/* 3. CTA Gradient Banner */}
      <div className="cta-banner">
        <div className="cta-content">
          <h2>Start selling online.</h2>
          <p>Take your business online with Dukaan. Get your free online store in 30 seconds.</p>
          <button>Get started</button>
        </div>
      </div>
    </section>
  );
}

export default FinalSection;
