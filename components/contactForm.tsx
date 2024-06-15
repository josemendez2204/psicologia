import React from "react";
import { useState, KeyboardEvent } from "react";
import { useForm } from "react-hook-form";
import Errormessage from "./errorMessage";
import axios from "axios";
import SentSuccess from "./formSentSuccess";

function ContactForm() {
  const [formSent, setFormSent] = useState(false);
  const form = useForm<FormValues>();
  type FormValues = {
    firstName: string;
    lastName: string;
    tel: number;
    email: string;
    message: string;
  };

  const handleTelKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  const { register, control, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = async (data: FormValues) => {
    try {
      const url = process.env.NEXT_PUBLIC_BASE_URL;
      if (typeof url === "string") {
        await axios.post(url as string, data);
        setFormSent(true);
        setTimeout(() => {
          setFormSent(false);
        }, 3000);
        reset();
      } else {
        throw new Error("BASE_URL is not defined or is not a string.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {formSent && <SentSuccess />}
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-md border-black bg-white bg-opacity-75 rounded-xl border-[1px] py-5 my-2">
          <form onSubmit={handleSubmit(onSubmit)} className="px-4" noValidate>
            <h1 className="text-center font-extrabold text-lg">¡Contáctame!</h1>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <label htmlFor="firstName" className="block font-medium mb-1">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "primer nombre requerido",
                    },
                  })}
                  className="w-full border-gray-400 border-[1px] py-2 px-3"
                  placeholder="Nombre"
                />
                {errors.firstName?.message && (
                  <Errormessage message={errors.firstName.message} />
                )}
              </div>

              <div className="w-full sm:w-1/2 ml-0 sm:ml-4">
                <label htmlFor="lastName" className="block font-medium mb-1">
                  Apellido:
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "apellido requerido",
                    },
                  })}
                  className="w-full border-gray-400 border-[1px] py-2 px-3"
                  placeholder="Apellido"
                />
                {errors.lastName?.message && (
                  <Errormessage message={errors.lastName.message} />
                )}
              </div>
            </div>

            <div className={`mt-4 ${errors.tel?.message && "mb-5"}`}>
              <label htmlFor="tel" className="block font-medium mb-1">
                Número Telefónico:
              </label>
              <input
                type="tel"
                id="tel"
                {...register("tel", {
                  pattern: {
                    value: /^\+?[0-9]{1,3}[\s-]?(\([0-9]+\)|[0-9]+)[\s-]?([0-9]+[\s-]?)*[0-9]+$/,
                    message: "Numero de telefono invalido",
                  },
                })}
                className="w-full border-gray-400 border-[1px] py-2 px-3"
                placeholder="ej: +000000000000"
                onKeyDown={handleTelKeyDown}
              />
              {errors.tel?.message && (
                <Errormessage message={errors.tel.message} />
              )}
            </div>

            <div className={`mt-4 ${errors.email?.message && "mb-5"}`}>
              <label htmlFor="email" className="block font-medium mb-1">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                    message: "email invalido",
                  },
                })}
                className="w-full border-gray-400 border-[1px] py-2 px-3"
                placeholder="tucorreo@gmail.com"
              />
              {errors.email?.message && (
                <Errormessage message={errors.email.message} />
              )}
            </div>

            <div className={`mt-4 ${errors.message?.message && "mb-5"}`}>
              <label htmlFor="message" className="block font-medium mb-1">
                Mensaje:
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: {
                    value: true,
                    message: "mensaje requerido",
                  },
                })}
                rows={5}
                cols={65}
                className="w-full border-gray-400 border-[1px] py-2 px-3"
                placeholder="escribe tu mensaje"
              ></textarea>
              {errors.message?.message && (
                <Errormessage message={errors.message.message} />
              )}
            </div>

            <div className="flex justify-center mt-4">
              <button
                className="bg-black text-white h-9 w-24 rounded-3xl hover:drop-shadow-xl hover:shadow-slate-300S"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
