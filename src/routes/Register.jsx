import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvide';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { registerUser } = useContext(UserContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = async ({ email, password }) => {
        try {
            await registerUser(email, password);
            // Navegar después de registrar
            navigate('/'); // Ajusta la ruta según lo que necesites
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div>Register</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="email" 
                    placeholder='email'
                    {...register("email", {
                        required: {
                            value: true,
                            message: "El campo es obligatorio"
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Formato de email incorrecto"
                        }
                    })} 
                />
                {errors.email && <p>{errors.email.message}</p>}
                
                <input 
                    type="password" 
                    placeholder='password'
                    {...register("password", {
                        required: {
                            value: true,
                            message: "La contraseña es obligatoria"
                        },
                        minLength: {
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres"
                        }
                    })} 
                />
                {errors.password && <p>{errors.password.message}</p>}
                
                <input 
                    type="password" 
                    placeholder='confirm password'
                    {...register("password2", {
                        required: "La contraseña es obligatoria",
                        validate: {
                            equals: (value) => value === getValues("password") || "Las contraseñas no coinciden"
                        }
                    })} 
                />
                {errors.password2 && <p>{errors.password2.message}</p>}
                
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default Register;
