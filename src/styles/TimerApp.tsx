import styled from "styled-components";

const TimerAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  height: 100vh;
  .timer_app_time {
    display: flex;
    gap: 1.5rem;
  }
  span {
    font-size: 3.5rem;
    font-family: "Roboto", sans-serif;
  }
  .timer_app_message {
    p {
      font-family: "Roboto", sans-serif;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
  .timer_app_button {
    display: flex;
    gap: 1rem;
    button {
      font-family: "Roboto", sans-serif;
      font-size: 1.3rem;
      cursor: pointer;
      outline: none;
      border: none;
      color: white;
      padding: 0.7rem;
      border-radius: 1rem;
    }
  }
  .app_button_start {
    background-color: green;
  }
  .app_button_start_disabled {
    background-color: rgb(229, 253, 209);
    cursor: not-allowed;
  }
  .app_button_reset {
    background-color: red;
  }
`;

export default TimerAppContainer;
