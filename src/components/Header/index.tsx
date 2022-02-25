import * as MdIcons from 'react-icons/md';

import { Container } from './styles';

import logo from '../../assets/logo.png';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <div className="user">
        <button className="notifications">
          <MdIcons.MdOutlineNotificationsNone />
          <div className="notifications-number">
            3
          </div>
        </button>
        <button className="user-details">
          <p className="user-name">
            Kevin S.
          </p>
          <MdIcons.MdKeyboardArrowDown />
          <div className="user-icon">
            KS
          </div>
        </button>
      </div>
    </Container>
  )
}