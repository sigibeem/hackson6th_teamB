import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blaster from '../components/ListPageComponents/weaponlists/blaster/Blaster'
import BlasterRight from '../components/ListPageComponents/weaponlists/blaster/BlasterRight'
import Brush from '../components/ListPageComponents/weaponlists/brush/Brush'
import BrushRight from '../components/ListPageComponents/weaponlists/brush/BrushRight'
import Charger from '../components/ListPageComponents/weaponlists/charger/Charger'
import ChargerRight from '../components/ListPageComponents/weaponlists/charger/ChargerRight'
import Manuver from '../components/ListPageComponents/weaponlists/manuver/Manuver'
import ManuverRight from '../components/ListPageComponents/weaponlists/manuver/ManuverRight'
import Reelgun from '../components/ListPageComponents/weaponlists/reelgun/Reelgun'
import ReelgunRight from '../components/ListPageComponents/weaponlists/reelgun/ReelgunRight'
import Roller from '../components/ListPageComponents/weaponlists/roller/Roller'
import RollerRight from '../components/ListPageComponents/weaponlists/roller/RollerRight'
import Shelter from '../components/ListPageComponents/weaponlists/shelter/Shelter'
import ShelterRight from '../components/ListPageComponents/weaponlists/shelter/ShelterRight'
import Shooter from '../components/ListPageComponents/weaponlists/shooter/Shooter'
import ShooterRight from '../components/ListPageComponents/weaponlists/shooter/ShooterRight'
import Spinner from '../components/ListPageComponents/weaponlists/spinner/Spinner'
import SpinnerRight from '../components/ListPageComponents/weaponlists/spinner/SpinnerRight'
import Stringer from '../components/ListPageComponents/weaponlists/stringer/Stringer'
import StringerRight from '../components/ListPageComponents/weaponlists/stringer/StringerRight'
import Throsher from '../components/ListPageComponents/weaponlists/throsher/Throsher'
import ThrosherRight from '../components/ListPageComponents/weaponlists/throsher/ThrosherRight'
import Wiper from '../components/ListPageComponents/weaponlists/wiper/Wiper'
import WiperRight from '../components/ListPageComponents/weaponlists/wiper/WiperRight'
import Graph from '../mainflames/Graph'
import Lists from '../mainflames/Lists'
import Top from '../mainflames/Top'

const RouterConfig = () => {
  return (
    <div>
      <Routes>

        {/* mainflames */}
        <Route index element={<Top />} />
        <Route path="/weapons" element={<Lists />} />
        <Route path="/result-graph" element={<Graph />} />

        {/* weaponlists */}
        <Route path="/weapons/blaster" element={<Blaster />} />
        <Route path="/weapons/blaster_right" element={<BlasterRight />} />
        <Route path="/weapons/brush" element={<Brush />} />
        <Route path="/weapons/brush_right" element={<BrushRight />} />
        <Route path="/weapons/charger" element={<Charger />} />
        <Route path="/weapons/charger_right" element={<ChargerRight />} />
        <Route path="/weapons/manuver" element={<Manuver />} />
        <Route path="/weapons/manuver_right" element={<ManuverRight />} />
        <Route path="/weapons/reelgun" element={<Reelgun />} />
        <Route path="/weapons/reelgun_right" element={<ReelgunRight />} />
        <Route path="/weapons/roller" element={<Roller />} />
        <Route path="/weapons/roller_right" element={<RollerRight />} />
        <Route path="/weapons/shelter" element={<Shelter />} />
        <Route path="/weapons/shelter_right" element={<ShelterRight />} />
        <Route path="/weapons/shooter" element={<Shooter />} />
        <Route path="/weapons/shooter_right" element={<ShooterRight />} />
        <Route path="/weapons/spinner" element={<Spinner />} />
        <Route path="/weapons/spinner_right" element={<SpinnerRight />} />
        <Route path="/weapons/stringer" element={<Stringer />} />
        <Route path="/weapons/stringer_right" element={<StringerRight />} />
        <Route path="/weapons/throsher_right" element={<ThrosherRight />} />
        <Route path="/weapons/wiper_right" element={<WiperRight />} />
      </Routes>
    </div>
  )
}

export default RouterConfig
