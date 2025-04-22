import React from "react";

const ServiceCard = ({ serviceType }) => {
  return (
    <div className="service_card">
      <div>
        <h4>{serviceType}</h4>
        <p></p>
      </div>
    </div>
  );
};

export default ServiceCard;
