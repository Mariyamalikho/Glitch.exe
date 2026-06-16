import { motion } from 'framer-motion';
import { Lock, MapPin } from 'lucide-react';
import { locations } from '../data/world';
import { useGame } from '../state/GameProvider';

export function WorldMapPage() {
  const { state, dispatch } = useGame();
  return (
    <section>
      <h1 className="page-title">World Map</h1>
      <div className="holo-panel relative min-h-[620px] overflow-hidden p-4">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(49,247,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(49,247,255,.07)_1px,transparent_1px)] bg-[size:44px_44px]" />
        {locations.map((location) => {
          const unlocked = state.visitedLocations.includes(location.id);
          return (
            <motion.button
              key={location.id}
              type="button"
              className={`map-node ${unlocked ? 'map-node-open' : 'map-node-locked'}`}
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              onClick={() => unlocked && dispatch({ type: 'VISIT_LOCATION', locationId: location.id })}
              whileHover={{ scale: unlocked ? 1.06 : 1 }}
            >
              {unlocked ? <MapPin size={18} /> : <Lock size={18} />}
              <span>{location.name}</span>
              <small>{location.subtitle}</small>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
