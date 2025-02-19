"use client";

import { useState, useEffect } from "react";
import ContactUsForm from "../components/ui/ContactUsForm";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/react";

const ContactUs = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      const results = await fetch(`http://localhost:5050/requests`).then(
        (res) => res.json()
      );
      setRequests(results);
    };

    loadComments();
  });

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div>
        {/*requests.map((request) => {
          return (
            <div key={request["_id"]}>
              <p>{request["name"]}</p>
              <p>{request["email"]}</p>
              <p>{request["description"]}</p>
            </div>
          );
        })*/}
        <Card className="dark:bg-white rounded-lg shadow-lg shadow-black dark:shadow-black dark:shadow-lg">
          <CardHeader className="justify-center">
            <h1 className="text-lg font-semibold flex flex-col text-gray-800 dark:text-gray-800">
              Contact Us
            </h1>
          </CardHeader>
          <Divider className="dark:bg-white" />
          <CardBody className="py-2">
            <ContactUsForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
