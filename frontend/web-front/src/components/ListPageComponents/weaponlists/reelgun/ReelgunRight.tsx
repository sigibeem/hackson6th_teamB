import { reelgun } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const ReelgunRight = () => {
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
      {reelgun.map((reelguns) => {
        return(
        <ul className='listitemsUlRight' key={reelguns.id}>
          <li data-weapon={reelguns.display_name} data-range={reelguns.range} data-firerate={reelguns.fire_rate} data-damage={reelguns.damage}  className='listitemsLiRight' onClick={handleClick}>
            <img src={reelguns.image} alt='' className='listitemsImg'/>
            <span className='listitemsTextRight'>
              {reelguns.display_name}
            </span>
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default ReelgunRight
