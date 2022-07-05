import {useState} from 'react'

export default function useEmailValidate() {

    const [emailValue, setEmailValue] = useState("")
    const [emailValidation, setEmailValidation] = useState(false)
         
    const emailHandler = (e) => {
         setEmailValue(e.target.value)
         const regexEmail = /^([a-z\d\.-]+)@([a-z\d-]+).([a-z]{2,8})(\.[a-z]{2,8})?$/
         if(regexEmail.test(e.target.value)) {
            setEmailValidation(true)
         } else {
            setEmailValidation(false)
         }
         console.log(emailValidation)
        }
 
  return [emailValue, emailHandler, setEmailValue, emailValidation];

}
