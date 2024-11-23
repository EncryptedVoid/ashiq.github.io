import { useEffect, useRef } from 'react';
import './goals.css';

function Goals() {
  // Data for goals
  const goals = [
    {
      id: 1,
      type: "learning",
      title: "Learning Roadmap",
      icon: "fas fa-graduation-cap",
      progress: 35,
      timeline: [
        {
          date: "Current - Q2 2024",
          content: "Advanced iOS Development & SwiftUI Mastery",
          isActive: true
        },
        {
          date: "Q3 2024",
          content: "Machine Learning & AI Integration in Mobile Apps",
          isActive: false
        },
        {
          date: "Q4 2024",
          content: "Advanced System Design & Architecture",
          isActive: false
        }
      ]
    },
    {
      id: 2,
      type: "certifications",
      title: "Upcoming Certifications",
      icon: "fas fa-certificate",
      progress: 25,
      timeline: [
        {
          date: "March 2024",
          content: "AWS Solutions Architect Professional",
          isActive: true
        },
        {
          date: "June 2024",
          content: "Google Cloud Professional Architect",
          isActive: false
        },
        {
          date: "September 2024",
          content: "Apple Certified iOS Developer",
          isActive: false
        }
      ]
    },
    {
      id: 3,
      type: "projects",
      title: "Project Pipeline",
      icon: "fas fa-rocket",
      progress: 45,
      timeline: [
        {
          date: "Q1-Q2 2024",
          content: "AI-Powered Personal Assistant App",
          isActive: true
        },
        {
          date: "Q3 2024",
          content: "Cross-Platform Design System",
          isActive: false
        },
        {
          date: "Q4 2024",
          content: "Open Source Component Library",
          isActive: false
        }
      ]
    },
    {
      id: 4,
      type: "career",
      title: "Career Objectives",
      icon: "fas fa-chart-line",
      progress: 20,
      timeline: [
        {
          date: "2024",
          content: "Lead Design System Architecture",
          isActive: true
        },
        {
          date: "2025",
          content: "Senior Technical Leadership Role",
          isActive: false
        },
        {
          date: "2026",
          content: "Principal Design Engineer",
          isActive: false
        }
      ]
    }
  ];

  // Timeline Item Component
  const TimelineItem = ({ item }) => (
    <div className={`timeline-item ${item.isActive ? 'active' : ''}`}>
      <div className="timeline-date">{item.date}</div>
      <div className="timeline-content">{item.content}</div>
    </div>
  );

  // Goal Card Component
  const GoalCard = ({ goal }) => {
    const cardRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
            }
          });
        },
        { threshold: 0.1 }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div ref={cardRef} className={`goal-card ${goal.type}`}>
        <div className="goal-header">
          <div className="goal-icon">
            <i className={goal.icon}></i>
          </div>
          <h2 className="goal-title">{goal.title}</h2>
        </div>
        <div className="timeline">
          {goal.timeline.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${goal.progress}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <section className="goals-section">
        <div className="section-header">
          <h1 className="header-title">Long-term Professional Goals</h1>
          <p className="header-subtitle">
            Charting the path forward with clear objectives and milestones
          </p>
        </div>

        <div className="goals-grid">
          {goals.map(goal => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Goals;