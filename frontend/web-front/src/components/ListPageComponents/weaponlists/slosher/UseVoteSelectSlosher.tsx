import { slosher } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import axios from 'axios'
import { useState } from "react"

const UseVoteSelectSlosher = () => {
  const [show, setShow] = useState(true)
  const handleClick = async (e: any) => {
    setShow(false)
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
    
  }
  return (
    <div>
      {show ? 
      <>
        {slosher.map((sloshers) => {
          return(
          <ul className='listitemsUlLeft' key={sloshers.id}>
            <li data-weapon={sloshers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
              {sloshers.weapon_name}
            </li>
          </ul>
          )
        })}
      </>
      :
      <></>}
    </div>
  )
}

export default UseVoteSelectSlosher
