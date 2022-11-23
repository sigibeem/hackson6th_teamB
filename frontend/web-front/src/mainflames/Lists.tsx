import { useState } from 'react'
import '../styles/listpage/listitems.css'
import SelectWeapon1 from '../components/ListPageComponents/SelectWeapon1';
import { useLocation } from 'react-router';
import SelectWeapon2 from '../components/ListPageComponents/SelectWeapon2';

const Lists = () => {
  const location = useLocation()
  const [selectWeapon1, setSelectWeapon1] = useState(location.state)
  if(localStorage.getItem('passed') === 'true'){
    localStorage.setItem('passed','false');
  }
  console.log(localStorage);
  return (
    <div>
      {!selectWeapon1 ?
    <>
      <h1 className='listTitle'>List1</h1>
      <SelectWeapon1 />
    </>
    :
    <>
      <h1 className='listTitle'>List2</h1>
      <SelectWeapon2 />
    </>
    }

      {/* weaponlistRoute */}
    </div>
  )
}

export default Lists
