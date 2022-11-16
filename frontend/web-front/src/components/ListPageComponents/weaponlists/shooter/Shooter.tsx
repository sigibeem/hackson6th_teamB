import { shooter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Shooter = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: true})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {shooter.map((shooters) => {
        return(
        <ul className='listitemsUlLeft' key={shooters.id}>
          <li data-weapon={shooters.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {shooters.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Shooter
