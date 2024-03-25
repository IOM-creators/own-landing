import React, { useEffect, useState } from "react";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const apiKey = "YOUR_API_KEY";
  const apiSecret = "YOUR_API_SECRET";
  const accessToken = "YOUR_ACCESS_TOKEN";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.upwork.com/api/hr/v4/freelancer-feedbacks",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            // Add query parameters as needed
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch feedback");
        }
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h1>Client Feedback</h1>
      <ul>
        {feedbacks.map((feedback) => (
          <li>
            {/* Render each feedback item */}
            hello
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedbacks;
