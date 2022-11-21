import { blaster } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"
import React, { useContext } from 'react';


const Blaster = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    navigate("/result-graph", {state: true})

    const weapon = e.currentTarget.dataset.weapon
    const blasterContext = React.createContext(weapon)

    // const range = e.currentTarget.dataset.range
    // const firerate = e.currentTarget.dataset.firerate
    // const damage = e.currentTarget.dataset.damage
  }
  return (
    <div>
      {blaster.map((blasters) => {
        return(
        <ul className='listitemsUlLeft' key={blasters.id}>
          <li data-weapon={blasters.weapon_name} data-range={blasters.range} data-firerate={blasters.fire_rate} data-damage={blasters.damage} className='listitemsLiLeft' onClick={handleClick}>
              {blasters.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Blaster
