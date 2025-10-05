import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mnndrrgv");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <section id="contact" className="mb-8">
            <h1 className="text-3xl text-center text-black dark:text-white font-semibold mb-8 sm:text-4xl md:text-6xl">Entre em contato</h1>
            <form onSubmit={handleSubmit} className="flex flex-col flex-wrap gap-4 p-4 bg-[var(--cor-200)] w-4/5 mx-auto lg:flex-row">
                <div className="flex flex-col flex-[1_1_calc(50%-0.5rem)]">
                    <label htmlFor="name" className="mb-2">
                        Nome:
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome..."
                        className="duration-50 ease-in-out px-2 outline-none focus:border-b focus:px-4"
                    />
                </div>
                <div className="flex flex-col flex-[1_1_calc(50%-0.5rem)]">
                    <label htmlFor="email" className="mb-2">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Digite o seu email..."
                        className="duration-50 ease-in-out px-2 outline-none focus:border-b focus:px-4"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="flex flex-col w-full mt-5">
                    <label htmlFor="message" className="mb-2">
                        Mensagem:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Digite sua mensagem..."
                        className="border-1 w-full mb-5 px-2 outline-none focus:px-4 lg:w-[calc(50%-0.5rem)]"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting} className="border w-20 mx-auto duration-300 cursor-pointer hover:bg-[var(--black-500)] hover:text-[var(--cor-100)] hover:border-[var(--black-500)] hover:scale-120">
                        Enviar!
                    </button>
                </div>

            </form>
        </section>
    );
};

export default Contact;