import { wiper } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const WiperRight = () => {
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
      {wiper.map((wipers) => {
        return(
        <ul className='listitemsUlRight' key={wipers.id}>
          <li data-weapon={wipers.display_name} data-range={wipers.range} data-firerate={wipers.fire_rate} data-damage={wipers.damage} className='listitemsLiRight' onClick={handleClick}>
            {wipers.display_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default WiperRight
