import * as MdIcons from 'react-icons/md';

import { Container } from "./styles";

export function Sidebar() {
  return (
    <Container>
      <div className="navbar">
        <button className="menu-bars">
          <MdIcons.MdOutlineMenu />
        </button>
        {/* <nav>
          <button className="menu-bars">
            <MdIcons.MdClose />
          </button>
          <button>
            Home
          </button>
          <button>
            About
          </button>
        </nav> */}
      </div>
    </Container>
  )
}