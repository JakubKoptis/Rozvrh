import React from 'react';
import { useParams } from 'react-router-dom';
import ScheduleList from './ScheduleList';
import './DayView.css'; 

function DayView({ schedule }) {
  const { day } = useParams();

  const filteredSchedule = schedule.filter(item => item.day.toLowerCase() === day.toLowerCase());

  return (
    <div className="day-view">
      <h1>{day}'s Schedule:</h1>
      <ScheduleList schedule={filteredSchedule} />
    </div>
  );
}

export default DayView;
