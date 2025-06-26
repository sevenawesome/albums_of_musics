import { Outlet } from 'react-router-dom';
import Footer from '../../../components/common/Footer/Footer.tsx';
import NavBar from '../../../components/feature-specific/NavBar/NavBar.tsx';
import { ICON_CONSTANTS } from '../../constants/icon.constants.ts';

export default function RootLayout() {

  return <>
    <Outlet />
    <Footer>
      <NavBar navLinks={[
        { iconName: ICON_CONSTANTS.homeIcon, label: 'Home', to: '/' },
        { iconName: ICON_CONSTANTS.playListIcon, label: 'PlayList', to: '/user/playLists' },
        { iconName: ICON_CONSTANTS.settingsIcon, label: 'Settings', to: '/settings' },
        { iconName: ICON_CONSTANTS.profileIcon, label: 'Profile', to: '/profile' },
      ]} />
    </Footer>
  </>

}