import React from 'react';

const MealPlanner = ({ onPlanMeal }) => {
  return (
    <div>
      <h3>Plan Your Meals for the Week</h3>
      <button onClick={() => onPlanMeal('Monday')}>Plan for Monday</button>
      <button onClick={() => onPlanMeal('Tuesday')}>Plan for Tuesday</button>
    </div>
  );
};

export default MealPlanner;
