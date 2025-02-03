import React, { useState } from "react";
import { Styles } from "./components/Styles.js";
import CampaignDetail from "./components/CampaignDetail.jsx";
import CampaignForm from "./components/CampaignForm.jsx";
import CampaignList from "./components/CampaignList.jsx";
//import Sessions from "./components/Sessions.jsx";

// Main App component managing state for campaigns and sessions
function App() {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  // Add a new campaign to the list
  const addCampaign = (campaign) => {
    setCampaigns([...campaigns, campaign]);
  };

  // Set the currently selected campaign for viewing/editing
  const selectCampaign = (campaign) => {
    setSelectedCampaign(campaign);
  };

  // Delete a campaign and clear it from the selection if necessary
  const deleteCampaign = (campaignId) => {
    setCampaigns(campaigns.filter((campaign) => campaign.id !== campaignId));
    if (selectedCampaign && selectedCampaign.id === campaignId) {
      setSelectedCampaign(null);
    }
  };

  // Add a session to a campaign
  const addSession = (campaignId, session) => {
    setCampaigns(
      campaigns.map((campaign) =>
        campaign.id === campaignId
          ? { ...campaign, sessions: [...campaign.sessions, session] }
          : campaign
      )
    );
    if (selectedCampaign && selectedCampaign.id === campaignId) {
      setSelectedCampaign({
        ...selectedCampaign,
        sessions: [...selectedCampaign.sessions, session],
      });
    }
  };

  // Delete a session from a campaign
  const deleteSession = (campaignId, sessionId) => {
    setCampaigns(
      campaigns.map((campaign) =>
        campaign.id === campaignId
          ? {
            ...campaign,
            sessions: campaign.sessions.filter((s) => s.id !== sessionId),
          }
          : campaign
      )
    );
    if (selectedCampaign && selectedCampaign.id === campaignId) {
      setSelectedCampaign({
        ...selectedCampaign,
        sessions: selectedCampaign.sessions.filter((s) => s.id !== sessionId),
      });
    }
  };

  return (
    <div style={Styles.container}>
      <h1>Dungeons & Dragons 5e Campaign Tracker</h1>
      <CampaignForm addCampaign={addCampaign} />
      <div style={Styles.content}>
        <CampaignList
          campaigns={campaigns}
          selectCampaign={selectCampaign}
          deleteCampaign={deleteCampaign}
        />
        {selectedCampaign && (
          <CampaignDetail
            campaign={selectedCampaign}
            addSession={addSession}
            deleteSession={deleteSession}
          />
        )}
      </div>
    </div>
  );
}

export default App;
