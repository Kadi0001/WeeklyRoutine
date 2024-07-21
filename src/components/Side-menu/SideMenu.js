import React from 'react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DayButtons = ({ days, selectedDay, onDayClick }) => {
  return (
    <div>
      {days.map(day => (
        <button
          key={day}
          className={`menu-item ${selectedDay === day ? 'selected' : ''}`}
          onClick={() => onDayClick(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

const SideMenu = ({ isOpen, toggleMenu, selectedDay, onDayClick }) => {
  return (
    <div className="menu-container">
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <DayButtons days={daysOfWeek} selectedDay={selectedDay} onDayClick={onDayClick} />
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default SideMenu;
