import React, { createContext, useState } from 'react';

export const ShowContext = createContext(null);
const [theme, setTheme] = useState('light');

export const ThemeProvider = ({ children }) => {

  return (
    <ShowContext.Provider value={{ theme, setTheme }}>
      {children}
    </ShowContext.Provider>
  );
};

