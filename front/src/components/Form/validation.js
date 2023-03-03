export default function validation (input){
    const regexUsername = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$/;
    
    const errores = {}

    if(!regexUsername.test(input.username) && input.username.length < 35)
    {
        errores.username = 'invalid username'
    }
    if(!regexPassword.test(input.password)){
        errores.password = 'invalid password'
    }
    return errores
}