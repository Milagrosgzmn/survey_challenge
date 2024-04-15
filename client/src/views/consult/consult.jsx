/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { setUser } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Consult (){
    const [responses, setResponses] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(setUser(''));
    },[]);

    function handleChange(event){

        setResponses((prevResponses) => ({
            ...prevResponses,
        [event.target.name]: `${event.target.value}`
    }));
    }
   async function handleSubmit (e){
        e.preventDefault();
        
        try {
            const {data} = await  axios.get(`/survey/results?phone_number=${responses.phone_number}&full_name=${responses.full_name}`);
            dispatch(setUser(data.id));
            navigate('/survey/update');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Hubo un error!',
                footer: '<a href="">¿Son correctos los datos ingresados?</a>'
              });
          console.error(error.response.data, 'consult');  
        }
    }

    return (
        <main className="mx-8">
            <section className=' flex flex-col justify-center'>
                <h1 className='text-center p-8 text-4xl'>
                ¿Deseas revisar las respuestas de una encuesta anterior?
                </h1>
                <p className='text-center w-3/6 m-auto text-xl mb-6'>Completa los siguientes campos:</p>
            </section>
            <section className=' flex flex-col justify-center'>
                <form onSubmit={handleSubmit}
                    className=" mx-auto md:w-8/12 lg:w-6/12 px-6">
                    <fieldset className=" flex flex-col items-baseline justify-center my-4">
                        <label >Nombre completo: </label>
                        <input 
                        className="px-4 py-2 ml-2 w-full"
                        required
                        onChange={handleChange}  
                        name='full_name'
                        type="text"
                        />
                    </fieldset>
                    <fieldset className="flex flex-col items-baseline justify-center my-4">
                        <label  >Teléfono: </label>
                        <input 
                        className="px-4 py-2 ml-2 w-full"
                        required
                        onChange={handleChange}  
                        name='phone_number'
                        type="text"
                        />
                    </fieldset>
<div className='flex justify-center' >
                    <input className="py-1 px-4
                    border-b-4
                    hover:bg-pink-900 brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" type="submit"/>
                    </div>
                </form>
            </section>
        </main>
    );
}