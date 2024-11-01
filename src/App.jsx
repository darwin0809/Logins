import { useContext } from 'react';
import { UserContext } from './context/UserProvide';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Home from './routes/Home';
import Register from './routes/Register';
import RequireAuth from './components/Requireduth';

function App() {
    const { user } = useContext(UserContext);

    if (user === false) {
        return <p>cargando.........</p>;
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
