import React from 'react';
import ScheduleForm from './ScheduleForm';
import ScheduleList from './ScheduleList';
import './HomePage.css'; 

function HomePage({ schedule, addScheduleItem }) {
  const getTodaysSchedule = () => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    return schedule.filter(item => item.day.toLowerCase() === today);
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <ScheduleForm addScheduleItem={addScheduleItem} />
      <h2>Today's Schedule:</h2>
      <ScheduleList schedule={getTodaysSchedule()} />
    </div>
  );
}

export default HomePage;
