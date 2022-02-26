import styled from 'styled-components';

export const Container = styled.tr`
  border-bottom: 1px solid #e1e1e2;

  td {
    .exercise-wrap {
      display: flex;
      align-items: center;
      justify-content: space-around;

      &.input {
        justify-content: flex-start;

        .input-select {
          margin-right: 0.4rem;
        }
      }

      &.rest {
        justify-content: space-between;

        .options {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    img {
      width: 50px;
      height: 40px;
      margin-right: 0.4rem;
    }

    p {
      font-weight: 600;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: #8c9aaa;

      &.close {
        width: 1.5rem;
        height: 1.5rem;
        background: #ff4545;
        border-radius: 100%;
        color: #FFFFFF;
        padding: 0.2rem;
        margin: 0 0.4rem;
      }
    }
  }
`;