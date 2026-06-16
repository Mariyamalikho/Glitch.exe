import { motion, AnimatePresence } from 'framer-motion';
import { Award } from 'lucide-react';
import { useGame } from '../state/GameProvider';

export function AchievementToast() {
  const { toast } = useGame();
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          className="fixed bottom-5 right-5 z-[60] flex max-w-sm items-center gap-3 rounded border border-acid/50 bg-black/80 p-4 shadow-neon backdrop-blur-xl"
          role="status"
        >
          <Award className="text-acid" aria-hidden />
          <div>
            <p className="font-display text-sm uppercase tracking-[0.24em] text-acid">Achievement</p>
            <p className="text-sm text-slate-100">{toast}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
