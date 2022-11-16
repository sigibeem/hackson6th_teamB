import { wiper } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Wiper = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: true})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {wiper.map((wipers) => {
        return(
        <ul className='listitemsUlLeft' key={wipers.id}>
          <li data-weapon={wipers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {wipers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Wiper
