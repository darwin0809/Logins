import { useContext } from 'react';
import { UserContext } from "../context/UserProvide";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { user, signOutUser } = useContext(UserContext);

    const handleClicklogOut = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.log("error en cerrar sesión", error.code);
        }
    };

    return (
        <div>
            {
                user ? (
                    <>
                        <NavLink to='/'> - Inicio -</NavLink>
                        <button onClick={handleClicklogOut}> - logout - </button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login"> - login - </NavLink>
                        <NavLink to="/register"> - register - </NavLink>
                    </>
                )
            }
        </div>
    );
};

export default Navbar;


