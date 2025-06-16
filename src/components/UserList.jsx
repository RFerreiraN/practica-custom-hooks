
import { useFetchUsers } from "../Hooks/useFetchUsers";

export const UserList = ({ endPoint }) => {

  const { users, isLoading } = useFetchUsers(endPoint)

  return (
    <>
      {
        isLoading ?
          <p>Cargando..</p> : (
            <ul>
              {users.map(user => (

                <li key={user.id}>
                  {endPoint == 'users' ? user.name : user.body}
                </li>
              ))}
            </ul>
          )
      }
    </>
  )
}
