import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Survey from "../survey/survey";

export default function UpdateSurvey (){
    const {id} = useSelector( state=>{
        return state.user;
    });
    const [edit, setEdit] = useState(false);
    const [results, setResults] = useState({});
    const tranlate = {
        full_name: 'Nombre completo',
        phone_number: 'Número de teléfono',
        start_date: 'Fecha de inicio',
        preferred_language: 'Idioma preferido',
        how_found: '¿Cómo nos encontraste?',
        newsletter_subscription: "¿Está suscrito al boletín informativo?"
    };

    useEffect(()=>{
        if (id) {
        axios(`/survey/results?id=${id}`).then(({data})=>{
            setResults(data);
        }).catch((error)=>{
            console.error(error.response.data, error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Hubo un error!',
                footer: '<a href="">¿Son los datos ingresados correctos?</a>'
              });
        });
        }
    },[id]);

    function handleUpdate (){
        setEdit(true);
    }

    return(
        <main className="lg:w-6/12 mx-auto">
            {!edit && results && (
        <div className="flex flex-col justify-center py-8 mx-auto w-9/12">
          {Object.entries(results).map(([key, value], index) => (
            <div  key={index}>
            {key !== 'id' && 
            <div className="w-full flex justify-start" >
              <span className=" my-2 font-semibold w-8/12" >{tranlate[key]} :</span> <span className="my-2">{ !value ? 'No respondió ' : typeof value === 'boolean' ? value ? 'Sí' : 'No' : typeof value === 'string' ? value.slice(0,1).toUpperCase()+value.slice(1) : value }</span>
            </div>}
           </div> 
          ))}
          <h3 className="my-4 text-center font-semibold underline hover:cursor-pointer " onClick={handleUpdate}>Editar respuestas</h3>
        </div>
      )}
        
        {edit && <Survey result={results}/>
        }
        </main>
    );
}