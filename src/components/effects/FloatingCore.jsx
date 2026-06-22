export default function FloatingCore() {
  return (
    <div className="floating-core" aria-hidden="true">
      <div className="floating-core__scene">
        <div className="floating-core__sphere">
          <div className="floating-core__inner" />
          <div className="floating-core__ring floating-core__ring--1" />
          <div className="floating-core__ring floating-core__ring--2" />
          <div className="floating-core__ring floating-core__ring--3" />
        </div>
        <div className="floating-core__orbit floating-core__orbit--1">
          <span className="floating-core__satellite" />
        </div>
        <div className="floating-core__orbit floating-core__orbit--2">
          <span className="floating-core__satellite floating-core__satellite--cyan" />
        </div>
      </div>
    </div>
  )
}
