
import c from './AppBar.module.css'
import Navigation from "../Navigation/Navigation"
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

function AppBar() {
  
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <div className={c.container}>
      <div className={c.navigation}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
</div>
  )
}

export default AppBar
