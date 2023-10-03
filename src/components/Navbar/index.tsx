import { useAuth0 } from '@auth0/auth0-react';
// COMPONENTS
import { authNavMenus, defaultNavMenus } from './components/NavbarMenu';
import { AuthButton } from './components/NavComponents';
import MobileMenu from './components/MobileMenu';
// STYLES
import './Navbar.scss';

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  const authButtonLogic = isAuthenticated ? 'Logout' : 'Login';

  const navMenuLogic = isAuthenticated ? authNavMenus : defaultNavMenus();

  return (
    <>
      <header className='mainHeader'>
        <nav className='topNavbar'>
          <ul className='navLinks'>
            {navMenuLogic}
            <AuthButton type={authButtonLogic} mobile={false} />
          </ul>
        </nav>
      </header>
      <MobileMenu />
    </>
  );
};

export default Navbar;
