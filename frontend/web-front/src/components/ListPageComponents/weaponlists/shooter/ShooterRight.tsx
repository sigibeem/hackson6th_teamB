import { shooter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const ShooterRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: false})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
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
