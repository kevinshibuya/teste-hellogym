import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 7rem;

  .content {
    section {
      padding: 2rem;

      &.workout {
        display: flex;
        flex-direction: column;
        background: var(--background);

        h1 {
          text-transform: uppercase;
          color: var(--highlight-1);
          font-size: 1.125rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        label {
          font-weight: 800;
          margin-bottom: 0.4rem;
        }

        input {
          padding: 0.7rem 0.4rem;
          border: 2px solid #dde1e3;
          margin-bottom: 1rem;
        }

        textarea {
          padding: 0.7rem 0.4rem;
          border: 2px solid #dde1e3;
          margin-bottom: 1rem;
          height: 120px;
          resize: none;
        }
      }
    }

    .circuit-container {
      .button-wrapper {
        width: 100%;
        background: #e1e1e2;
        padding: 1rem;

        button {
          background: linear-gradient(-90deg, #ff5733, #900c3f);
          padding: 0.5rem 1rem;
          color: #fff;
          text-transform: uppercase;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 0.2rem;
        }
      }

      table {
        width: 100%;
        border-collapse: collapse;

        thead {
          background: var(--box-background);

          th {
            color: #FFF;
          }
        }

        tbody {
          tr.circuit {

            td {
              display: flex;
              justify-content: center;
            }
          }
        }
      }
    }
  }
`