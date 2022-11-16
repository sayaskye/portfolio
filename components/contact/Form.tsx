import { FormEvent, useState } from "react";

import axios from "axios";
import { FormattedMessage } from "react-intl";

interface ServerState {
  submitting: boolean;
  status?: {
    ok: boolean;
    msg: JSX.Element;
  } | null;
}

const Form = () => {
  const [serverState, setServerState] = useState<ServerState>({
    submitting: false,
    status: null,
  });
  const hanndleCloseNotification = () => {
    setServerState({
      submitting: false,
      status: null,
    });
  };
  const handleServerResponse = (
    ok: boolean,
    msg: JSX.Element,
    form: HTMLFormElement
  ) => {
    setServerState({
      submitting: false,
      status: {
        ok,
        msg,
      },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/meqvqpka",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(
          true,
          <FormattedMessage id="contact.confirm" />,
          form
        );
      })
      .catch((r) => {
        handleServerResponse(
          false,
          <FormattedMessage id="contact.fail" />,
          form
        );
      });
  };
  const inputClass = `text-black rounded-md border border-transparent 
                      focus:outline-none focus:ring-2 
                      focus:ring-blue-450 focus:border-transparent 
                      items-center bg-gray-300 px-5 py-2 font-bold mt-1`;

  const buttonClass = `text-main-lightblue dark:text-main-blue hover:text-black 
                      dark:hover:text-white rounded-full py-2 px-20 text-lg font-bold w-auto 
                      bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 
                      dark:hover:bg-main-blue/30 duration-300 ease-in my-9 self-center 
                      border-none cursor-pointer`;
  return (
    <div className=" font-bold mx-3 lg:mx-0 dark:text-white ">
      <div className="container mx-auto ">
        <div className="mx-auto lg:mx-20 xl:mx-48 duration-300 ease-in">
          <h2 className="text-5xl my-10 text-center text-main-lightblue dark:text-main-blue duration-300 ease-in">
            <FormattedMessage id="contact.title2" />
          </h2>
          {serverState.status && (
            <button
              className={
                !serverState.status.ok
                  ? "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-3 w-full cursor-pointer"
                  : "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-3 w-full cursor-pointer"
              }
              onClick={hanndleCloseNotification}
            >
              {serverState.status.msg}
            </button>
          )}
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col justify-between content-between "
          >
            <label htmlFor="nombre">
              <FormattedMessage id="contact.name" />
            </label>
            <input
              className={inputClass}
              id="nombre"
              type="text"
              name="nombre"
              placeholder="John Doe"
              required
            />{" "}
            <br />
            <label htmlFor="telefono">
              <FormattedMessage id="contact.phone" />
            </label>
            <input
              className={inputClass}
              id="telefono"
              type="text"
              name="telefono"
              placeholder="(123) 456 7890"
              required
            />{" "}
            <br />
            <label htmlFor="email">
              <FormattedMessage id="contact.email" />
            </label>
            <input
              className={inputClass}
              id="email"
              type="email"
              name="email"
              placeholder="Example@example.com"
              required
            />{" "}
            <br />
            <label htmlFor="subject">
              <FormattedMessage id="contact.subject" />
            </label>
            <input
              className={inputClass}
              id="subject"
              type="text"
              name="subject"
              placeholder="I need to quote a website"
              required
            />{" "}
            <br />
            <label htmlFor="message">
              <FormattedMessage id="contact.message" />
            </label>
            <textarea
              className={`scrollbarhidde ${inputClass}`}
              id="message"
              name="message"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis necessitatibus atque laudantium. "
              required
            ></textarea>
            <button
              className={buttonClass}
              type="submit"
              disabled={serverState.submitting}
            >
              <FormattedMessage id="contact.button" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
