import { splatling } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Splatling = () => {
  const navigate = useNavigate()

  const handleClick = async (e: any) => {
    const weapon = e.currentTarget.dataset.weapon
    const range = e.currentTarget.dataset.range
    const firerate = e.currentTarget.dataset.firerate
    const damage = e.currentTarget.dataset.damage
    const display = e.currentTarget.dataset.display
    const weapon1 = {
      select_list1: true,
      weapon1_name: weapon,
      weapon1_display: display,
      weapon1_range: range,
      weapon1_firerate: firerate,
      weapon1_damage: damage,
    };
    navigate("/result-graph", {state: weapon1})
  }
  return (
    <div>
      {splatling.map((splatlings) => {
        return(
        <ul className='listitemsUlLeft' key={splatlings.id}>
          <li data-weapon={splatlings.weapon_name} data-range={splatlings.range} data-firerate={splatlings.fire_rate} data-damage={splatlings.damage} data-display={splatlings.display_name} className='listitemsLiLeft' onClick={handleClick}>
            {splatlings.display_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Splatling
