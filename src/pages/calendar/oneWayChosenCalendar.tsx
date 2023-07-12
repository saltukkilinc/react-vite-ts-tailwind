import React, { useState } from 'react'
import Calendar from 'react-calendar'

const OneWayChosenCalendar = () => {
  const today = new Date()
 const [value, setValue] = useState(today);
 const onChangeHandler = (value_: Date) => {
  setValue(value_)
 }
  return (
    <div>
      <Calendar
        onChange={(val) => onChangeHandler(val as Date)}
        value={value}
        calendarType="ISO 8601"
        locale="en-US"
      />    
    </div>
  )
}

export default OneWayChosenCalendar
