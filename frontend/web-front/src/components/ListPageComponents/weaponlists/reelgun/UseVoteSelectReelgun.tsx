import { reelgun } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import axios from 'axios'
import { useState } from "react"
import SelectPlayModeWeapon1 from "../../../TotallingPageComponents/SelectPlayModeWeapon1"

const UseVoteSelectReelgun = () => {
  const [show, setShow] = useState(true)
  const handleClick = async (e: any) => {
    setShow(false)
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {show ?
      <>
        {reelgun.map((reelguns) => {
          return(
          <ul className='listitemsUlLeft' key={reelguns.id}>
            <li data-weapon={reelguns.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
              {reelguns.weapon_name}
            </li>
          </ul>
          )
        })}
      </>
      :
      <><SelectPlayModeWeapon1 /></>}
    </div>
  )
}

export default UseVoteSelectReelgun
