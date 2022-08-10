import { useEffect } from "react"

export const ApiVava = () =>{

    const url = 'https://valorant-api.com/v1/agents'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data.data))
            
    }, []);
}