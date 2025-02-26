import { GoalCard } from '@/features/goals/components';
import { GoalsData } from '@/data';

export const GoalsDesktop = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {GoalsData.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </section>
  );
};

export default GoalsDesktop;