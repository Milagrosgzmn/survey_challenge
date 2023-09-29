import { Link } from "react-router-dom";

export default function Success (){
    return (
        <section className=' flex flex-col justify-center'>
                <h1 className='text-center p-16 text-4xl'>
                ¡Hemos guardado y enviado tus respuestas!
                </h1>
                <p className='text-center w-3/6 m-auto text-2xl'>Gracias por tomarte el tiempo de completar esta encuesta.</p>
                <Link className="text-center m-4 underline hover:cursor-pointer" to="/survey/update">Consultar resultados</Link>
        </section>
    );
}