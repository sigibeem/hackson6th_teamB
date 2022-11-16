import { slosher } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Slosher = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: true})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {slosher.map((sloshers) => {
        return(
        <ul className='listitemsUlLeft' key={sloshers.id}>
          <li data-weapon={sloshers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {sloshers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Slosher
