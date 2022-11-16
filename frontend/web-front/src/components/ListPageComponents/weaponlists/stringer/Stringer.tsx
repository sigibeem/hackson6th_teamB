import { stringer } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Stringer = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: true})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {stringer.map((stringers) => {
        return(
        <ul className='listitemsUlLeft' key={stringers.id}>
          <li data-weapon={stringers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {stringers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Stringer
