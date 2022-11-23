import { shooter } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ShooterRight = () => {
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
      {shooter.map((shooters) => {
        return(
        <ul className='listitemsUlRight' key={shooters.id}>
          <li data-weapon={shooters.weapon_name} data-range={shooters.range} data-firerate={shooters.fire_rate} data-damage={shooters.damage} className='listitemsLiRight' onClick={handleClick}>
          <img src={shooters.image} alt='' className='listitemsImg'/>
            <span className='listitemsTextRight'>
              {shooters.display_name}
            </span>
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ShooterRight
