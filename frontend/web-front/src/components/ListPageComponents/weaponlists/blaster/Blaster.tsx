import { blaster } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Blaster = () => {
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
      {blaster.map((blasters) => {
        return(
        <ul className='listitemsUlLeft' key={blasters.id}>
          <li data-weapon={blasters.display_name} data-range={blasters.range} data-firerate={blasters.fire_rate} data-damage={blasters.damage} className='listitemsLiLeft' onClick={handleClick}>
              {blasters.display_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Blaster
