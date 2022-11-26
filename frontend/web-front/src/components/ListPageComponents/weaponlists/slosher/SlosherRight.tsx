import { slosher } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const SlosherRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    const weapon = e.currentTarget.dataset.weapon
    const range = e.currentTarget.dataset.range
    const firerate = e.currentTarget.dataset.firerate
    const damage = e.currentTarget.dataset.damage
    const display = e.currentTarget.dataset.display
    const weapon2 = {
      select_list2: true,
      weapon2_name: weapon,
      weapon2_display: display,
      weapon2_range: range,
      weapon2_firerate: firerate,
      weapon2_damage: damage,
    };
    navigate("/result-graph/selectweapon_list2", {state: weapon2})
  }
  return (
    <div>
      {slosher.map((sloshers) => {
        return(
        <ul className='listitemsUlRight' key={sloshers.id}>
          <li data-weapon={sloshers.weapon_name} data-range={sloshers.range} data-firerate={sloshers.fire_rate} data-damage={sloshers.damage} data-display={sloshers.display_name}className='listitemsLiRight' onClick={handleClick}>
            {sloshers.display_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default SlosherRight
