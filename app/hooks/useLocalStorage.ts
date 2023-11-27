// useLocalStorage.ts
"use client";
import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const [state, setState] = useState(() => {
    try {
      // Check if window is defined before accessing localStorage
      const value =
        typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      // Check if window is defined before accessing localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(state));
      }
    } catch (error) {
      console.log(error);
    }
  }, [key, state]);

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      // Check if window is defined before accessing localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setState(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
