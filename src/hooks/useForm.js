import { useState } from 'react';

//Custom Hook que se va a encargar de manejar la lógica de los formularios
export const useForm = (initialState = {}) => {

    //En el initialState recibiríamos el valor de 
    // los input del formulario (name, email, password)
    const [values, setValues] = useState(initialState);

    //reset para resetear el formulario
    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    //retornamos un arreglo (también puede ser una string, objeto, etc)
    return [values, handleInputChange, reset];
    // 1er valor= values del formulario, 
    // 2do valor= manejadordeEvento
    // 3er valor= para resetear 
}