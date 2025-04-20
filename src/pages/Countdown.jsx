import React, { useEffect, useState } from "react";

function Countdown() {
  const [targetTime, setTargetTime] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    let timer;
    if (targetTime) {
      timer = setInterval(() => {
        const now = new Date();
        const countdown = new Date(targetTime) - now;

        if (countdown <= 0) {
          clearInterval(timer);
          setTimeLeft("Time's up!");

          const utterance = new SpeechSynthesisUtterance("Time's up!");
          speechSynthesis.speak(utterance);

          setTimeout(() => {
            setTargetTime("");
            setTimeLeft(null);
          }, 5000);
        } else {
          const hours = Math.floor(countdown / (1000 * 60 * 60));
          const minutes = Math.floor((countdown / (1000 * 60)) % 60);
          const seconds = Math.floor((countdown / 1000) % 60);

          const formattedTime = `${hours.toString().padStart(2, "0")} : ${minutes
            .toString()
            .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;

          setTimeLeft(formattedTime);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <section className="min-h-[70vh] flex justify-center items-center p-4 sm:p-6 md:p-10">
      <div className="flex flex-col justify-center items-center gap-y-5 w-full max-w-lg text-center">
        <input
          type="datetime-local"
          value={targetTime}
          onChange={(e) => setTargetTime(e.target.value)}
          className="text-base sm:text-lg p-2 sm:p-3 rounded-md shadow-inner shadow-black w-full bg-gray-100 outline-none"
        />
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 break-words">
          {timeLeft || "Set a target time"}
        </div>
      </div>
    </section>
  );
}

export default Countdown;
