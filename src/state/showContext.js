import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggle = ({ target }) => {
    if(target.checked) setTheme(() => 'dark');
    else setTheme(() => 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  const { setTheme } = useContext(ThemeContext);
  const { toggle } = useContext(ThemeContext);
  return { theme, setTheme, toggle };
};
