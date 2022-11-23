import { reelgun } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import { useNavigate } from "react-router-dom"

const Reelgun = () => {
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
      {reelgun.map((reelguns) => {
        return(
        <ul className='listitemsUlLeft' key={reelguns.id}>
          <li data-weapon={reelguns.weapon_name} data-range={reelguns.range} data-firerate={reelguns.fire_rate} data-damage={reelguns.damage}  className='listitemsLiLeft' onClick={handleClick}>
           <img src={reelguns.image} alt='' className='listitemsImg'/>
           <span className='listitemsTextLeft'>
              {reelguns.weapon_name}
            </span>
          </li>
        </ul>
        )
      })}
    </div>
  )
}

export default Reelgun
