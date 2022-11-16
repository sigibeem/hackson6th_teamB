import { brush } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Brush = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: true})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {brush.map((brushs) => {
        return(
        <ul className='listitemsUlLeft' key={brushs.id}>
          <li data-weapon={brushs.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {brushs.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Brush
