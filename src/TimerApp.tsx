import React, { useState, useEffect } from "react";
import getTimer from "./util/getTimer";
import TimerAppContainer from "./styles/TimerApp";
function TimerApp() {
  const defaultCountdown = 2 * 60 * 60 - 1;
  const [timer, setTimer] = useState(defaultCountdown);
  const [isCounting, setIsCounting] = useState(false);
  const { hour, min, sec } = getTimer(timer);
  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        updateTimer();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCounting]);

  const updateTimer = () => {
    setTimer((remainTimer) => (remainTimer >= 1 ? remainTimer - 1 : 0));
  };

  const handleOnStart = () => {
    setIsCounting(true);
  };

  const handleOnReset = () => {
    setTimer(defaultCountdown);
    setIsCounting(false);
  };

  return (
    <TimerAppContainer>
      <div className="timer_app_time">
        <div className="timer_app_hour">
          <span>{hour}</span>
        </div>

        <div className="timer_app_min">
          <span>{min}</span>
        </div>

        <div className="timer_app_sec">
          <span>{sec}</span>
        </div>
      </div>

      {isCounting && (
        <div className="timer_app_message">
          <p>Countdown started...</p>
        </div>
      )}
      <div className="timer_app_button">
        <button
          onClick={handleOnStart}
          className={`app_button_start ${
            isCounting && "app_button_start_disabled"
          }`}
          disabled={isCounting}
        >
          Start
        </button>
        <button onClick={handleOnReset} className="app_button_reset">
          Reset
        </button>
      </div>
    </TimerAppContainer>
  );
}

export default TimerApp;
