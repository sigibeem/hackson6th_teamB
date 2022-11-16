import { reelgun } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Reelgun = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: true})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {reelgun.map((reelguns) => {
        return(
        <ul className='listitemsUlLeft' key={reelguns.id}>
          <li data-weapon={reelguns.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {reelguns.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Reelgun
