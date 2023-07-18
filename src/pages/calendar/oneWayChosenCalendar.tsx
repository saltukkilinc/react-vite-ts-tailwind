import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useAppDispatch } from '../../redux/store';

type CalendarProptypes = {
  val: string;
  setVal: any;
  minDate?: string;
}
const OneWayChosenCalendar = ({val, setVal, minDate}: CalendarProptypes) => {
  
  const today = new Date();
  return (
    <div>
      <Calendar
        onChange={(val) => setVal(val?.toString())}
        value={val == 'Return Date' || val == 'Depart Date' ? today : new Date(val)}
        calendarType="ISO 8601"
        locale="en-US"
        minDate={minDate ? new Date(minDate) : today}
      />    
    </div>
  )
}

export default OneWayChosenCalendar
