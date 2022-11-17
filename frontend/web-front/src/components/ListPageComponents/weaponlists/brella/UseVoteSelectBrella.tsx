import { brella } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import axios from 'axios'
import { useState } from "react"

const UseVoteSelectBrella = () => {
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
      {brella.map((brellas) => {
        return(
        <ul className='listitemsUlLeft' key={brellas.id}>
          <li data-weapon={brellas.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
            {brellas.weapon_name}
          </li>
        </ul>
        )
      })}
    </>
    :
    <></>  
    }
    </div>
  )
}

export default UseVoteSelectBrella
