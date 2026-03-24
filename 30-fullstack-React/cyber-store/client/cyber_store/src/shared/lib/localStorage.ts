import { useEffect, useState } from "react";

export const useLocalStorege = (key: string, initialValue: []) => {
  const [valueLocStor, setValueLocStor] = useState(() => {
    const store = localStorage.getItem(key);
    return store ? JSON.parse(store) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valueLocStor));
  }, [key, valueLocStor]);

  return [valueLocStor, setValueLocStor];
};
