// DonationForm.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import { API_URL } from "../constants";

const DonationForm = ({ id }) => {
  const [amount, setAmount] = useState("");

  // Donate Function
  const donate = async () => {
    try {
      Swal.fire({
        title: "Please wait...",
        html: "Donation in progress",
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
        showConfirmButton: false, // Hide the "OK" button
      });
      const response = await fetch(
        `${API_URL}/campaign/${id}/donate`, // Construct URL using id
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }), // Pass amount in request body
        }
      );
      console.log(response, "Response");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      Swal.fire({
        icon: "success",
        title: "Donation successful!",
        text: "Thank you for your donation.",
      });
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await donate(); // Call donate function
  };

  return (
    <>
      <h3>Send us Donation</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Donation Amount (ETH):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0.01"
            step="0.01"
          />
        </label>
        <button type="submit">Donate</button>
      </form>
    </>
  );
};

export default DonationForm;
