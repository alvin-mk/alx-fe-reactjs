import UserInfo from './UserInfo';
import UserContext from './UserContext';
import { useContext } from 'react';

function ProfilePage() {
  const userData = useContext(UserContext)

  return <UserInfo userData={userData} />;
}

export default ProfilePage;