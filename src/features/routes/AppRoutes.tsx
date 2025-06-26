import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/Layouts/RootLayout.tsx';
import HomePage from '../pages/HomePage/HomePage.tsx';
import AlbumsPage from '../pages/AlbumsPage/AlbumsPage.tsx';
import PlayListPage from '../pages/PlayListPage/PlayListPage.tsx';
import SettingsPage from '../pages/SettingsPage/SettingsPage.tsx';
import ProfilePage from '../pages/ProfilePage/ProfilePage .tsx';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/album/:albumId', element: <AlbumsPage /> },
            { path: '/user/playLists', element: <PlayListPage /> },
            { path: '/settings', element: <SettingsPage /> },
            { path: '/profile', element: <ProfilePage /> },
        ]
    }

]);

export default routes;