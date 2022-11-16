import { splatling } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const SplatlingRight = () => {
  const navigate = useNavigate()

  const handleClick = async(e: any) => {
    navigate("/result-graph", {state: false})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {splatling.map((splatlings) => {
        return(
        <ul className='listitemsUlRight' key={splatlings.id}>
          <li data-weapon={splatlings.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {splatlings.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default SplatlingRight
