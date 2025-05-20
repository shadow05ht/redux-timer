import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalSeconds: 0,
  timeLeft: 0,
  running: false,
  history: [],
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimer: (state, action) => {
      state.totalSeconds = action.payload;
      state.timeLeft = action.payload;
    },
    startTimer: (state) => {
      state.running = true;
    },
    stopTimer: (state) => {
      state.running = false;
    },
    tickTimer: (state) => {
      if (state.running && state.timeLeft > 0) {
        state.timeLeft -= 1;
      }
    },
    recordTime: (state) => {
      if (state.timeLeft > 0) state.history.push(state.timeLeft);
    },
    clearTimer: (state) => {
      state.totalSeconds = 0;
      state.timeLeft = 0;
      state.running = false;
      state.history = [];
    },
  },
});

export const { setTimer, startTimer, stopTimer, tickTimer, recordTime, clearTimer } = timerSlice.actions;
export default timerSlice.reducer;