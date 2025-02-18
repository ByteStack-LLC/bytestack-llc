"use client";

import { useState, useEffect } from "react";
import { Form, Input, Button } from "@heroui/react";
import { Textarea } from "@heroui/input";
import { Card } from "@heroui/card";

const ContactUs = () => {
  const [comments, setComments] = useState([]);
  //const [email, setEmail] = useState("");

  useEffect(() => {
    const loadComments = async () => {
      const results = await fetch(`http://localhost:5050/requests`).then(
        (res) => res.json()
      );
      setComments(results);
    };

    loadComments();
  });

  const onSubmit = (e) => {
    e.prevenDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <div className="space-y-10 max-w-3x1 text-center">
        <Card className="justify-center">
          <h1 className="text-lg font-semibold">Contact Us</h1>
          {comments.map((comment) => {
            return (
              <div key={comment._id}>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.text}</p>
                <p>{comment.date}</p>
              </div>
            );
          })}
          <Form onSubmit={onSubmit}>
            <Input></Input>
            <Input></Input>
            <Textarea></Textarea>
            <Button></Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
