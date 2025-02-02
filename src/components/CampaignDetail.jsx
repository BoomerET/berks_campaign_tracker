import React, { useState } from "react";
import { Styles } from "./Styles.js";

export default function CampaignDetail({
  campaign,
  addSession,
  deleteSession,
}) {
  const [sessionName, setSessionName] = useState("");

  const handleAddSession = (e) => {
    e.preventDefault();
    if (!sessionName.trim()) return;
    const newSession = { id: Date.now(), name: sessionName };
    addSession(campaign.id, newSession);
    setSessionName("");
  };

  return (
    <div style={Styles.campaignDetail}>
      <h2>{campaign.name}</h2>
      <p>{campaign.description}</p>
      <h3>Sessions</h3>
      {campaign.sessions.length > 0 ? (
        <ul style={Styles.list}>
          {campaign.sessions.map((session) => (
            <li key={session.id} style={Styles.listItem}>
              {session.name}
              <button
                onClick={() => deleteSession(campaign.id, session.id)}
                style={Styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sessions added yet.</p>
      )}
      <form onSubmit={handleAddSession} style={Styles.form}>
        <input
          type="text"
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)}
          placeholder="New session name"
          style={Styles.input}
        />
        <button type="submit" style={Styles.button}>
          Add Session
        </button>
      </form>
    </div>
  );
}
