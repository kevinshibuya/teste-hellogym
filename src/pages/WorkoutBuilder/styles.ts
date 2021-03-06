import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 6rem;

  @media (max-width: 540px) {
    margin-left: 4rem;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-flow: column;

    section {
      padding: 2rem;
      display: flex;
      flex-direction: column;

      .title {
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

      input, textarea, select {
        padding: 0.7rem 0.4rem;
        border: 2px solid #dde1e3;
      }
      
      button.add-more {
        color: var(--highlight-2);
        font-weight: 800;
      }
    }

    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Workout = styled.section`
  background: var(--background);

  input.workout-name {
    margin-bottom: 1rem;
  }

  textarea {
    margin-bottom: 1rem;
    height: 120px;
    resize: none;
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

    .table {
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: 0.5rem 0.4rem;
        text-align: center;
        vertical-align: middle;
      }

      input[type="number"] {
        width: 2.4rem;
        -webkit-appearance: none;
        margin: 0;
        text-align: center;
      }

      input[type="checkbox"] {
        width: 1.4rem;
        height: 1.4rem;
        margin-top: 2px;
      }

      select {
        height: 100%;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      thead {
        background: var(--box-background);

        th {
          color: #FFF;

          & + th {
            text-align: left;
          }
        }
      }

      tbody {
        input, select {
          height: 3rem;
        }

        tr.circuit {
          .circuit-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
              font-weight: 800;
            }

            input {
              margin: 0 1rem;
            }

            label {
              margin: 0;
              font-weight: 400;
            }

            div {
              display: flex;
              align-items: center;
              justify-content: center;

              button {
                color: var(--highlight-3);
                font-weight: 800;
                margin-right: 1rem;

                & + button {
                  margin: 0;
                }
              }

              svg {
                width: 2rem;
                height: 2rem;
                color: #8c9aaa;
              }
            }
          }
        }
      }
    }
  }
  
  .drop-area {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    margin: 2rem 0;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%2347B3DFFF' stroke-width='4' stroke-dasharray='2%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    color: var(--highlight-3);
    
    svg {
      width: 30px;
      height: 30px;
      margin-right: 0.75rem;
    }

    h1 {
      font-size: 1rem;
    }
  }
`;

export const ExerciseLibrary = styled.section`
  .searchbar {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 1rem;

    input, select {
      height: 3rem;
    }

    input {
      width: 90%;
      min-width: 100px
    }

    select {
      width: 100%;
    }

    .searchbar-options {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;

      &.search {
        position: relative;

        svg {
          position: absolute;
          right: 14%;
          top: 2.625rem;
          color: #dde1e3;
        }
      }
    }
  }
  
  .add-more {
    align-self: flex-start;
    margin-bottom: 1rem;
  }

  .exercise-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 1600px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    
    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    
    @media (max-width: 580px) {
      grid-template-columns: 1fr 1fr;
    }
    
    @media (max-width: 400px) {
      grid-template-columns: 1fr;
    }
  }

  button.load-more {
    font-weight: 800;
    color: var(--highlight-3);
  }
`;