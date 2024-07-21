import React, { useState } from 'react';

const AddScheduleComponent = ({ day, scheduleList, onAddSchedule, onCancel }) => {
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');

  const getAvailableTimes = () => {
    const times = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
    const usedTimes = scheduleList
      .filter(schedule => schedule.Day === day)
      .reduce((acc, schedule) => {
        const start = parseInt(schedule.TimeIn);
        const end = parseInt(schedule.TimeOut);
        for (let i = start; i < end; i++) {
          acc.push(`${i}${i < 12 ? 'am' : 'pm'}`);
        }
        return acc;
      }, []);
    return times.filter(time => !usedTimes.includes(time));
  };

  const handleAdd = () => {
    if (timeIn && timeOut) {
      const newSchedule = {
        ID: Date.now().toString(),
        Day: day,
        TimeIn: timeIn,
        TimeOut: timeOut,
        value: parseInt(timeIn),
        Subject: 'New Subject',
        Teacher: 'TBA',
      };
      onAddSchedule(newSchedule);
    }
  };

  const availableTimes = getAvailableTimes();

  return (
    <div>
      <h2>Add Schedule for {day}</h2>
      <div>
        <label>Time In:</label>
        <select value={timeIn} onChange={(e) => setTimeIn(e.target.value)}>
          <option value="">Select Time In</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Time Out:</label>
        <select value={timeOut} onChange={(e) => setTimeOut(e.target.value)}>
          <option value="">Select Time Out</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AddScheduleComponent;
