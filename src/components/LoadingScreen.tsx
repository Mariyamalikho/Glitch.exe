import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      className="grid min-h-[60vh] place-items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-lg border border-cyan/30 bg-black/90 p-6 font-mono shadow-2xl shadow-cyan/10">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-cyan/20 pb-3 text-xs uppercase tracking-widest text-cyan">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-cyan animate-pulse" />
            <span>KERNEL_SECTOR_LOADER // V7.03</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">ADDR: 0x7FFD0A4B</span>
        </div>

        {/* Diagnostic Stream / Skeleton Log */}
        <div className="my-4 space-y-1.5 text-xs text-slate-400">
          <p className="text-cyan font-bold">&gt; SYNCING SUBCONSCIOUS MEMORY CACHE...</p>
          <p className="text-slate-500">&gt; VERIFYING ACT_STATE :: CHECKSUM 0x9AF2 [VALID]</p>
          <p className="text-slate-400">&gt; ALLOCATING BUFFER: SECTOR_GRID_4</p>
        </div>

        {/* Tactical Block Progress Bar */}
        <div className="space-y-2 border-t border-cyan/15 pt-4">
          <div className="flex justify-between text-[11px] uppercase tracking-wider text-cyan">
            <span>SECTOR_DECRYPT</span>
            <span className="animate-pulse">86.4% COMPLETE</span>
          </div>
          <div className="h-3 w-full border border-cyan/40 bg-void p-0.5">
            <div className="h-full w-[86%] bg-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </div>
          <div className="text-[10px] text-slate-500 tracking-wider">
            [██████████████████████████░░░░] 28/32 BLOCKS
          </div>
        </div>

        {/* Memory Grid Skeleton Blocks */}
        <div className="mt-5 grid grid-cols-4 gap-2 pt-2 border-t border-white/5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-10 border border-cyan/20 bg-cyan/5 p-1.5 text-[9px] text-slate-500 flex flex-col justify-between animate-pulse"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <span>SEC_0{i + 1}</span>
              <span className="text-cyan/70 font-bold">READY</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
