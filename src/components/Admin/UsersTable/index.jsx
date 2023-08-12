import React from "react";
import "./style.css";

const UsersTable = ({ users, onDelete, onUpdate }) => {
  return (
    <div className="TableContainer">
      <table className="Table">
        <thead>
          <tr>
            <th className="TableHeader">ID</th>
            <th className="TableHeader">Name</th>
            <th className="TableHeader">Email</th>
            <th className="TableHeader">Parent</th>
            <th className="TableHeader">Created At</th>
            <th className="TableHeader">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="TableRow">
              <td className="TableCell">{user.id}</td>
              <td className="TableCell">{user.name}</td>
              <td className="TableCell">{user.email}</td>
              <td className="TableCell">{user.parent}</td>
              <td className="TableCell">{user.created_at}</td>
              <td className="ActionsCell">
                <button onClick={() => onUpdate(user.id)}>Update</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
