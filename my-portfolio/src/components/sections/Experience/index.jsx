import './experience.css';
import { useState } from 'react';

function Experience() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateSlide = (direction) => {
    if (direction === 'prev') {
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    } else {
      setCurrentSlide(prev => Math.min(prev + 1, testimonials.length - 1));
    }
  };

  // Example testimonials data
  const testimonials = [
    {
      initials: "SC",
      text: "Outstanding leadership in driving our core infrastructure modernization. Their technical expertise and ability to mentor team members has been invaluable.",
      author: "Sarah Chen",
      role: "Engineering Manager"
    },
    {
        initials: "SC",
        text: "Outstanding leadership in driving our core infrastructure modernization. Their technical expertise and ability to mentor team members has been invaluable.",
        author: "Sarah Chen",
        role: "Engineering Manager"
      },
      {
        initials: "SC",
        text: "Outstanding leadership in driving our core infrastructure modernization. Their technical expertise and ability to mentor team members has been invaluable.",
        author: "Sarah Chen",
        role: "Engineering Manager"
      },
      {
        initials: "SC",
        text: "Outstanding leadership in driving our core infrastructure modernization. Their technical expertise and ability to mentor team members has been invaluable.",
        author: "Sarah Chen",
        role: "Engineering Manager"
      }
    // Add more testimonials here
  ];

  return (
    <section className="experience-section">
      <div className="company-header">
        <div className="company-logo">LOGO</div>
        <div className="company-info">
          <h1 className="role-title">Senior Software Engineer</h1>
          <div className="company-meta">
            <div className="company-name">Company Name</div>
            <div className="role-duration">Jan 2020 - Present • 4 years</div>
          </div>
          <div className="skills-container">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Docker</span>
          </div>
        </div>
      </div>

      <h2 className="section-header">MILESTONES & ACHIEVEMENTS</h2>
      <div className="accomplishments">
        <div className="stat-card">
          <div className="stat-number">300%</div>
          <div className="stat-desc">Performance Improvement</div>
          <div className="stat-detail">
            Optimized core application performance leading to 300% improvement in response times
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-number">300%</div>
          <div className="stat-desc">Performance Improvement</div>
          <div className="stat-detail">
            Optimized core application performance leading to 300% improvement in response times
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-number">300%</div>
          <div className="stat-desc">Performance Improvement</div>
          <div className="stat-detail">
            Optimized core application performance leading to 300% improvement in response times
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-number">300%</div>
          <div className="stat-desc">Performance Improvement</div>
          <div className="stat-detail">
            Optimized core application performance leading to 300% improvement in response times
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-number">300%</div>
          <div className="stat-desc">Performance Improvement</div>
          <div className="stat-detail">
            Optimized core application performance leading to 300% improvement in response times
          </div>
        </div>
        {/* Other stat cards... */}
      </div>

      {/* <div className="case-study-section">
        <div className="testimonials-wrapper">
          <h2 className="section-header">TEAM TESTIMONIALS</h2>
          <div className="testimonials">
            <button
              className="nav-button nav-prev"
              onClick={() => updateSlide('prev')}
            >
              <i className="fas fa-chevron-left" />
            </button>
            <button
              className="nav-button nav-next"
              onClick={() => updateSlide('next')}
            >
              <i className="fas fa-chevron-right" />
            </button>

            <div
              className="testimonials-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="reviewer-image">{testimonial.initials}</div>
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">{testimonial.author}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="case-study-button"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="case-study-icon" />
          <span>VIEW CASE STUDY</span>
        </button>
      </div> */}

      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div className="modal-content">
            <h2>CASE STUDY: PROJECT NAME</h2>
            {/* Add case study content */}
            <button
              className="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;