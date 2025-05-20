import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 0,
  laps: [],
  running: false,
};

const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    start: (state) => {
      state.running = true;
    },
    pause: (state) => {
      state.running = false;
    },
    reset: (state) => {
      state.time = 0;
      state.laps = [];
      state.running = false;
    },
    tick: (state) => {
      if (state.running) state.time += 1;
    },
    addLap: (state) => {
      state.laps.push(state.time);
    },
  },
});

export const { start, pause, reset, tick, addLap } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;
