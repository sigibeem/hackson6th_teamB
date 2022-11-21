import { charger } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const ChargerRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    const weapon = e.currentTarget.dataset.weapon
    const range = e.currentTarget.dataset.range
    const firerate = e.currentTarget.dataset.firerate
    const damage = e.currentTarget.dataset.damage
    const weapon2 = {
      select_list2: true,
      weapon2_name: weapon,
      weapon2_range: range,
      weapon2_firerate: firerate,
      weapon2_damage: damage,
    };
    navigate("/result-graph/selectweapon_list2", {state: weapon2})
  }
  return (
    <div>
      {charger.map((chargers) => {
        return(
        <ul className='listitemsUlRight' key={chargers.id}>
          <li data-weapon={chargers.weapon_name} data-range={chargers.range} data-firerate={chargers.fire_rate} data-damage={chargers.damage}  className='listitemsLiRight' onClick={handleClick}>
            {chargers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ChargerRight
