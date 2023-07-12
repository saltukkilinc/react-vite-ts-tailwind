import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useAppDispatch } from '../../redux/store';

type CalendarProptypes = {
  val: string;
  setVal: any
}
const OneWayChosenCalendar = ({val, setVal}: CalendarProptypes) => {
  
  const today = new Date();
  return (
    <div>
      <Calendar
        onChange={(val) => setVal(val?.toString())}
        value={val == 'Return Date' || val == 'Depart Date' ? today : new Date(val)}
        calendarType="ISO 8601"
        locale="en-US"
      />    
    </div>
  )
}

export default OneWayChosenCalendar
