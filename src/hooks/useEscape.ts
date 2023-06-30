import * as React from 'react';

export const useEscape = () => {
  const [isEscapeEvent, setIsEscapeEvent] = React.useState<boolean>(false);

  const onEscape = React.useCallback(
    (event: KeyboardEvent) => {
      console.log(event.key);
      //const isEscape: boolean = event.key === 'Escape';
    },
    [isEscapeEvent, setIsEscapeEvent]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('keydown', onEscape);
    };
  }, [onEscape]);

  return {
    isEscapeEvent,
    setIsEscapeEvent,
  };
};
