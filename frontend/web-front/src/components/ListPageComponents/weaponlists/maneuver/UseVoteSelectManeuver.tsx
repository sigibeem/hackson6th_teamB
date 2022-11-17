import { maneuver } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import axios from 'axios'
import { useState } from "react"

const UseVoteSelectManeuver = () => {
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
          {maneuver.map((maneuvers) => {
            return(
            <ul className='listitemsUlLeft' key={maneuvers.id}>
              <li data-weapon={maneuvers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
                {maneuvers.weapon_name}
              </li>
            </ul>
            )
          })}
        </>
     :
      <></>  
    }
    </div>
  )
}

export default UseVoteSelectManeuver
