import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(54, 54, 54, 0.611);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* font-size: calc(10px + 2vmin); */
  color: white;

  position: fixed;
  width: 100%;

  .loading-logo {
    height: 120px;
    pointer-events: none;
    opacity: 0.6;

    @media (min-width: 768px) {
      height: 150px;
      opacity: 0.8;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .loading-logo {
      animation: loading-logo-spin infinite 0.9s normal;
    }
  }

  @keyframes loading-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
