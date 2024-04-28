import React from 'react';
import SubjectItem from './SubjectItem';

function ScheduleList({ schedule }) {
  return (
    <div>
      {schedule.length === 0 ? (
        <p>No schedule items for this day.</p>
      ) : (
        <ul style={{ paddingLeft: 0 }}>
          {schedule.map((item, index) => (
            <SubjectItem
              key={index}
              subject={item.subject}
              classroom={item.classroom}
              time={item.time}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ScheduleList;
