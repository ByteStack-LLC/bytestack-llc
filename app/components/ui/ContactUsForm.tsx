import { useState, useEffect } from "react";
import { Form, Input, Button } from "@heroui/react";
import { Textarea } from "@heroui/input";

const ContactUsForm = () => {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const onSubmit = (e) => {
    e.prevenDefault();
  };

  return (
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
            className="w-full bg-blue-600 rounded-lg"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
          <Button
            className="bg-gray-500 rounded-lg"
            type="reset"
            variant="bordered"
          >
            Reset
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ContactUsForm;
