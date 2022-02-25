import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 6rem;

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;

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

        tr.exercise {
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
        }
      }
    }
  }
  
  .drop-area {
    display: flex;
    align-items: center;
    justify-content: center;
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

    .exercise-card {
      min-width: 10rem;
      height: 12rem;
      text-align: center;
      -webkit-box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1); 
      box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1);

      img {
        width: 100%;
        height: 7rem;
      }

      h1 {
        font-size: 1rem;
        padding: 1rem;
        font-weight: 600;
        margin-top: -6px;
      }

      p {
        background: linear-gradient(-90deg, #ff5733, #900c3f);
        color: #fff;
        font-weight: 800;
        padding: 0.21rem;
      }
    }
  }

  button.load-more {
    font-weight: 800;
    color: var(--highlight-3);
  }
`;