import { stringer } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const StringerRight = () => {
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
      {stringer.map((stringers) => {
        return(
        <ul className='listitemsUlRight' key={stringers.id}>
          <li data-weapon={stringers.weapon_name} data-range={stringers.range} data-firerate={stringers.fire_rate} data-damage={stringers.damage} className='listitemsLiRight' onClick={handleClick}>
            {stringers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default StringerRight
