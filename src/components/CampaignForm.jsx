import React, { useState } from "react";
import { Styles } from "./Styles.js";

export default function CampaignForm({ addCampaign }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newCampaign = {
      id: Date.now(),
      name,
      description,
      sessions: [], // Initialize with an empty array for sessions
    };
    addCampaign(newCampaign);
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={Styles.form}>
      <h2>Add New Campaign</h2>
      <div style={Styles.formGroup}>
        <label>Campaign Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={Styles.input}
        />
      </div>
      <div style={Styles.formGroup}>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={Styles.textarea}
        />
      </div>
      <button type="submit" style={Styles.button}>
        Add Campaign
      </button>
    </form>
  );
}
