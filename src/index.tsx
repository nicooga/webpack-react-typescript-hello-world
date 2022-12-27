import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const container = document.getElementById('react-root')

if (container === null)
  throw new Error("Missing react app mount point")

ReactDOM.render(<App></App>, container)
