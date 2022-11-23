import { blaster } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const BlasterRight = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    const weapon = e.currentTarget.dataset.weapon
    const range = e.currentTarget.dataset.range
    const firerate = e.currentTarget.dataset.firerate
    const damage = e.currentTarget.dataset.damage
    const weapon2 = {
      select_list1: false,
      weapon2_name: weapon,
      weapon2_range: range,
      weapon2_firerate: firerate,
      weapon2_damage: damage,
    };
    navigate("/result-graph/selectweapon_list2", {state: weapon2})
  }
  return (
    <div>
      {blaster.map((blasters) => {
        return(
        <ul className='listitemsUlRight' key={blasters.id}>
          <li data-weapon={blasters.weapon_name} data-range={blasters.range} data-firerate={blasters.fire_rate} data-damage={blasters.damage}  className='listitemsLiRight' onClick={handleClick}>
            {blasters.display_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default BlasterRight
