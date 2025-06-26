
//const apiUrl = import.meta.env.VITE_API_BASE_URL;
//const debug = import.meta.env.VITE_DEBUG === 'true';

//const assetsUrl = import.meta.env.VITE_ASSETS_BASE_URL || 'https://assets.example.com';

import { RouterProvider } from 'react-router-dom';
import router from './features/routes/AppRoutes.tsx';
import { Provider } from 'react-redux';
import store from './features/redux/store/index.ts';

export default function App() {
  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
}
