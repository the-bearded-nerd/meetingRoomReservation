import ReservationForm from "./components/ReservationForm/ReservationForm";

import {
  TOWER_OPTIONS,
  FLOOR_OPTIONS,
  MEETING_ROOM_OPTIONS,
  DURATION_OPTIONS,
  DEFAULT_OPTION,
} from "./constants";

function App() {
  return (
    <ReservationForm
      towerOptions={TOWER_OPTIONS}
      floorOptions={FLOOR_OPTIONS}
      meetingroomOptions={MEETING_ROOM_OPTIONS}
      durationOptions={DURATION_OPTIONS}
      defaultOption={DEFAULT_OPTION}
    />
  );
}

export default App;
