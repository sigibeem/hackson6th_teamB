import { shooter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Shooter = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {shooter.map((shooters) => {
        return(
        <ul className='listitemsUlLeft' key={shooters.id}>
          <li className='listitemsLiLeft' onClick={handleClick}>
            {shooters.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Shooter
