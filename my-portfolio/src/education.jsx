import { useEffect } from 'react';
import './education.css';

function Education() {
  useEffect(() => {
    // Move the intersection observer logic into a useEffect hook
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all course cards
    document.querySelectorAll('.course-card').forEach(card => {
      observer.observe(card);
    });

    // Cleanup function to disconnect the observer when component unmounts
    return () => observer.disconnect();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="App">
      <div className="education-container">
        <div className="education-header">
          <div className="school-logo">School Logo</div>
          <div className="education-info">
            <h1 className="degree">Degree</h1>
            <div className="school-name">School Name</div>
            <div className="desc">Desc of Program</div>
          </div>
          <div className="dates">2020 - 2024</div>
        </div>

        <div className="courseload">
          <div className="course-card">
            <div className="course-image">Course Image</div>
            <div className="course-name">Course Name</div>
            <div className="course-skills">Skills & Technologies</div>
          </div>
          <div className="course-card">
            <div className="course-image">Course Image</div>
            <div className="course-name">Course Name</div>
            <div className="course-skills">Skills & Technologies</div>
          </div>
          <div className="course-card">
            <div className="course-image">Course Image</div>
            <div className="course-name">Course Name</div>
            <div className="course-skills">Skills & Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;