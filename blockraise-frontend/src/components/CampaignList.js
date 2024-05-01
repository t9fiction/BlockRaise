import React, { useEffect, useState } from 'react';
// import DonationForm from './DonationForm';
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function CampaignList({ campaigns }) {
  const [campaignsReceived, setcampaignsReceived] = useState([]);

  console.log(campaigns)

  useEffect(() => {
    const loadCampaigns = async () => {
      // const fetchedCampaigns = await fetchCampaigns();
      setcampaignsReceived(campaigns);
    };
    loadCampaigns();
  }, [campaigns]);

  return (
    <div>
      <h2>Active Campaigns</h2>
      <ul>
        {campaigns.map((campaign, index) => (
          <li key={index}>
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
            {/* <DonationForm id={index} /> */}
            <Link to={`/campaigns/${index}`}>View Details</Link>
            {/* <a href={`/campaigns/${index}`}>View Details</a> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampaignList;
