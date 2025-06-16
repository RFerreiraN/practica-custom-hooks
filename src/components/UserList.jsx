import { useState, useEffect } from "react";
import { useFetchUsers } from "../Hooks/useFetchUsers";

export const UserList = ( {endPoint} ) => {
  
   const { users, isLoading } = useFetchUsers(endPoint)

  return (
    <>
      <ul>
          { users.map( user => (
            
            <li key={user.id}>
              {  endPoint == 'users' ? user.name : user.body }
            </li>
          ))}                                 
      </ul>
    </>
  )
}
