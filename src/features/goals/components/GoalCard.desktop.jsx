import { useEffect, useRef } from 'react';
import { TimelineItem } from '@/features/goals/components';
import { gradientStyles } from '@/styles';

const GoalCard = ({ goal }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
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
    <div
      ref={cardRef}
      className={`
        relative
        bg-white/[0.03] hover:bg-white/[0.06]
        backdrop-blur-xl
        border border-white/[0.06]
        rounded-2xl p-10
        opacity-0 translate-y-10
        transition-all duration-700 ease-out
        hover:-translate-y-3 hover:scale-[1.02]
        hover:shadow-xl hover:shadow-purple-500/10
        cursor-pointer
        overflow-hidden
      `}
    >
      {/* Gradient Background */}
      <div className={`
        absolute inset-0 opacity-0 transition-opacity duration-700
        bg-gradient-to-br ${gradientStyles[goal.type]}
        group-hover:opacity-[0.05]
      `} />

      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className={`
          w-12 h-12
          rounded-xl
          bg-gradient-to-br ${gradientStyles[goal.type]}
          flex items-center justify-center
          shadow-lg shadow-purple-500/20
          transition-transform duration-700
          hover:scale-110 hover:-rotate-3
        `}>
          <i className={`${goal.icon} text-white text-xl`} />
        </div>
        <h2 className="text-2xl font-bold text-white">
          {goal.title}
        </h2>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {goal.timeline.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${gradientStyles[goal.type]}
          transition-all duration-1000 ease-out`}
          style={{ width: `${goal.progress}%` }}
        />
      </div>
    </div>
  );
};

export default GoalCard;