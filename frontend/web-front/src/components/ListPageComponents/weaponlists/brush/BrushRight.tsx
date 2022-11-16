import { brush } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const BrushRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: false})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {brush.map((brushs) => {
        return(
        <ul className='listitemsUlRight' key={brushs.id}>
          <li data-weapon={brushs.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {brushs.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default BrushRight
