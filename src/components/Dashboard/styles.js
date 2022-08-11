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
  justify-content: center;

  padding: 35px 13px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    width: 100%;
    max-width: 370px;

    @media (min-width: 768px) {
      max-width: 800px;
    }
  }

  h2 {
    font: 700 18px/28px 'Inter';
    color: var(--color-gray-0);
  }

  p {
    font: 400 16px/24.36px 'Inter';
    color: #fff;
  }
`;
