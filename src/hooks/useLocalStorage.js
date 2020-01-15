
useLocalStorage = (key,initialValue)=>{

    const[storedValue,setStoredValue] = () =>{
        const item= window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    }
    return [storedValue]
}

setValue = value =>{
setStoredValue(value)
window.localStorage.setItem(key, JSON.stringify(value))
}