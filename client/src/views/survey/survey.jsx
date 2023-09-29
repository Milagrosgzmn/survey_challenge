/* eslint-disable no-prototype-builtins */
import axios from "axios";
import validation from './validation';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setUser} from "../../redux/actions/userActions";
export default function Survey (props){
    const result = props.result ? props.result : false;

    const others = ['select', 'submit', 'radio'];
    const [items, setItems] = useState([]);
    const [errors, setErrors] = useState({});
    const [responses, setResponses] = useState({});
    const [triedToSend, setTried] = useState(false);
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        axios('/survey/fields').then(({data})=>{
            setItems(data);
        }).catch((e)=>{
            //swal e
            console.log(e);
        });
        if(Object.entries(result).length){
            setResponses(result);
            setEditing(true);
        }
    },[result]);

    function handleChange(event){
            setResponses((prevResponses) => ({
                ...prevResponses,
            [event.target.name]: `${event.target.value}`
        }));
        setErrors(
            validation({
            ...responses,
            [event.target.name]: `${event.target.value}`
        }));    
    }


    async function submitHandler (e){
        e.preventDefault();
        console.log(responses);
        setTried(true);
        if(Object.entries(responses).length && !Object.entries(errors).length){
            if(editing){
                try {
                    const {data} = await axios.put('/survey/update', {responses: responses});  
                    if(data){
                        dispatch(setUser(data.id));
                        return navigate('/survey/success');
                    }
                } catch (error) {
                    //swal e
                console.log(error);
                }
            }

            try {
                const {data} = await axios.post('/survey/', {responses: responses});  
                if(data){
                    dispatch(setUser(data.id));
                    navigate('/survey/success');
                }
            } catch (error) {
                //swal e
            console.log(error);
            }
        }
    }

    return (
        <main className="flex justify-center mt-4">
            <form className="md:w-8/12 lg:w-6/12" onSubmit={submitHandler}>
            {items && items.map((item, i) =>(
                <div className="my-4"  key={i}>
                { item.type === 'submit' &&(
                    <div className='flex justify-center' >
                    <input className="py-1 px-4
                    border-b-4
                    hover:bg-pink-900 brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" value={item.label} type={item.type}/>
                    </div>
                    )
                }
                {item.type === 'select' && (
                <div className="flex flex-col">
                <label>{item.label}</label>
                <select
                    onChange={handleChange}
                    className="px-4 py-1"
                    required={item.required}
                    name={item.name}
                    value={responses[item.name]}
                    >
                     <option defaultValue={'choose'}>Seleccione una opción</option>
                   {item.options.map((option, i) =>(
                    <option key={i} value={option.value}>
                    {option.label}
                    </option>
                   ))
                   }
                </select>
                {(errors[item.name] &&( responses[item.name] || triedToSend)) && <span className="text-red-400">{errors[item.name]} *</span>
                    }
                </div>
                )}

                {item.type === 'radio' && (
                    <div>
                        <label >{item.label}</label>
                    {item.options.map((option, i) =>(
                    <fieldset key={i}>         
                       <input type="radio"
                       onChange={handleChange}
                       required={item.required}
                        name={item.name}
                        checked={responses[item.name]===option.value ? true : false}
                        value={option.value}/>
                        <label>{option.label}</label>
                       </fieldset>
                       ))
                       }
                       {(errors[item.name] &&( responses[item.name] || triedToSend)) && <span className="text-red-400">{errors[item.name]} *</span>
                    }
                    </div>
                )}
                {   !others.includes(item.type) && (
                 <div className={item.type !== 'checkbox' ? "flex flex-col" :""}>
                    <label  >{item.label}</label>
                    <input 
                    className="px-4 py-2 ml-2"
                    /* required={item.required} */
                    onChange={handleChange}  
                    value={item.type === 'checkbox' ? event.target.checked ? true : false : responses[item.name] }
                    name={item.name} 
                    type={item.type}
                    checked={item.type === 'checkbox' ? responses[item.name]? true : false : undefined}
                    />
                    {(errors[item.name] &&( responses[item.name] || triedToSend)) && <span className="text-red-400">{errors[item.name]} *</span>
                    }
                </div> ) 
                }
                </div>
            ))
            }
            </form>
        </main>
    );
}