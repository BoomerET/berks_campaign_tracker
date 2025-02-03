export default function Sessions() {
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
}