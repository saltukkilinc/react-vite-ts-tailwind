import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DoubleChosenCalendar from "./doubleChosenCalendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
  const [value, setValue] = useState<Value>();
  const inputRef = useRef();

  const onChangeHandler = (nextValue: ValuePiece) => {
    //const values = nextValue?.map((item: ValuePiece) => new Date(item as Date).toISOString());
    console.log(nextValue)
    setValue(nextValue);
  };

  

  // console.log(inputRef);

  return (
    <div>
      <h2 className="text-center my-3 barlow-bold">Range Chosen Calendar</h2>
      <DoubleChosenCalendar value={value} onChangeHandler={onChangeHandler} inputRef={inputRef} />
    </div>
  );
};

export default CalendarPage;

// Calendar return date object directly
// Take this toISOString() for string format
// If you want to choose range selection give selectRange
