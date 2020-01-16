import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export  const  useDarkMode= (key, initialValue)=>{
const[dark,setDark] = useLocalStorage('key, initialValue')

useEffect(()=>{
    if(!dark) {
        document.querySelector("body").classList.remove('dark-mode')
    } else {
        document.querySelector('body').classList.add('dark-mode')
    }

},[dark,setDark])
return [dark,setDark]
}

