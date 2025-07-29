import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AnimatedButton } from "@/components/magicui/animated-button";
import { ChevronRightIcon, CheckIcon } from "lucide-react";

type FloatingInputProps = {
  id: string;
  label: string;
  type?: string;
  hint?: string;
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
      className={`
        peer block w-full rounded-full border border-blue-600 bg-transparent
        px-6 py-3 focus:border-blue-500 focus:outline-none
        transition-all duration-200
      `}
      {...rest}
    />

    <label
      htmlFor={id}
      className={`
        absolute left-6 text-black dark:text-white
        transition-all duration-200
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
        peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-sm peer-focus:text-blue-400
        peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-sm
      `}
    >
      {label}
    </label>

    {hint && (
      <p
        className={`
          absolute left-6 bottom-2 text-xs text-gray-600 dark:text-gray-300
          opacity-0 transition-opacity duration-200
          peer-focus:opacity-100 peer-not-placeholder-shown:opacity-100
        `}
      >
        {hint}
      </p>
    )}
  </div>
);
export const Contact = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-12 text-center">Contacto</h1>
      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
        <div className="flex md:flex-col justify-center items-center gap-8 md:gap-6 md:pr-12 md:border-r border-gray-200 dark:border-gray-700 w-full md:w-auto space-y-6">
          <a
            href="mailto:contacto@vinolink.com"
            className="group flex flex-col items-center"
          >
            <SiGmail className="size-8 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 hover:scale-[1.05] transform transition-all duration-300 ease-in-out dark:hover:scale-[1.05]" />
          </a>
          <a
            href="https://www.linkedin.com/in/matias-diaz-7aa06831b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <FaLinkedin className="size-8 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 hover:scale-[1.05] transform transition-all duration-300 ease-in-out dark:hover:scale-[1.05]" />
          </a>
          <a
            href="https://github.com/equinox-1092"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <FaGithub className="size-8 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-500 hover:scale-[1.05] transform transition-all duration-300 ease-in-out dark:hover:scale-[1.05]" />
          </a>
        </div>

        <form className="flex flex-col gap-6 flex-1 w-full max-w-md mx-auto px-2">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-xs text-gray-600 dark:text-gray-300 font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="off"
              className="bg-transparent border-0 border-b border-blue-600 focus:border-blue-400 focus:ring-0 outline-none px-1 py-2 transition-colors text-base"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-xs text-gray-600 dark:text-gray-300 font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="off"
              required
              className="bg-transparent border-0 border-b border-blue-600 focus:border-blue-400 focus:ring-0 outline-none px-1 py-2 transition-colors text-base"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-xs text-gray-600 dark:text-gray-300 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="bg-transparent border-0 border-b border-blue-600 focus:border-blue-400 focus:ring-0 outline-none px-1 py-2 transition-colors text-base resize-none"
            ></textarea>
          </div>
          <AnimatedButton className="w-40 flex justify-center items-center">
            <span className="group inline-flex items-center">
              Send
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Sent
            </span>
          </AnimatedButton>
        </form>
      </div>
    </div>
  );
};
