"use client";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="topNav">
        <div className="lightDark">sun/moon</div>
        <div className="logo">
          <img src="#" alt="#" />
        </div>
      </div>
      <div className="bottomNav">
        <div className="dropdown">
          <h3>Comics</h3>
          <div className="listChoice">Oneshots</div>
          <div className="listChoice">Bonnie Brek</div>
          <div className="listChoice">Captain Red</div>
        </div>
        <div className="dropdown">
          <h3>Drawing</h3>
          <div className="listChoice">Practice</div>
          <div className="listChoice">Oneshot</div>
          <div className="listChoice">series</div>
        </div>
        <div className="dropdown">
          <h3>Animation</h3>
          <div className="listChoice">Oneshot</div>
          <div className="listChoice">series</div>
        </div>
      </div>
    </nav>
  );
}