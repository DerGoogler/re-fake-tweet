import { useEffect, useState } from 'react';

function useDisplay(rawDisplay: any) {
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    // @ts-ignore
    const validDisplay = ['default', 'dim', 'lightsout'].includes(rawDisplay);
    setDisplay(validDisplay ? rawDisplay : 'default');
  }, [rawDisplay]);
  return display;
}

export default useDisplay;
