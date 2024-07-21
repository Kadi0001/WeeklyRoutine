import React, { useState } from 'react';
import SideMenu from './Side-menu/SideMenu';
import ScheduleContainer from './Schedule/ScheduleContainer';
import scheduledList from '../Schedules.js';
import Modal from './modal/Modal.js';
import AddScheduleComponent from './AddSchedule/AddScheduleComponent.js';




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [scheduleList, setScheduleList] = useState(scheduledList); // Update to camelCase
  const [showModal, setShowModal] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    toggleMenu();
  };

  const deleteSchedule = (id) => {
    const updatedList = scheduleList.filter(schedule => schedule.ID !== id); // Use updated state name
    setScheduleList(updatedList); // Use updated state name
  };
  const addSchedule = (newSchedule) => {
    setScheduleList([...scheduleList, newSchedule]);
    setShowModal(false);
  };
  
  
  return (
    <div className="App">
      <div>
        <button className={`menu-button ${isOpen ? 'absolute' : ''}`} onClick={toggleMenu}>
          {isOpen ? '×' : '☰'}
        </button>
      </div>
      
      <SideMenu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        selectedDay={selectedDay}
        onDayClick={handleDayClick}
      />
      
      <ScheduleContainer scheduleList={scheduleList} selectedDay={selectedDay} onDelete={deleteSchedule} /> {/* Use updated prop name */}
      
    
      <button className='Add_btn' onClick={() => setShowModal(true)}>
        +
      </button>
     <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddScheduleComponent
          day={selectedDay}
          scheduleList={scheduleList}
          onAddSchedule={addSchedule}
          onCancel={() => setShowModal(false)}
        />
      </Modal>
    </div>
  );
}

export default App;
