// Стили
import './index.scss';

// Базовые настройки React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Базовые настройки Redux без toolkit
import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';

// Компоненты
import App from './App';
import { Provider } from 'react-redux';

// Создание хранилища с доступом к расширению для просмотра состояния хранилища
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

