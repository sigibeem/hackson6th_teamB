import { brush } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import axios from 'axios'
import { useState } from "react"
import SelectPlayModeWeapon1 from "../../../TotallingPageComponents/SelectPlayModeWeapon1"

const UseVoteSelectBrush = () => {
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
      {brush.map((brushs) => {
        return(
        <ul className='listitemsUlLeft' key={brushs.id}>
          <li data-weapon={brushs.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {brushs.weapon_name}
          </li>
        </ul>
        )
      })}
    </>
    :
    <><SelectPlayModeWeapon1 /></>  
    }
    </div>
  )
}

export default UseVoteSelectBrush
