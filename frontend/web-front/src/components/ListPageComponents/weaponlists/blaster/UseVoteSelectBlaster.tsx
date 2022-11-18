import { blaster } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import axios from 'axios'
import { useState } from "react"
import SelectPlayModeWeapon1 from "../../../TotallingPageComponents/SelectPlayModeWeapon1"


const UseVoteSelectBlaster = () => {
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
            {blaster.map((blasters) => {
              return(
              <ul className='listitemsUlLeft' key={blasters.id}>
                <li data-weapon={blasters.weapon_name} data-range={blasters.range} data-firerate={blasters.fire_rate} data-damage={blasters.damage} className='listitemsLiLeft' onClick={handleClick}>
                    {blasters.weapon_name}
                </li>
              </ul>
              )
            })}
            </>
            :
            <>
              <SelectPlayModeWeapon1 />
            </>
      }

    </div>
  )
}

export default UseVoteSelectBlaster
