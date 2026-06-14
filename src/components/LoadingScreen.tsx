import { motion } from 'framer-motion'

// Futuristic data line
function DataRain({ x, delay }: { x: number; delay: number }) {
  return (
    <motion.div
      className="absolute w-px"
      style={{ left: `${x}%`, top: 0, bottom: 0 }}
    >
      <motion.div
        style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(180deg, transparent, rgba(37, 99, 235, 0.35), transparent)',
        }}
        animate={{ y: ['-100%', '1500%'] }}
        transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: 'linear' }}
      />
    </motion.div>
  )
}

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Data rain lines */}
      {[5, 15, 25, 35, 45, 55, 65, 75, 85, 95].map((x, i) => (
        <DataRain key={x} x={x} delay={i * 0.3} />
      ))}

      {/* Subtle scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px opacity-10"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.8), transparent)' }}
        animate={{ y: ['-50vh', '50vh'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'backOut' }}
          className="relative"
        >
          {/* Orbital rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute rounded-full"
            style={{
              width: 120,
              height: 120,
              top: -12,
              left: -12,
              border: '1px dashed rgba(37, 99, 235, 0.3)',
            }}
          >
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: '#2563EB',
                boxShadow: '0 0 6px rgba(37, 99, 235, 0.7)',
                top: -4,
                left: '50%',
                marginLeft: -4,
              }}
            />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute rounded-full"
            style={{
              width: 150,
              height: 150,
              top: -27,
              left: -27,
              border: '1px dashed rgba(59, 130, 246, 0.2)',
            }}
          >
            <div
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: '#3B82F6',
                boxShadow: '0 0 4px rgba(59, 130, 246, 0.6)',
                top: -3,
                left: '50%',
                marginLeft: -3,
              }}
            />
          </motion.div>

          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
              boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)',
            }}
          >
            <span className="text-4xl font-display font-bold text-white">KF</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h1
            className="text-3xl font-display font-bold"
            style={{
              background: 'linear-gradient(90deg, #1E3A8A, #3B82F6, #60A5FA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            QA Portfolio
          </h1>
          <p className="text-text-secondary mt-1 font-mono text-xs tracking-widest uppercase">
            Loading...
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-64"
        >
          <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, delay: 0.6, ease: 'easeInOut' }}
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #1E3A8A, #2563EB, #3B82F6)',
                boxShadow: '0 0 6px rgba(37, 99, 235, 0.4)',
              }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-text-muted text-xs text-center mt-2 font-mono"
          >
            Initializing...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}
