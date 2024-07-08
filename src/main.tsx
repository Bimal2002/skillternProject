import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './store/store.ts';
import './assets/css/drivschol.css';
// import './assets/vendors/animate/animate.min.css';
// import './assets/vendors/bootstrap/css/bootstrap.min.css';
// import './assets/vendors/bootstrap/js/bootstrap.bundle.min.js';
// import './assets/vendors/bootstrap/css/bootstrap.min.css';

// import './assets/vendors/fontawesome/css/all.min.css';
// import './assets/vendors/owl-carousel/css/owl.carousel.min.css';
// import './assets/vendors/owl-carousel/css/owl.theme.default.min.css';
// import './assets/vendors/owl-carousel/css/owl.carousel.min.css';
// import './assets/vendors/wow/wow.js';








// Create the portal container for notifications
const notificationRoot = document.createElement('div');
notificationRoot.id = 'notification-root';
document.body.appendChild(notificationRoot);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
