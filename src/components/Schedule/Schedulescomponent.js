import React, { useState } from 'react';
import ItemSchedule from '../item-schedule/ItemSchedule.js';
 // Ensure this import is not commented out

const SchedulesComponent = ({ selectedDay, scheduleList, onDelete }) => {
  const filteredSchedules = scheduleList
    .filter(schedule => schedule.Day === selectedDay)
    .sort((a, b) => a.value - b.value);

  return (
    <div>
      {filteredSchedules.map((schedule, index) => (
        <ItemSchedule
          key={schedule.ID}
          id={schedule.ID}
          timeIn={schedule.TimeIn}
          timeOut={schedule.TimeOut}
          subject={schedule.Subject}
          teacher={schedule.Teacher}
          index={index + 1}
          onDelete={onDelete}
        />
      ))}
      

    </div>
  );
};

export default SchedulesComponent;
