import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  max-width: 370px;
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 0 20px;
  max-width: 370px;
  margin: 40px auto;

  display: flex;
  align-items: center;
  justify-content: center;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 19px;

    background-color: var(--color-gray-3);
    width: 100%;
    padding: 20px 18px;
    margin-bottom: 20px;

    h1 {
      font: 700 14.4px/22.4px 'Inter';
      color: var(--color-gray-0);
    }

    p {
      font: 600 10px/14.5px 'Inter';
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
    margin-top: 5px;
  }

  input {
    padding: 9px 13px;
    background-color: var(--color-gray-2);
    border: 1px solid var(--color-gray-4);
    &:focus {
      border: 1px solid var(--color-gray-0);
    }

    border-radius: 4px;
    width: 100%;

    font: 400 13px/21px 'Inter';
    color: var(--color-gray-0);
  }

  @media (min-width: 768px) {
    label {
      font: 400 12.18/0px 'Inter';
    }

    input {
      font: 400 16.24px/26.4px 'Inter';
    }
  }
`;

export const Input = styled.div`
  padding: 9px 13px;
  background-color: var(--color-gray-2);
  border-radius: 4px;
  ${({ focus }) =>
    !focus
      ? css`
          border: 1px solid var(--color-gray-4);
        `
      : css`
          border: 1px solid var(--color-gray-0);
        `}

  width: 100%;

  display: flex;
  align-items: center;
  font: 400 13px/21px 'Inter';
  color: var(--color-gray-0);

  input {
    border: none;
    padding: 0px;

    &:focus {
      border: none;
    }
  }

  .icon,
  .icon-hidden {
    color: var(--color-gray-1);
  }
`;

export const Entrar = styled.button`
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 9px 0px;
  margin: 5px 0;
  cursor: pointer;

  color: #fff;
  font: 500 12.8px/21.1px 'Inter';

  ${({ errors }) =>
    errors.email?.message || errors.password?.message
      ? css`
          background-color: var(--color-primary-Negative);
        `
      : css`
          background-color: var(--color-primary);
        `}

  @media (min-width: 768px) {
    font: 500 16px/26.4px 'Inter';
  }
`;

export const Cadastrar = styled(Link)`
  background-color: var(--color-gray-1);
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 9px 0px;
  margin: 5px 0;
  color: #fff;
  font: 500 12.8px/21.1px 'Inter';
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  @media (min-width: 768px) {
    font: 500 16px/26.4px 'Inter';
  }
`;

export const ErrorMsg = styled.span`
  font: 400 12px/18px 'Inter';
  color: var(--negative);
`;
