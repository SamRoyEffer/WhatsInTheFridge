import { useState } from "react";

export const EMPTY = "EMPTY";
export const SHOW = "SHOW";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setHistory(replace ? (prev) => prev : (prev) => [...prev, newMode]);
    setMode(newMode);
  }

  function back() {
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory((prev) => [...prev].slice(0, -1));
    } else {
      setMode(initial);
      setHistory(initial);
    }
  }
  return { mode, transition, back };
}
