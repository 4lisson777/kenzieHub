import styled, { css } from 'styled-components';

interface IEnableButton {
  value: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  background-color: rgba(18, 18, 20, 0.298);
  padding: 0 13px;

  .modal-box {
    background-color: #635f5f;
    width: 100%;
    max-width: 370px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 40px;
      padding: 10px 16px;
      background-color: var(--color-gray-2);

      h1 {
        font: 700 11.23px/19.25px 'Inter';
        @media (min-width: 768px) {
          font-size: 14px;
        }
      }
    }
    @media (min-width: 768px) {
      max-width: 400px;

      div {
        height: 45px;
      }
    }
  }
`;

export const Close = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  color: var(--color-gray-1);
  border: none;
  width: 15px;
  font-size: 20px;
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

  &:focus {
    border: 1px solid var(--color-gray-0);
    color: var(--color-gray-0);
  }

  @media (min-width: 768px) {
    font: 400 16.24px/26.4px 'Inter';
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  width: 100%;
  padding: 18px 20px;
  background-color: var(--color-gray-3);

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

    &:focus {
      border: 1px solid var(--color-gray-0);
    }
  }

  @media (min-width: 768px) {
    gap: 15px;
    label {
      font: 400 12.18/0px 'Inter';
    }

    input {
      font: 400 16.24px/26.4px 'Inter';
    }
  }

  /* .editTech {
    display: flex;
  } */
`;

export const ErrorMsg = styled.span`
  font: 400 12px/18px 'Inter';
  color: var(--negative);
`;

export const Buttons = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 18px;

  width: 100%;
  margin-top: 5px;

  button {
    border: none;
    border-radius: 4px;
    width: 60%;
    padding: 9px 0px;
    cursor: pointer;

    color: #fff;
    font: 500 12.8px/21.1px 'Inter';

    ${({ value }: IEnableButton) =>
      value
        ? css`
            background-color: var(--color-primary);
          `
        : css`
            background-color: var(--color-primary-Negative);
          `}
  }

  button + button {
    width: 40%;
    background-color: var(--color-gray-1);
  }

  @media (min-width: 768px) {
    font: 500 16px/26.4px 'Inter';
    margin: 10px 0;
  }
`;
