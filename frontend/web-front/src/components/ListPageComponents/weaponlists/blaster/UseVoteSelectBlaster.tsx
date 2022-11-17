import { blaster } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import axios from 'axios'
import { useState } from "react"


const UseVoteSelectBlaster = () => {
  const [show, setShow] = useState(true)
  const handleClick = async (e: any) => {
    setShow(false)
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})

    // const range = e.currentTarget.dataset.range
    // const firerate = e.currentTarget.dataset.firerate
    // const damage = e.currentTarget.dataset.damage
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
            </>
      }
    </div>
  )
}

export default UseVoteSelectBlaster
