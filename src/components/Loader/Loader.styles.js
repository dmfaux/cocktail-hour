import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;

  .loader,
  .loader:before,
  .loader:after {
    background: var(--highlightBg);
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    border-radius: 10px;
  }
  .loader {
    color: var(--highlightBg);
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 11px;
    transform: translateZ(0);
    animation-delay: -0.1s;
    border-radius: 10px;
  }
  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    content: "";
  }
  .loader:before {
    left: -1.5em;
    animation-delay: -0.3s;
  }
  .loader:after {
    left: 1.5em;
  }

  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 2em;
      height: 5em;
    }
  }
`;
