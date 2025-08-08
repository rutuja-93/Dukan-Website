
import React from 'react';
import ThemeCard from './ThemeCard';
import './Themes.css';

const themes = [
  {
    title: 'Tinker',
    image: 'https://mydukaan.io/_next/static/images/tinker-0b59397a813a30dccbf17d9278372824.webp',
  },
  {
    title: 'Ursa',
    image: 'https://mydukaan.io/_next/static/images/ursa-047137008aa0cf119dc1a54047b7fd87.png',
  },
  {
    title: 'Enigma',
    image: 'https://mydukaan.io/_next/static/images/enigma-b98c9aff293be1a8103e3f5bf15682e7.png',
  },
  {
    title: 'Mana',
    image: 'https://mydukaan.io/_next/static/images/mana-3d58c03ccebc3fb7ccd5e1035aca044c.webp',
  },
  {
    title: 'Nirvana',
    image: 'https://mydukaan.io/_next/static/images/nirvana-0d20aed96a17d45b4de7df85875d5731.webp',
  },
  {
    title: 'Oxford',
    image: 'https://mydukaan.io/_next/static/images/oxford-3d6756d13f284e6d6205f8c607355ca0.webp',
  },
];

function Themes() {
  return (
    <section className="themes-section">
      <h2>Kickstart your online store with these themes</h2>
      <div className="themes-grid">
        {themes.map((theme, index) => (
          <ThemeCard key={index} title={theme.title} image={theme.image} />
        ))}
      </div>
      <button className="view-all">View all</button>
    </section>
  );
}

export default Themes;
