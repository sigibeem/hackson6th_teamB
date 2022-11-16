import { brella } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const BrellaRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: false})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {brella.map((brellas) => {
        return(
        <ul className='listitemsUlRight' key={brellas.id}>
          <li data-weapon={brellas.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {brellas.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default BrellaRight
