import { useNavigate } from 'react-router'
import '../../styles/graph/graph.css'

const TotallingLink = () => {
  const navigate = useNavigate()
  const handleClickTotalling = () => {
    navigate('/totalling')
  }
  return (
    <div>
      <p className='link' onClick={handleClickTotalling}>アンケートに協力してほしいデシ！</p>
    </div>
  )
}

export default TotallingLink
