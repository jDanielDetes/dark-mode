import {useLocalStorage} from './useLocalStorage'

useDarkMode= ()=>{
const[dark,setDark] = useLocalStorage('dark')
}