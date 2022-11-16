import { blaster } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const BlasterRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: false})

    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {blaster.map((blasters) => {
        return(
        <ul className='listitemsUlRight' key={blasters.id}>
          <li data-weapon={blasters.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {blasters.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default BlasterRight
