import { roller } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Roller = () => {
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
      {roller.map((rollers) => {
        return(
        <ul className='listitemsUlLeft' key={rollers.id}>
          <li data-weapon={rollers.display_name} data-range={rollers.range} data-firerate={rollers.fire_rate} data-damage={rollers.damage}  className='listitemsLiLeft' onClick={handleClick}>
            {rollers.display_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Roller
