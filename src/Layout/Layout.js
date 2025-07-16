import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const getActive = ({ isActive }) => (isActive ? "active-myclass" : "");

  return (
    <>
      <header>
        <NavLink className={getActive} to="/">
          Home
        </NavLink>
        <NavLink className={getActive} to="/about">
          About
        </NavLink>
        <NavLink className={getActive} to="/contact">
          Contact
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>All right ... 2025</p>
      </footer>
    </>
  );
};

export default Layout;
