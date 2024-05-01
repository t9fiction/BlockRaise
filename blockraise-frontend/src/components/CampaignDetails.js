// CampaignDetails.js
import { useParams } from "react-router-dom";
import React from 'react';
import DonationForm from './DonationForm'; // Correct the import path

const CampaignDetails = ({campaigns}) => {
    const { index } = useParams();
    const campaign = campaigns[index];

    const handleDonation = (amount) => {
        // Function to call the backend donation endpoint
        console.log(`Donating ${amount} ETH to campaign ID ${index}`);
        // Here you would replace console.log with a fetch call to your backend
    };

    return (
        <div>
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
            <p>Goal: {campaign.goal} ETH</p>
            <p>Raised: {campaign.funds} ETH</p>
            <DonationForm id={index} />

        </div>
    );
};

export default CampaignDetails;

