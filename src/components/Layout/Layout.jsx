import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='Layout'>
      <header>
        <>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/posts'>Posts</NavLink>
            </li>
            <li>
              <NavLink to='/contacts'>Contacts</NavLink>
            </li>
          </ul>
        </>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};
