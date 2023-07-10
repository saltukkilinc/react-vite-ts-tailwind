import React, { useRef } from 'react'
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type propTypes = {
  value: any,
  onChangeHandler: (naxtVal: any) => void,
  inputRef:  React.MutableRefObject<undefined>
}

const DoubleChosenCalendar = ({value, onChangeHandler, inputRef}: propTypes) => {
  
 
  return (
    <div>
       <div className="p-3 grid place-items-center">
      <Calendar
        onChange={onChangeHandler}
        value={value}
        calendarType="ISO 8601"
        ref={inputRef}
        locale="en-US"
        returnValue="range"
        selectRange
      />
      </div>
      <div className="mt-8 grid grid-cols-2">
        <p className="">
          First Date: {value?.length > 0 && new Date(value[0])?.toLocaleDateString("en-UK")}
        </p>
        <p className="">
          Second Date: {value?.length > 0 && new Date(value[1])?.toLocaleDateString("en-UK")}
        </p>
      </div>
      
    </div>
  )
}

export default DoubleChosenCalendar
