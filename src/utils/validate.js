const checkValidateData = (email, password, name) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(name)

    if (!isEmailValid) return 'Email is not valid'
    if (!isPasswordValid) return 'Password is not valid'
    if (!isNameValid) return 'Name is not valid';


    return null
}

export default checkValidateData