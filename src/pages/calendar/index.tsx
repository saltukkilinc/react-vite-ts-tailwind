import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
  const [value, setValue] = useState<Value | any>();
  const inputRef = useRef();

  const onChangeHandler = (nextValue: any) => {
    // const values = nextValue?.map((item: ValuePiece) => new Date(item as Date).toISOString());
    setValue(nextValue);
  };

  

  // console.log(inputRef);

  return (
    <>
      <div className="p-3 grid place-items-center">
      <Calendar
        onChange={onChangeHandler}
        value={value as any}
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
    </>
  );
};

export default CalendarPage;

// Calendar return date object directly
// Take this toISOString() for string format
// If you want to choose range selection give selectRange
