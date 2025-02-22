import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams(); // Get dynamic user ID from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // Fetch specific user
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return user ? (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong>
        {user.name}
      </p>
      <p>
        <strong>Username:</strong>
        {user.username}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Phone: </strong>
        {user.phone}
      </p>
      <p>
        <strong>Website: </strong>
        {user.website}
      </p>
    </div>
  ) : (
    <p>User not found.</p>
  );
};

export default UserDetails;
