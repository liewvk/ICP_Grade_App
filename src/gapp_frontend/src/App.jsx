import React, { useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from '../../declarations/gapp_backend/gapp_backend.did.js';

const App = () => {
  const [mark, setMark] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting mark:", mark);

    try {
      const agent = new HttpAgent({ host: "http://127.0.0.1:4943" });
      agent.fetchRootKey(); // Only for local development

      const actor = Actor.createActor(idlFactory, {
        agent,
        canisterId: "bkyz2-fmaaa-aaaaa-qaaaq-cai", // Replace with the actual gapp_backend canister ID
      });

      console.log("Calling getGrade with mark:", mark);
      const result = await actor.getGrade(parseInt(mark, 10));
      console.log("Result from canister:", result);
      setGrade(result);
    } catch (error) {
      console.error("Error fetching grade:", error);
      setGrade("Error fetching grade");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
<img src="/logo2.svg" alt="DFINITY logo" />
      <h2>ICP Grade Evaluation App</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Mark:
          <input
            type="number"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            required
          />
        </label>
        <button type="submit">Evaluate Grade</button>
      </form>
      {grade && <h3>Grade: {grade}</h3>}
    </div>
  );
};

export default App;






    

