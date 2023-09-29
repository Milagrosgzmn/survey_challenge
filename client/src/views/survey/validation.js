/* eslint-disable no-prototype-builtins */

export default function validation (input){
    let phone_number = input.phone_number;
    let errors = {};
    
    if (!input.full_name){
        errors.full_name= 'Este campo es obligatorio';
    }
    if (!input.how_found){
        errors.how_found= 'Este campo es obligatorio';
    }
    if (!input.preferred_language) {
        errors.preferred_language= 'Este campo es obligatorio';
    }
    
    if (input.hasOwnProperty("phone_number") && !input.phone_number) {
        errors.phone_number= 'Este campo es obligatorio';
    }
    if (!/[0-9]$/.test(phone_number)) {
        errors.phone_number= 'Este campo debe ser en números';
    }
   
    return errors;
}