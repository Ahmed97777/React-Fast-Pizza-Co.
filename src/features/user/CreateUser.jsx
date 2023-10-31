import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hamadddd");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username.length > 2 && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
