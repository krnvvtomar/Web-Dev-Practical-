import { useState } from "react";

function LiveInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Live Input</h3>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your Name: {name}</p>
    </div>
  );
}

export default LiveInput;