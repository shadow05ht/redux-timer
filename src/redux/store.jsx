import { configureStore } from "@reduxjs/toolkit";
import stopwatchReducer from "./stopwatchSlice";
import timerReducer from "./timerSlice";

const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
    timer: timerReducer,
  },
});

export default store;