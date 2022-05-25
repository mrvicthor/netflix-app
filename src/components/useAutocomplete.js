import { useEffect, useState } from "react";

const useAutoComplete = (value, delay = 1000) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(timeoutRef);
  }, [value]);

  return debounce;
};

export default useAutoComplete;
