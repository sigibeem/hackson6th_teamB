import { stringer } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Stringer = () => {
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
      {stringer.map((stringers) => {
        return(
        <ul className='listitemsUlLeft' key={stringers.id}>
          <li data-weapon={stringers.weapon_name} data-range={stringers.range} data-firerate={stringers.fire_rate} data-damage={stringers.damage}  className='listitemsLiLeft' onClick={handleClick}>
            {stringers.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Stringer
