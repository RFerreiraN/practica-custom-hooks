import {useState} from 'react';
import { UserList } from './components/UserList';

export const UserApp = () => {

  const [endPoint, setEndPoint] = useState('users')

  const handleFetch = () => {
    setEndPoint( previus => previus === 'users' ? 'comments' : 'users')
  }

  return (
    <>
      <h2>Listado de Usuarios:</h2>
      <button onClick={ handleFetch }>Cambiar</button>
      <UserList endPoint={ endPoint }/>
    </>
  )
}
