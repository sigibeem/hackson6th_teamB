import { shooter } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const ShooterRight = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    navigate("/result-graph", {state: false})
  }
  return (
    <div>
      {shooter.map((shooters) => {
        return(
        <ul className='listitemsUlRight' key={shooters.id}>
          <li data-weapon={shooters.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {shooters.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ShooterRight
