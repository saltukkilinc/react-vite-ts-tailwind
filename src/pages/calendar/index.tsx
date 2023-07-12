import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DoubleChosenCalendar from "./doubleChosenCalendar";
import OneWayChosenCalendar from "./oneWayChosenCalendar";
import { useAppDispatch, useAppSelector } from "../../redux/store";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef();
  const [value, setValue] = useState<Value>();
  const { departDate, returnDate } = useAppSelector((state) => state.calendar);
  const today = new Date();

  const onChangeHandler = (nextValue: ValuePiece) => {
    //const values = nextValue?.map((item: ValuePiece) => new Date(item as Date).toISOString());
    setValue(nextValue);
  };

  // console.log(inputRef);

  return (
    <section>
      <article className="mb-4">
        <h2 className="text-center my-3 barlow-bold">Range Chosen Calendar</h2>
        <DoubleChosenCalendar
          value={value}
          onChangeHandler={onChangeHandler}
          inputRef={inputRef}
        />
      </article>
      <article className="my-12 px-3 grid grid-cols-2 gap-y-3">
        <h2 className="text-center my-3 barlow-bold col-start-1 col-end-3">
          One Way Calendar
        </h2>
        <OneWayChosenCalendar
          val={departDate}
          setVal={dispatch.calendar.setDepartDate}
        />
        <OneWayChosenCalendar
          val={returnDate}
          setVal={dispatch.calendar.setReturnDate}
        />
        <p>
          First Date:{" "}
          {departDate == "Depart Date"
            ? today.toLocaleDateString()
            : new Date(departDate).toLocaleDateString()}
        </p>
        <p>
          Second Date:{" "}
          {returnDate == "Return Date"
            ? today.toLocaleDateString()
            : new Date(returnDate).toLocaleDateString()}
        </p>
      </article>
    </section>
  );
};

export default CalendarPage;

// Calendar return date object directly
// Take this toISOString() for string format
// If you want to choose range selection give selectRange
