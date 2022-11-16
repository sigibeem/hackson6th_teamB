import { slosher } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const SlosherRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: false})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {slosher.map((sloshers) => {
        return(
        <ul className='listitemsUlRight' key={sloshers.id}>
          <li data-weapon={sloshers.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {sloshers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default SlosherRight
