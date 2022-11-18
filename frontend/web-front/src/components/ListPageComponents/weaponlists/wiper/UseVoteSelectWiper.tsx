import { wiper } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import axios from 'axios'
import { useState } from "react"
import SelectPlayModeWeapon1 from "../../../TotallingPageComponents/SelectPlayModeWeapon1"

const UseVoteSelectWiper = () => {
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
        {wiper.map((wipers) => {
          return(
          <ul className='listitemsUlLeft' key={wipers.id}>
            <li data-weapon={wipers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
              {wipers.weapon_name}
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

export default UseVoteSelectWiper
