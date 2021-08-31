import { FormattedMessage } from 'react-intl'
import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const hanndleCloseNotification = () => {
        setServerState({
            submitting: false,
            status: null
        });
    }
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://formspree.io/f/meqvqpka",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, 
                <FormattedMessage
                    id="contact.confirm"
                    defaultMessage="Message sent correctly, I will contact you as soon as possible."
                />, form);
            })
            .catch(r => {
                handleServerResponse(false, 
                <FormattedMessage
                    id="contact.fail"
                    defaultMessage="Sorry, something went wrong, please try again later or email me directly, thank you."
                />, form);
            });
    };
    return (
        <div className=" font-bold mx-3 lg:mx-0 dark:text-white ">
            <div className="container mx-auto ">
                <div className="mx-auto lg:mx-20 xl:mx-48 duration-300 ease-in">
                    <div className="items-center ">
                        <h2 className="text-5xl my-10 text-main-lightblue dark:text-main-blue duration-300 ease-in">
                            <FormattedMessage
                                id="contact.title2"
                                defaultMessage="Send me a message"
                            />
                        </h2>
                            {serverState.status && (
                                <div>
                                    <p className={!serverState.status.ok ? "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-3" : "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-3"}>
                                        <button className="" onClick={hanndleCloseNotification}>
                                            {serverState.status.msg}
                                        </button>
                                    </p>
                                </div>
                            )}
                        <form onSubmit={handleOnSubmit} className="flex flex-col justify-between content-between ">
                            
                            <label htmlFor="nombre">
                                <FormattedMessage
                                    id="contact.name"
                                    defaultMessage="Your name:"
                                />
                            </label>
                            <input 
                                className=" text-black rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-450 focus:border-transparent items-center bg-gray-300 px-5 py-2 font-bold mt-1" 
                                id="nombre" type="text" name="nombre" placeholder="John Doe" required /> <br />

                            <label htmlFor="telefono">
                                <FormattedMessage
                                    id="contact.phone"
                                    defaultMessage="Your phone:"
                                />
                            </label>
                            <input 
                                className=" text-black rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-450 focus:border-transparent items-center bg-gray-300 px-5 py-2 font-bold mt-1" 
                                id="telefono" type="text" name="telefono" placeholder="(123) 456 7890"  required /> <br />

                            <label htmlFor="email">
                                <FormattedMessage
                                    id="contact.email"
                                    defaultMessage="Your email:"
                                />
                            </label>
                            <input 
                                className=" text-black rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-450 focus:border-transparent items-center bg-gray-300 px-5 py-2 font-bold mt-1" 
                                id="email" type="email" name="email" placeholder="Example@example.com" required /> <br />

                            <label htmlFor="subject">
                                <FormattedMessage
                                    id="contact.subject"
                                    defaultMessage="Your subject:"
                                />
                            </label>
                            <input 
                                className=" text-black rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-450 focus:border-transparent items-center bg-gray-300 px-5 py-2 font-bold mt-1" 
                                id="subject" type="text" name="subject" placeholder="I need to quote a website" required /> <br />
                            
                            <label htmlFor="message">
                                <FormattedMessage
                                    id="contact.subject"
                                    defaultMessage="Your message:"
                                />
                            </label>
                            <textarea 
                                className="scrollbarhidden text-black rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-450 focus:border-transparent items-center bg-gray-300 px-5 py-2 font-bold mt-1" 
                                id="message" name="message" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis necessitatibus atque laudantium. " required ></textarea>
                            <button className=" text-main-lightblue dark:text-main-blue hover:text-black dark:hover:text-white rounded-full py-2 px-20 text-lg font-bold w-auto bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in my-9 self-center" type="submit" disabled={serverState.submitting}>
                                <FormattedMessage
                                    id="contact.button"
                                    defaultMessage="Send"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;