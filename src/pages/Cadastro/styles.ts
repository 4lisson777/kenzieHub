import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  max-width: 370px;
  margin: 0 auto;

  img {
    height: 17px;
    width: 98px;
  }
`;

export const Botao = styled(Link)`
  padding: 5px 25px;
  color: var(--color-gray-0);
  background-color: var(--color-gray-3);
  border: none;
  font: 600 9.6px/23px 'Inter';
  border-radius: 4px;
  text-decoration: none;
  text-align: center;

  @media (min-width: 768px) {
    font: 600 12px/28.42px 'Inter';
  }
`;

export const Container = styled.div`
  padding: 0 20px;
  max-width: 370px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  main {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    gap: 19px;

    background-color: var(--color-gray-3);
    /* width: 320px; */
    width: 100%;
    padding: 20px 18px;
    margin-bottom: 20px;

    h1 {
      font: 700 14.4px/22.4px 'Inter';
      color: var(--color-gray-0);
    }

    p {
      font: 400 9.6px/17.6px 'Inter';
      color: var(--color-gray-1);
    }
    @media (min-width: 768px) {
      h1 {
        font: 700 18px/28px 'Inter';
      }

      p {
        font: 600 12px/18px 'Inter';
      }
    }
  }
  @media (min-width: 768px) {
    max-width: 390px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17.8px;
  width: 100%;

  label {
    font: 400 9.74px/0px 'Inter';
    color: var(--color-gray-0);
    margin-top: 3px;
  }

  input {
    padding: 9px 13px;
    background-color: var(--color-gray-2);
    border-radius: 4px;
    border: 1px solid var(--color-gray-2);
    width: 100%;

    font: 400 13px/21px 'Inter';
    color: var(--color-gray-0);
  }

  button {
    background-color: var(--color-primary-Negative);
    border: none;
    border-radius: 4px;
    width: 100%;
    padding: 9px 0px;
    color: #fff;
    font: 500 12.8px/21.1px 'Inter';
  }

  @media (min-width: 768px) {
    label {
      font: 400 12.18/0px 'Inter';
    }

    input {
      font: 400 16.24px/26.4px 'Inter';
    }

    button {
      font: 500 16.24px/26.4px 'Inter';
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 41px;
  background-color: var(--color-gray-2);
  color: var(--color-gray-1);
  padding: 0 5px;
  font-size: 14px;
  border: none;
  border: 1px solid var(--color-gray-2);
  border-radius: 4px;

  font: 400 13px/21px 'Inter';

  option {
    color: var(--color-gray-1);
    background-color: var(--color-gray-2);
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 4px;
  }

  @media (min-width: 768px) {
    font: 400 16.24px/26.4px 'Inter';
  }
`;

export const ErrorMsg = styled.span`
  font: 400 12px/18px 'Inter';
  color: var(--negative);
`;
