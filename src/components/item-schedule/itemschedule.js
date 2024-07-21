import React, { useState } from 'react';

const ItemSchedule = ({ id, timeIn, timeOut, subject, teacher, index, onDelete }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className='item_schedule'>
      <div className='item_number'>
        {index}.
      </div>
      
      <div className='item_details'>
        <p className='time'>
          {timeIn} - {timeOut}
        </p>
        
        <h1 className='subject'>
          {subject}
        </h1>
        
        <p className='teacher'>
          {teacher}
        </p>
      </div>
      
      <div className="three-dots-menu" onClick={toggleTooltip}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      {isTooltipVisible && (
        <div className='item_tooltip'>
          <button onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
      
      <div></div>
    </div>
  );
};

export default ItemSchedule;
