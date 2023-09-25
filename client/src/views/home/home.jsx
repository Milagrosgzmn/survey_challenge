import {Link} from 'react-router-dom';

export default function Home (){
    return(
        <main>
            <section className=' flex flex-col justify-center'>
                <h1 className='text-center p-16 text-4xl'>
                ¡Te invitamos a completar esta encuesta!
                </h1>
                <p className='text-center w-3/6 m-auto text-2xl'>En esta oportunidad nos gustaría saber más sobre vos y por eso preparamos algunas preguntas.<br/> ¿Estás listo?</p>

                <div className='flex justify-center py-8'>
                <Link to='/survey'><button className="bg-pink-900  mt-4 text-white-400 border border-white-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                 <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    EMPEZAR
                </button>
                </Link>
                </div>
            </section>
        </main>
    );
}