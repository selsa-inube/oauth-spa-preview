import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { isLoading, user, isAuthenticated } = useAuth0();

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <img src={user.picture} alt={user.name} />
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
      </div>
    )
  );
};

export default Profile;
