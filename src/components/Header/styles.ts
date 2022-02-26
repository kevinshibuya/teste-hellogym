import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;

  img {
    height: 4rem;
  }

  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text);

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    .notifications {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 2rem;
      position: relative;

      .notifications-number {
        font-weight: bold;
        background: var(--highlight-1);
        color: #FFF;
        border-radius: 100%;
        height: 20px;
        width: 20px;
        line-height: 22px;
        font-size: 0.625rem;
        position: absolute;
        top: -7px;
        right: -7px;
      }
    }

    .user-details {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 0.875rem;
      }

      svg {
        margin: 0rem;
        color: var(--highlight-1);
        margin: 0 0.5rem;
      }

      .user-icon {
        font-weight: bold;
        background: var(--highlight-1);
        color: #FFF;
        border-radius: 100%;
        height: 40px;
        width: 40px;
        line-height: 42px;
      }
    }
  }

  @media (max-width: 540px) {
    img {
      height: 2rem;
    }
  }
  
  @media (max-width: 420px) {
    img {
      height: 1.5rem;
    }
  }
`