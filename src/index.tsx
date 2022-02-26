import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer } from 'miragejs';

import bicepCurls from "./assets/bicep-curls.png";
import tricepPulldown from "./assets/tricep-pulldown.png";

createServer({
  routes() {
    this.get('/api/exercises', () => ({
      exercises: [
        {
          src: bicepCurls,
          alt: 'bicep-curls',
          name: 'Bicep Curls',
          type: 'ARMS',
        },
        {
          src: tricepPulldown,
          alt: 'tricep-pulldown',
          name: 'Tricep Pulldown',
          type: 'ARMS',
        },
        {
          src: bicepCurls,
          alt: 'bicep-curls',
          name: 'Bicep Curls',
          type: 'ARMS',
        },
        {
          src: tricepPulldown,
          alt: 'tricep-pulldown',
          name: 'Tricep Pulldown',
          type: 'ARMS',
        },
        {
          src: tricepPulldown,
          alt: 'tricep-pulldown',
          name: 'Tricep Pulldown',
          type: 'ARMS',
        },
        {
          src: bicepCurls,
          alt: 'bicep-curls',
          name: 'Bicep Curls',
          type: 'ARMS',
        },
        {
          src: bicepCurls,
          alt: 'bicep-curls',
          name: 'Bicep Curls',
          type: 'ARMS',
        },
        {
          src: tricepPulldown,
          alt: 'tricep-pulldown',
          name: 'Tricep Pulldown',
          type: 'ARMS',
        },
        {
          src: bicepCurls,
          alt: 'bicep-curls',
          name: 'Bicep Curls',
          type: 'ARMS',
        },
        {
          src: tricepPulldown,
          alt: 'tricep-pulldown',
          name: 'Tricep Pulldown',
          type: 'ARMS',
        },
        {
          src: tricepPulldown,
          alt: 'tricep-pulldown',
          name: 'Tricep Pulldown',
          type: 'ARMS',
        },
        {
          src: bicepCurls,
          alt: 'bicep-curls',
          name: 'Bicep Curls',
          type: 'ARMS',
        },
      ],
    }));
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);