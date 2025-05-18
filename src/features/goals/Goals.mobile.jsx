// src/features/goals/Goals.mobile.jsx
import React from 'react';
import { motion } from 'framer-motion';
import GoalCard from './components/GoalCard.mobile';

const GoalsMobile = ({ goals = [] }) => {
  return (
    <div className="relative overflow-hidden py-12">
      {/* Background pattern - simplified for mobile */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 15px 15px, rgba(250, 140, 140, 0.15) 1.5px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="px-5">
        {/* Section header */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-rose-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Future Aspirations
          </h2>
          <p className="text-sm text-white/60 max-w-xs mx-auto">
            A roadmap of goals and milestones
          </p>
        </motion.div>

        {/* Goals stack */}
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <GoalCard
              key={index}
              goal={goal}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsMobile;