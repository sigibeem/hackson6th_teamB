import { roller } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const RollerRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: false})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {roller.map((rollers) => {
        return(
        <ul className='listitemsUlRight' key={rollers.id}>
          <li data-weapon={rollers.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {rollers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default RollerRight
