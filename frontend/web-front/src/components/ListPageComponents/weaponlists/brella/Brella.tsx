import { brella } from "../weaponItems"
import '../../../../styles/listPage/listitems.css'
import { useNavigate } from "react-router-dom"

const Brella = () => {
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
      {brella.map((brellas) => {
        return(
        <ul className='listitemsUlLeft' key={brellas.id}>
          <li data-weapon={brellas.weapon_name}  data-range={brellas.range} data-firerate={brellas.fire_rate} data-damage={brellas.damage} className='listitemsLiLeft' onClick={handleClick}>
            {brellas.weapon_name}
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Brella
