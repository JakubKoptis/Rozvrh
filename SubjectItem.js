import React from 'react';
import './SubjectItem.css';

function SubjectItem({ subject, classroom, time }) {
  return (
    <li className="subject-item">
      <div>
        <p><strong>Subject:</strong> {subject}</p>
        <p><strong>Classroom:</strong> {classroom}</p>
        <p><strong>Time:</strong> {time}</p>
      </div>
    </li>
  );
}

export default SubjectItem;
