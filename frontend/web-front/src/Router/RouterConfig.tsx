import { Routes, Route } from 'react-router-dom'
import GraphAreaSelectWeaponLeft from '../components/GraphPageComponents/GraphAreaSelectWeaponLeft'
import GraphAreaSelectWeaponRight from '../components/GraphPageComponents/GraphAreaSelectWeaponRight'
import Blaster from '../components/ListPageComponents/weaponlists/blaster/Blaster'
import BlasterRight from '../components/ListPageComponents/weaponlists/blaster/BlasterRight'
import Brush from '../components/ListPageComponents/weaponlists/brush/Brush'
import BrushRight from '../components/ListPageComponents/weaponlists/brush/BrushRight'
import Charger from '../components/ListPageComponents/weaponlists/charger/Charger'
import ChargerRight from '../components/ListPageComponents/weaponlists/charger/ChargerRight'
import Maneuver from '../components/ListPageComponents/weaponlists/maneuver/Maneuver'
import ManeuverRight from '../components/ListPageComponents/weaponlists/maneuver/ManeuverRight'
import Reelgun from '../components/ListPageComponents/weaponlists/reelgun/Reelgun'
import ReelgunRight from '../components/ListPageComponents/weaponlists/reelgun/ReelgunRight'
import Roller from '../components/ListPageComponents/weaponlists/roller/Roller'
import RollerRight from '../components/ListPageComponents/weaponlists/roller/RollerRight'
import Brella from '../components/ListPageComponents/weaponlists/brella/Brella'
import BrellaRight from '../components/ListPageComponents/weaponlists/brella/BrellaRight'
import Shooter from '../components/ListPageComponents/weaponlists/shooter/Shooter'
import ShooterRight from '../components/ListPageComponents/weaponlists/shooter/ShooterRight'
import Splatling from '../components/ListPageComponents/weaponlists/splatling/Splatling'
import SplatlingRight from '../components/ListPageComponents/weaponlists/splatling/SplatlingRight'
import Stringer from '../components/ListPageComponents/weaponlists/stringer/Stringer'
import StringerRight from '../components/ListPageComponents/weaponlists/stringer/StringerRight'
import Slosher from '../components/ListPageComponents/weaponlists/slosher/Slosher'
import SlosherRight from '../components/ListPageComponents/weaponlists/slosher/SlosherRight'
import Wiper from '../components/ListPageComponents/weaponlists/wiper/Wiper'
import WiperRight from '../components/ListPageComponents/weaponlists/wiper/WiperRight'
import VictoryOrDefeat from '../components/TotallingPageComponents/VictoryOrDefeat'
import Graph from '../mainflames/Graph'
import Lists from '../mainflames/Lists'
import Top from '../mainflames/Top'
import Totalling from '../mainflames/Totalling'

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
        <Route path="/weapons/blaster_list2" element={<BlasterRight />} />
        <Route path="/weapons/brush" element={<Brush />} />
        <Route path="/weapons/brush_list2" element={<BrushRight />} />
        <Route path="/weapons/charger" element={<Charger />} />
        <Route path="/weapons/charger_list2" element={<ChargerRight />} />
        <Route path="/weapons/maneuver" element={<Maneuver />} />
        <Route path="/weapons/maneuver_list2" element={<ManeuverRight />} />
        <Route path="/weapons/reelgun" element={<Reelgun />} />
        <Route path="/weapons/reelgun_list2" element={<ReelgunRight />} />
        <Route path="/weapons/roller" element={<Roller />} />
        <Route path="/weapons/roller_list2" element={<RollerRight />} />
        <Route path="/weapons/brella" element={<Brella />} />
        <Route path="/weapons/brella_list2" element={<BrellaRight />} />
        <Route path="/weapons/shooter" element={<Shooter />} />
        <Route path="/weapons/shooter_list2" element={<ShooterRight />} />
        <Route path="/weapons/splatling" element={<Splatling />} />
        <Route path="/weapons/splatling_list2" element={<SplatlingRight />} />
        <Route path="/weapons/stringer" element={<Stringer />} />
        <Route path="/weapons/stringer_list2" element={<StringerRight />} />
        <Route path="/weapons/slosher" element={<Slosher />} />
        <Route path="/weapons/slosher_list2" element={<SlosherRight />} />
        <Route path="/weapons/wiper" element={<Wiper />} />
        <Route path="/weapons/wiper_list2" element={<WiperRight />} />

        {/* grapharea */}
        <Route path="/result-graph/selectweapon_left" element={<GraphAreaSelectWeaponLeft />} />
        <Route path="/result-graph/selectweapon_list2" element={<GraphAreaSelectWeaponRight />} />

        {/* totalling */}
        <Route path="/totalling" element={<Totalling />} />
        <Route path="/totalling/result" element={<VictoryOrDefeat />} />
      </Routes>
    </div>
  )
}

export default RouterConfig
