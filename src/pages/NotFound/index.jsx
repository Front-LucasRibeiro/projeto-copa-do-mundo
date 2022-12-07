import { useNavigate } from 'react-router-dom'

export default function NotFound(){

  const navigate = useNavigate()
  
  return(
    <>
      <button onClick={() => navigate(-1)}>
        {'< VOltar'}
      </button>
    
      <h2>Página não encontrada!</h2>
    </>
  )
}