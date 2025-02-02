import React, { useState } from "react";
import { Styles } from "./Styles.js";

export default function CampaignList({
  campaigns,
  selectCampaign,
  deleteCampaign,
}) {
  return (
    <div style={Styles.campaignList}>
      <h2>Campaigns</h2>
      <ul style={Styles.list}>
        {campaigns.map((campaign) => (
          <li key={campaign.id} style={Styles.listItem}>
            <span
              onClick={() => selectCampaign(campaign)}
              style={Styles.campaignName}
              title="Click to view details"
            >
              {campaign.name}
            </span>
            <button
              onClick={() => deleteCampaign(campaign.id)}
              style={Styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
