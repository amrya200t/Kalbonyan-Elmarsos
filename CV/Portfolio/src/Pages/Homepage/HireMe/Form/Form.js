import React, { useEffect, useRef, useState } from "react";
import { BiMessageDetail, BiSend } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import emailjs from "@emailjs/browser";
import Input from "./Input";

export default function Form() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  // const [responseMessage, setResponseMessage] = useState();
  const form = useRef();

  const sendMessageHandler = (e) => {
    e.preventDefault();

    setIsSending((prev) => !prev);
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSending(false);
          // setResponseMessage(result.text);
          setFormSubmitted(true);
          e.target.reset();
        },
        (error) => {
          setIsSending(false);
          // setResponseMessage(error.text);
          setFormSubmitted(true);
        }
      );
  };

  useEffect(() => {
    if (!formSubmitted) return;
    const waitingTime = setTimeout(() => {
      setFormSubmitted(false);
    }, 3500);

    return () => {
      clearTimeout(waitingTime);
    };
  }, [formSubmitted]);

  return (
    <form
      ref={form}
      method="POST"
      className="p-4 drop-shadow-none grid grid-cols-2 gap-4"
      onSubmit={sendMessageHandler}
    >
      <Input
        id="full_name"
        name="Full Name"
        type="text"
        placeholder="Amr Ezzat"
        isRequired={true}
      />

      <Input
        id="user_email"
        name="Email address"
        type="email"
        placeholder="amr@amrezzat.com"
        isRequired={true}
      />

      <Input
        id="message_title"
        name="Title"
        type="text"
        placeholder="Message Title"
        isRequired={true}
        title={true}
      />

      <div className="flex flex-col gap-2 col-span-2">
        <label
          htmlFor="message"
          className="text-lightGold flex gap-2 items-center font-semibold"
        >
          <BiMessageDetail size="1.5rem" />
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Type you Message here..."
          className="rounded-md w-full p-3 bg-light text-darkColor font-poppins resize-none"
        />
      </div>

      <button
        type="submit"
        value="Send"
        className="ease-in transition-all duration-300 border px-4 py-2 text-gold border-gold bg-transparent hover:bg-darkGold hover:text-light active:bg-darkGold active:text-light rounded-md max-w-max h-fit flex justify-center items-center gap-2"
      >
        {isSending && !formSubmitted && <ImSpinner2 className="animate-spin" />}
        {!isSending && formSubmitted && <FaCheckCircle />}
        {!isSending && !formSubmitted && <BiSend />}
        Send Message
      </button>
    </form>
  );
}
