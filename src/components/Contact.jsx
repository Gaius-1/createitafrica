import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact">
      <div className="contact-inner">
        {/* Contact Header */}
        <div className="contact-header">
          <h2>Let's Create Together</h2>
          <p>Ready to bring your vision to life? Get in touch and let's discuss your next project.</p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <span>📧</span>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>hello@createitafrica.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <span>📱</span>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+254 700 000 000</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <span>📍</span>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <span>🌐</span>
              </div>
              <div className="contact-details">
                <h4>Social Media</h4>
                <div className="social-links">
                  <a href="#" aria-label="Instagram">Instagram</a>
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="Twitter">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="photography">Photography</option>
                  <option value="videography">Videography</option>
                  <option value="media-production">Media Production</option>
                  <option value="advertising">Advertising</option>
                  <option value="consultancy">Creative Consultancy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>Send Message</span>
                <div className="btn-icon">
                  <span>→</span>
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="contact-footer">
          <h3>Why Choose CreateitAfrica?</h3>
          <div className="contact-features">
            <div className="contact-feature">
              <span className="feature-icon">🎯</span>
              <p>Authentic African storytelling with global appeal</p>
            </div>
            <div className="contact-feature">
              <span className="feature-icon">⚡</span>
              <p>Fast turnaround without compromising quality</p>
            </div>
            <div className="contact-feature">
              <span className="feature-icon">🤝</span>
              <p>Collaborative approach to bring your vision to life</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;