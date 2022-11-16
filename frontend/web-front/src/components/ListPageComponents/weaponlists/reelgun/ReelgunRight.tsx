import { reelgun } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const ReelgunRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: false})
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {reelgun.map((reelguns) => {
        return(
        <ul className='listitemsUlRight' key={reelguns.id}>
          <li data-weapon={reelguns.weapon_name} className='listitemsLiRight' onClick={handleClick}>
            {reelguns.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ReelgunRight
