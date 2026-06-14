import { useMouseGlow } from '@/hooks/useMouseGlow'

export default function MouseGlow() {
  const glowRef = useMouseGlow()

  return (
    <div
      ref={glowRef}
      className="mouse-glow hidden lg:block"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 1,
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.07) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.15s ease',
      }}
    />
  )
}
