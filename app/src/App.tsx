import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import HomeNewsGrid from './components/HomeNewsGrid/HomeNewsGrid';
import {ThemeProvider} from './ui/theme/ThemeProvider';
import {buildTheme} from './ui/theme/theme';
import {store} from './state/store';

const theme = {
  ...buildTheme(),
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App"></div>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
