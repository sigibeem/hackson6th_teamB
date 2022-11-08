import { shooter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ShooterRight = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/weapons", {state: true})
  }
  return (
    <div>
      {shooter.map((shooters) => {
        return(
        <ul className='listitemsUlRight' key={shooters.id}>
          <li className='listitemsLiRight' onClick={handleClick}>
            {shooters.title}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ShooterRight
