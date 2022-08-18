import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 13px;
  max-width: 370px;
  margin: 0 auto;
  img {
    /* height: 17px; */
    width: 105px;
  }

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;

  padding: 35px 13px;

  border-top: 1px solid var(--color-gray-3);
  border-bottom: 1px solid var(--color-gray-3);

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;

    width: 100%;
    max-width: 370px;

    h1 {
      font: 700 18px/28px 'Inter';
      color: var(--color-gray-0);
    }

    p {
      font: 400 12px/22px 'Inter';
      color: var(--color-gray-1);
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      max-width: 800px;
    }
  }
`;

export const Botao = styled.button`
  padding: 5px 25px;
  color: var(--color-gray-0);
  background-color: var(--color-gray-3);
  border: none;
  font: 600 12px/28.42px 'Inter';
  border-radius: 4px;
  text-decoration: none;
  text-align: center;

  @media (min-width: 768px) {
    font: 600 12px/28.42px 'Inter';
  }
`;

export const Main = styled.main`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  gap: 10px;

  padding: 20px 13px;
  max-width: 400px;
  margin: 0 auto;

  .addTech {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      font: 600 16px/18px 'Inter';
    }

    button {
      background-color: var(--color-gray-3);
      border: none;
      color: var(--color-gray-0);
      font-size: 25px;
      font-weight: 500;
      padding: 5px;
      border-radius: 4px;
      width: 35px;
      height: 35px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /* div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    width: 100%;
    max-width: 370px;

    @media (min-width: 768px) {
      max-width: 800px;
    }
  } */

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 22px 8.5px;
    background-color: var(--color-gray-3);
    list-style: none;
    border-radius: 4px;
    margin-top: 8px;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      height: 48px;
      background-color: var(--color-gray-4);
      padding: 12px;
      border-radius: 4px;

      span {
        font: 700 14.21px/24.36px 'Inter';
        color: var(--color-gray-0);
      }

      span + span {
        font: 400 12.18px/22.33px 'Inter';
        color: var(--color-gray-1);
      }

      &:hover {
        background-color: var(--color-gray-2);

        span + span {
          color: var(--color-gray-0);
        }
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 800px;
    margin: 0 auto;

    ul {
      padding: 23px 26px;
    }
  }
`;
