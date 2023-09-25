import WrongLocationIcon from '@mui/icons-material/WrongLocation';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { Link } from 'react-router-dom';
export default function Error (){
    return (
        <main className="flex-col justify-center p-20">
            <section>
                <div className='flex items-center justify-center'>
                <h1 className='text-xl  p-2'>No encontramos la página que estas buscando</h1>
                <SentimentDissatisfiedIcon/>
                </div>
                <div className=" flex justify-center ">
                    <WrongLocationIcon style={{ color: 'red', fontSize: '6rem', marginTop: '2rem' }}/>
                </div>
            </section>
            <div className='flex justify-center p-12'>
              <Link to='/' ><button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                Volver a Home
                </button>
                </Link>
            </div>
            
        </main>
    );
}