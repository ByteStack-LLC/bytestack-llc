"use client";

import NavBar from "../components/navbar/NavBar";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white dark:bg-gray-700 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <NavBar />
      </main>
    </div>
  );
}

/*import { useState, useEffect } from "react";
import { Form, Input, Button } from "@heroui/react";
import { Textarea } from "@heroui/input";
//import { Card, CardBody, CardHeader } from "@heroui/card";
//import { Divider } from "@heroui/react";

const ContactUs = () => {
  const [requests, setRequests] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const onSubmit = (e) => {
    e.prevenDefault();
  };

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
      {/*requests.map((request) => {
          return (
            <div key={request["_id"]}>
              <p>{request["name"]}</p>
              <p>{request["email"]}</p>
              <p>{request["description"]}</p>
            </div>
          );
        })}
      <Form
        className="max-w-full py-4 px-2 w-full justify-center items-center space-y-4"
        validationBehavior="native"
        validationErrors={errors}
        onSubmit={onSubmit}
        onReset={() => setSubmitted(null)}
      >
        <div className="flex flex-col gap-4 max-w-md">
          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your name";
              }
            }}
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter your name"
          />

          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your email";
              }
              if (validationDetails.typeMismatch) {
                return "Please enter a valid email";
              }
            }}
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          <Textarea
            isRequired
            label="Description"
            placeholder="Enter your request"
            labelPlacement="outside"
          />
          <div className="flex gap-4">
            <Button
              className="w-full bg-blue-600 rounded-lg dark:text-white"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
            <Button
              className="bg-gray-500 rounded-lg text-white dark:text-white"
              type="reset"
              variant="bordered"
            >
              Reset
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ContactUs;
*/
