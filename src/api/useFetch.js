import axios from "axios";
import { useEffect, useState } from "react"

axios.defaults.baseURL = 'http://localhost:3030';  

export const useFetch = (url) => {
    const [contacts, setContacts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const fetchData = async() => {
        setLoader(true);

        try {
            const response = await axios.get(url);
            setContacts(response.data);      
        } catch (error) {
            const erMes = `Something went wrong - ${error.status}`;
            setErrorMessage(erMes);
        } finally {
            setLoader(false);
        }

    }

    useEffect(() => {
         fetchData();
    }, []);

   
    return {contacts, loader, errorMessage , setContacts};
}