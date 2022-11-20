import { shooter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import axios from 'axios'
import { useState } from "react"
import SelectPlayModeWeapon1 from "../../../TotallingPageComponents/SelectPlayModeWeapon1"

const UseVoteSelectShooter = () => {
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
        {shooter.map((shooters) => {
          return(
          <ul className='listitemsUlLeft' key={shooters.id}>
            <li data-weapon={shooters.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
              <img src={shooters.image} alt='' className='listitemsImg'/>
                <span className='listitemsTextRight'>
                  {shooters.weapon_name}
                </span>
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

export default UseVoteSelectShooter
