import { maneuver } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Maneuver = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    const weapon = e.currentTarget.dataset.weapon
    const range = e.currentTarget.dataset.range
    const firerate = e.currentTarget.dataset.firerate
    const damage = e.currentTarget.dataset.damage
    const weapon1 = {
      select_list1: true,
      weapon1_name: weapon,
      weapon1_range: range,
      weapon1_firerate: firerate,
      weapon1_damage: damage,
    };
    navigate("/result-graph", {state: weapon1})
  }
  return (
    <div>
      {maneuver.map((maneuvers) => {
        return(
        <ul className='listitemsUlLeft' key={maneuvers.id}>
          <li data-weapon={maneuvers.weapon_name} data-range={maneuvers.range} data-firerate={maneuvers.fire_rate} data-damage={maneuvers.damage}  className='listitemsLiLeft' onClick={handleClick}>
            {maneuvers.display_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Maneuver
