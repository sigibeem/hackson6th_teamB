import { brush } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const Brush = () => {
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
      {brush.map((brushs) => {
        return(
        <ul className='listitemsUlLeft' key={brushs.id}>
          <li data-weapon={brushs.weapon_name} data-range={brushs.range} data-firerate={brushs.fire_rate} data-damage={brushs.damage}  className='listitemsLiLeft' onClick={handleClick}>
            {brushs.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Brush
