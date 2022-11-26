import { slosher } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Slosher = () => {
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
      {slosher.map((sloshers) => {
        return(
        <ul className='listitemsUlLeft' key={sloshers.id}>
          <li data-weapon={sloshers.weapon_name} data-range={sloshers.range} data-firerate={sloshers.fire_rate} data-damage={sloshers.damage}  className='listitemsLiLeft' onClick={handleClick}>
            {sloshers.display_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Slosher
