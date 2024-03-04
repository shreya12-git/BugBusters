import React from 'react';
import './FeatureCard.css';

const cards = [
  { title: 'Collaborative Team Formation', copy: 'Connect and collaborate with like-minded individuals effortlessly. Build teams for projects, competitions, or simply to share knowledge and expertise' ,buttontext:'More'},
  { title: 'Post Ideas and Projects', copy: 'Share your innovative ideas and projects with the community. Get feedback, suggestions, and even find collaborators to bring your vision to life',buttontext:'More' },
  { title: 'Test Your Skills', copy: 'Put your abilities to the test with our skill verification tests. Assess your proficiency in various domains and showcase your strengths to potential collaborators or employers',buttontext:'More' },
  { title: 'Get Ranked ', copy: 'Compete and compare your skills with others in the community. Earn rankings and badges based on your performance in tests and projects, establishing your reputation within the platform',buttontext:'More'}
];

const Card = ({ title, copy,buttontext }) => {
  return (
    <div className="card">
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>

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
