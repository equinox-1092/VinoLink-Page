import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AnimatedButton } from "@/components/magicui/animated-button";
import { ChevronRightIcon, CheckIcon } from "lucide-react";

type FloatingInputProps = {
  id: string;
  label: string;
  type?: string;
  hint: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FloatingInput: React.FC<FloatingInputProps> = ({
  id,
  label,
  type = "text",
  hint,
  ...rest
}) => (
  <div className="relative w-full group">
    <input
      id={id}
      type={type}
      placeholder=" "
      className={`peer block w-full rounded border border-blue-600 bg-transparent
        px-3 py-2 focus:border-blue-500 focus:outline-none
        transition-colors`}
      {...rest}
    />
    <label
      htmlFor={id}
      className={`absolute left-3 top-2 px-1 text-black dark:text-white
        transition-all duration-200
        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
        peer-focus:top-[-0.75rem] peer-focus:text-sm peer-focus:text-blue-400
        peer-not-placeholder-shown:top-[-0.75rem] peer-not-placeholder-shown:text-sm`}
    >
      {label}
    </label>
    <p
      className={`absolute left-3 bottom-2 text-xs text-black dark:text-white
      opacity-0 transition-opacity duration-200
      peer-focus:opacity-100 peer-not-placeholder-shown:opacity-100`}
    >
      {hint}
    </p>
  </div>
);

export const Contact = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl mb-6">Contact</h1>
      <div className="flex w-full max-w-4xl gap-8">
        {/* Columna de iconos */}
        <div className="flex flex-col items-center justify-start space-y-6 p-6">
          <SiGmail className="size-6 cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300" />
          <FaLinkedin className="size-6 cursor-pointer hover:text-blue-600 hover:scale-110 transition-all duration-300" />
          <FaGithub className="size-6 cursor-pointer hover:bg-white hover:text-black hover:rounded-full hover:scale-125 transition-all duration-300" />
        </div>

        {/* Formulario */}
        <div className="flex-1">
          <form className="flex flex-col space-y-6 p-6 w-[600px] rounded-[20px]">
            <FloatingInput id="name" label="Name" hint="Ej. Juan Pérez" />
            <FloatingInput
              id="email"
              type="email"
              label="Email"
              hint="Ej. example@example.com"
            />
            <div className="relative w-full group">
              <textarea
                id="message"
                placeholder=" "
                rows={4}
                className={`peer block w-full rounded border border-blue-600 bg-transparent
              px-3 py-2 focus:border-blue-500 focus:outline-none
              transition-colors resize-none`}
              />
              <label
                htmlFor="message"
                className={`absolute left-3 top-2 px-1 text-black dark:text-white
              transition-all duration-200
              peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
              peer-focus:top-[-0.75rem] peer-focus:text-sm peer-focus:text-blue-400
              peer-not-placeholder-shown:top-[-0.75rem] peer-not-placeholder-shown:text-sm`}
              >
                Message
              </label>
              <p
                className={`absolute left-3 bottom-2 text-xs text-black
            opacity-0 transition-opacity duration-200
            peer-focus:opacity-100 peer-not-placeholder-shown:opacity-100`}
              >
                Write your message here...
              </p>
            </div>

            <AnimatedButton type="submit" className="w-40 self-end">
              <span className="group inline-flex items-center">
                Send
                <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="group inline-flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                Sent
              </span>
            </AnimatedButton>
          </form>
        </div>
      </div>
    </div>
  );
};
