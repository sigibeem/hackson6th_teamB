import { shooter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Shooter = () => {
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
      {shooter.map((shooters) => {
        return(
        <ul className='listitemsUlLeft' key={shooters.id}>
          <li data-weapon={shooters.weapon_name} data-range={shooters.range} data-firerate={shooters.fire_rate} data-damage={shooters.damage} data-display={shooters.display_name} className='listitemsLiLeft' onClick={handleClick}>
          <img src={shooters.image} alt='' className='listitemsImg'/>
            <span className='listitemsTextLeft'>
              {shooters.display_name}
            </span>
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Shooter
