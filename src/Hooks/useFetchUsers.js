import { useState, useEffect } from "react";

export const useFetchUsers = ( endPoint ) => {

 const [users, setUsers] = useState([]);
 const [isLoading, setIsLoading] = useState(true)

  const fetchUsers = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
      const data = await response.json();
      setUsers(data)
      setIsLoading(false)
      console.log(data)
    } catch (error) {
      console.error( 'Error en la petición' , error )
    }
  }

  useEffect( ()=> {
    fetchUsers()
  }, [ endPoint ])

  return {
    users,
    isLoading
  }
}
