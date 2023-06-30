import * as React from 'react';

export const useIsClickOutside = (initialState: boolean) => {
  const ref = React.useRef(null);
  const [isClickOutside, setisClickOutside] = React.useState(initialState);

  const handleClickOutside = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target)) {
      setisClickOutside(true);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isClickOutside, setisClickOutside };
};
