import React, { useState, useEffect } from 'react';
import { getProfile, updateuserProfile } from '../services/userService';

const ProfilePage = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    await updateuserProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      <div>
        <label>Name: </label>
        {isEditing ? (
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        ) : (
          <p>{profile.name}</p>
        )}
      </div>
      <div>
        <label>Email: </label>
        {isEditing ? (
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        ) : (
          <p>{profile.email}</p>
        )}
      </div>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit Profile'}
      </button>
      {isEditing && <button onClick={handleUpdate}>Update Profile</button>}
    </div>
  );
};

export default ProfilePage;