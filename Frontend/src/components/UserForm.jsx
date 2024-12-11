import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users", { name, email });
      alert("User created successfully!");
      console.log(response.data);
      setName("");
      setEmail("");
    } catch (error) {
      alert("Error creating user.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create a New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserForm;
