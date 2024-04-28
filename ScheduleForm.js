import React, { useState } from 'react';
import './ScheduleForm.css';

function ScheduleForm({ addScheduleItem }) {
  const [subject, setSubject] = useState('');
  const [classroom, setClassroom] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newScheduleItem = {
      subject,
      classroom,
      day,
      time
    };
    addScheduleItem(newScheduleItem);
    setSubject('');
    setClassroom('');
    setDay('');
    setTime('');
  };

  return (
    <div className="schedule-form">
      <h2>Add Schedule Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Classroom"
          value={classroom}
          onChange={(e) => setClassroom(e.target.value)}
        />
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="">Choose Day</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
        </select>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ScheduleForm;
