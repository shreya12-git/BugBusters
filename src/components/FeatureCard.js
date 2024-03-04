import React from 'react';
import './FeatureCard.css';

const cards = [
  { title: 'Preventive Healthcare', copy: 'Ayurveda emphasizes preventive measures to maintain health and prevent diseases. This includes adhering to seasonal routines (Ritucharya), detoxification processes (Panchakarma), and dietary guidelines tailored to individual constitutions (Prakriti)' ,buttontext:'More'},
  { title: 'Stress Management', copy: 'Ayurveda places significant importance on mental health. Techniques such as meditation, yoga, and specific herbs are recommended to manage stress, anxiety, and promote mental clarity',buttontext:'More' },
  { title: 'Digestive Health', copy: 'Ayurveda considers digestion a crucial factor in overall health. It provides dietary recommendations and herbal remedies to improve digestion, address issues such as indigestion, bloating, and optimize nutrient absorption',buttontext:'More' },
  { title: 'Chronic Disease ', copy: 'Ayurveda is often used as a complementary approach in managing chronic diseases such as diabetes, arthritis, and cardiovascular conditions. It focuses on lifestyle modifications, diet, and herbal remedies to support conventional medical treatments',buttontext:'More'}
];

const Card = ({ title, copy,buttontext }) => {
  return (
    <div className="card">
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <button style={{background:"black", width:"100px", height:"42px" }}  onMouseOver={e => e.currentTarget.style.backgroundColor = "gray"}
  onMouseLeave={e => e.currentTarget.style.backgroundColor = "black"}>{buttontext}</button>
      </div>
    </div>
  );
};

const AppCard = () => (
  <main className="page-content">
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </main>
);

export default AppCard;
