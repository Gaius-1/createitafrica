import React from 'react';
import Button from './Button';

const PricingCards = () => {
  const pricingPlans = [
    {
      name: 'Bronze',
      price: 'GHC 5,000',
      period: 'Same day event',
      description: 'Perfect for intimate wedding and engagement celebrations with professional coverage.',
      features: [
        'Wedding and engagement coverage',
        'Videography and photography',
        '200 pics (10 retouched pictures)',
        'Access to raw files (400 pics min)',
        '5mins trailer video for each',
        '30mins consultation'
      ],
      popular: false
    },
    {
      name: 'Gold',
      price: 'GHC 7,000',
      period: 'Two days event',
      description: 'Comprehensive coverage for wedding and engagement with extended storytelling.',
      features: [
        'Wedding and engagement coverage',
        'Videography and photography',
        '400 pics (15 retouched pictures)',
        'Access to raw files (600 pics min)',
        '2mins trailer video for each',
        '45mins full video for each',
        '30mins consultation',
        'Photobook included'
      ],
      popular: true
    },
    {
      name: 'Platinum',
      price: 'GHC 9,000',
      period: 'Two days event',
      description: 'Premium wedding and engagement package with complete social media coverage.',
      features: [
        'Wedding and engagement coverage',
        'Videography and photography',
        '400 pics (15 retouched pictures)',
        'Access to raw files (600 pics min)',
        '3mins trailer video for each',
        '1hour full video for each',
        '30mins consultation',
        'Edited phone reels for social media',
        '1 photobook included'
      ],
      popular: false
    }
  ];

  return (
    <section className="pricing">
      <div className="pricing-inner">
        <div className="pricing-header">
          <h2>Wedding & Engagement Packages</h2>
          <p>Capture your special moments with authentic African storytelling through professional photography and videography services.</p>
        </div>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}>
              {plan.popular && (
                <div className="pricing-badge">
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <div className="pricing-amount">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>
              
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="pricing-cta">
                <Button label="Book Session" icon="arrow-forward-sharp" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;