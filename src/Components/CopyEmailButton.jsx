// import { useState } from "react";

// const CopyEmailButton = () => {
//   const [copied, setCopied] = useState(false);
//   const email = "abdulraufchoudhry17@gmail.com";

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(email);
//     setCopied(true);
//     setTimeout(() => {
//       setCopied(false);
//     }, 2000);
//   };
//   return (
//     <button
//       onClick={copyToClipboard}
//       className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
//     >
//       {copied ? (
//         <p className="flex items-center justify-center gap-2">
//           <img
//             src="/Assets/copy-done.svg"
//             className="w-5"
//             alt="email copied icon"
//           />
//           Email has Copied
//         </p>
//       ) : (
//         <p className="flex items-center justify-center gap-2">
//           <img src="/Assets/copy.svg" className="w-5" alt="copy icon" />
//           Copy Email Address
//         </p>
//       )}
//     </button>
//   );
// };

// export default CopyEmailButton;
"use client"

import { useState } from "react"
import { Copy, Check, Mail } from "lucide-react"

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const email = "abdulraufchoudhry17@gmail.com"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative px-6 py-4 text-sm font-medium rounded-2xl
          transition-all duration-300 ease-out
          transform hover:scale-105 active:scale-95
          bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700
          hover:from-blue-500 hover:via-purple-500 hover:to-blue-600
          text-white shadow-lg hover:shadow-xl
          border border-white/20
          overflow-hidden group
          min-w-[14rem]
          ${copied ? "from-green-500 via-emerald-500 to-green-600" : ""}
        `}
        disabled={copied}
      >
        {/* Animated background overlay */}
        <div
          className={`
          absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0
          transform transition-transform duration-700 ease-out
          ${isHovered ? "translate-x-full" : "-translate-x-full"}
        `}
        />

        {/* Ripple effect */}
        <div
          className={`
          absolute inset-0 rounded-2xl
          transition-all duration-300
          ${copied ? "animate-pulse bg-white/10" : ""}
        `}
        />

        {/* Content */}
        <div className="relative flex items-center justify-center gap-2">
          {copied ? (
            <>
              <Check
                className={`
                w-5 h-5 transition-all duration-300
                animate-in zoom-in-50 slide-in-from-left-2
              `}
              />
              <span className="animate-in fade-in slide-in-from-right-2 duration-300">Email Copied!</span>
            </>
          ) : (
            <>
              <div className="relative">
                <Copy
                  className={`
                  w-5 h-5 transition-all duration-300
                  ${isHovered ? "rotate-12 scale-110" : ""}
                `}
                />
                <Mail
                  className={`
                  absolute inset-0 w-5 h-5 transition-all duration-300
                  ${isHovered ? "opacity-0 scale-50 rotate-180" : "opacity-0"}
                `}
                />
              </div>
              <span className="transition-all duration-300">Copy Email Address</span>
            </>
          )}
        </div>

        {/* Shine effect */}
        <div
          className={`
          absolute inset-0 rounded-2xl
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          transform -skew-x-12 transition-transform duration-1000
          ${isHovered ? "translate-x-full" : "-translate-x-full opacity-0"}
        `}
        />
      </button>

      {/* Success particles */}
      {copied && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-2 h-2 bg-green-400 rounded-full
                animate-ping opacity-75
              `}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 100}ms`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CopyEmailButton
