import { charger } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Charger = () => {
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
      {charger.map((chargers) => {
        return(
        <ul className='listitemsUlLeft' key={chargers.id}>
          <li data-weapon={chargers.display_name} data-range={chargers.range} data-firerate={chargers.fire_rate} data-damage={chargers.damage}  className='listitemsLiLeft' onClick={handleClick}>
            {chargers.display_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Charger
