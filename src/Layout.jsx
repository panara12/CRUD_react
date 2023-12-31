import {Outlet} from 'react-router-dom'
import Header from './data/Header';
import Fotter from './data/Fotter';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Fotter />
        </>
    );
}
export default Layout