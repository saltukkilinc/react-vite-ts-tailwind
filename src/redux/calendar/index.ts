import { createModel } from "@rematch/core";
import { RootModel } from "../store";

type CalendarTypes = {
  departDate: string;
  returnDate: string;
}

const calendar = createModel<RootModel>()({
  state: {
    departDate: "Depart Date",
    returnDate: "Return Date"
  } as CalendarTypes,

  reducers: {
    setDepartDate: (state, departDate) => ({
      ...state,
      departDate
    }),
    setReturnDate: (state, returnDate) => ({
      ...state,
      returnDate
    })
  },

  // effects: dispatch => {
  //   return {
  //     // here async functions
  //   }
  // }

})


export default calendar;