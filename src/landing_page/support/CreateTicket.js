import React from "react";

const topics = [
  {
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  // You can add more categories here easily
  {
    title: "Trading & Investing",
    links: [
      "Equity Trading",
      "Futures & Options",
      "Commodity Trading",
      "Mutual Funds",
      "IPO Process",
      "Order Types",
      "Brokerage & Charges",
      "Reports & Statements",
    ],
  },
  {
    title: "Funds & Withdrawals",
    links: [
      "Add Funds",
      "Withdraw Funds",
      "Bank Account Change",
      "UPI Payments",
      "Fund Transfer Issues",
      "Transaction Limits",
      "Settlement Cycles",
      "Payment Gateways",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {topics.map((topic, index) => (
          <div className="col-4 p-4" key={index}>
            <h4>
              <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
              {topic.title}
            </h4>
            {topic.links.map((link, i) => (
              <div key={i}>
                <a
                  href="#"
                  className="text-decoration-none d-block my-1"
                  style={{ lineHeight: "2" }}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
