import React from "react";

const User = ({ onDelete, user }) => {
  return (
    <div>
      {user.name}
      <button id="user-delete" onClick={() => onDelete(user.id)}>
        delete
      </button>
    </div>
  );
};

export default User;
