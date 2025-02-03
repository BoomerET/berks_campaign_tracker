// src/components/CampaignSaver.js
import React, { useState } from 'react';

const CampaignSaver = ({ campaign, onSaveSuccess, onError }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to save the campaign data
    const saveCampaign = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://192.168.7.77:3000/api/campaign', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(campaign),
            });

            if (!response.ok) {
                // The response status is not in the range 200-299
                const errorMsg = await response.text();
                throw new Error(errorMsg || 'Failed to save campaign');
            }

            const savedCampaign = await response.json();

            // Call a success callback if provided
            if (onSaveSuccess) {
                onSaveSuccess(savedCampaign);
            }
        } catch (err) {
            setError(err.message);
            // Call an error callback if provided
            if (onError) {
                onError(err);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <button onClick={saveCampaign} disabled={loading} style={styles.button}>
                {loading ? 'Saving...' : 'Create Campaign'}
            </button>
            {error && <p style={styles.error}>Error: {error}</p>}
        </div>
    );
};

// Simple inline styles (you can replace these with your own CSS)
const styles = {
    container: {
        marginTop: '1rem',
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginTop: '0.5rem',
    },
};

export default CampaignSaver;
