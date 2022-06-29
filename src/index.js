import React from 'react';
import App from './App';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { render } from '@testing-library/react';

render(<><GlobalStyles/><App/></>,document.getElementById('root'));
