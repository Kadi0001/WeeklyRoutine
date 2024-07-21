import React from 'react';
import Schedulescomponent from './Schedulescomponent.js';

const ScheduleContainer = ({ selectedDay, scheduleList, onDelete }) => {
  return (
    <div className='schedule_container'>
      <h1>{selectedDay}</h1>
      <p>Hope you have an amazing day!</p>
      
      <div className='schedule_list_container'>
        <Schedulescomponent 
          selectedDay={selectedDay} 
          scheduleList={scheduleList} 
          onDelete={onDelete} 
        />
      </div>
    </div>
  );
}

export default ScheduleContainer;
