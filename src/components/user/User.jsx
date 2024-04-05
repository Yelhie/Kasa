import "./user.scss";

export const User = ({ name, profilePicture }) => {
  const names = name.split(" ");
  return (
    <div className="user_container">
      <p className="user_name">
        {names[0]} <br /> {names[1]}
      </p>
      <img className="user_picture" src={profilePicture} alt="Avatar" />
    </div>
  );
};
