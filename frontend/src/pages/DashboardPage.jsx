import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getProfile } from '../api/auth';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    
    fetchProfile();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {profile && <p>Welcome, {profile.logged_in_as}</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashboardPage;