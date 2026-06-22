import ParticleField from './ParticleField'

export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="animated-bg__gradient animated-bg__gradient--1" />
      <div className="animated-bg__gradient animated-bg__gradient--2" />
      <div className="animated-bg__gradient animated-bg__gradient--3" />
      <div className="animated-bg__mesh" />

      <div className="ai-orb ai-orb--1">
        <div className="ai-orb__core" />
        <div className="ai-orb__ring ai-orb__ring--1" />
        <div className="ai-orb__ring ai-orb__ring--2" />
      </div>
      <div className="ai-orb ai-orb--2">
        <div className="ai-orb__core" />
        <div className="ai-orb__ring ai-orb__ring--1" />
      </div>
      <div className="ai-orb ai-orb--3">
        <div className="ai-orb__core" />
      </div>

      <ParticleField />

      <div className="animated-bg__grid" />
      <div className="animated-bg__vignette" />
    </div>
  )
}
