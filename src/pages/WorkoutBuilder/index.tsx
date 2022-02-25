import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

import { Header } from "../../components/Header";
import { SectionHeader } from "../../components/SectionHeader";
import { Sidebar } from "../../components/Sidebar";

import bicepCurls from "../../assets/bicep-curls.png";
import { Container } from "./styles";

export function WorkoutBuilder() {
  return (
    <Container>
      <Sidebar />
      <Header />
      <SectionHeader sectionName="Workout Builder" />
      <div className="content">
        <section className="workout">
          <h1 className="title">Workout</h1>
          <label htmlFor="name">Workout Name</label>
          <input className="workout-name" placeholder="Your workout name..." type="text" name="name" id="name" />
          <label htmlFor="optional">Optional Instructions</label>
          <textarea placeholder="A short summary or general cues etc..." name="optional" id="optional" />
          <div className="circuit-container">
            <div className="button-wrapper">
              <button className="create-circuit">
                Create Circuit
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" name="" id="" /></th>
                  <th>Exercise</th>
                  <th>Sets</th>
                  <th>Input</th>
                  <th>Rest</th>
                </tr>
              </thead>
              <tbody>
                <tr className="circuit">
                  <td colSpan={5}>
                    <div className="circuit-wrap">
                      <div>
                        <p>Circuit</p>
                        <input type="number" />
                        <label htmlFor="rounds">Rounds</label>
                      </div>
                      <div>
                        <button>Ungroup</button>
                        <button className="draggable">
                          <MdIcons.MdOutlineDragIndicator />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="exercise">
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="exercise-wrap">
                      <img src={bicepCurls} alt="bicep-curls" />
                      <p>Bicep Curls</p>
                    </div>
                  </td>
                  <td><input type="number" /></td>
                  <td>
                    <div className="exercise-wrap input">
                      <select className="input-select">
                        <option value="text">Text</option>
                      </select>
                      <input type="text" placeholder="reps, tempo, etc." />
                    </div>
                  </td>
                  <td>
                    <div className="exercise-wrap rest">
                      <select>
                        <option value="0">None</option>
                        <option value="30">30sec</option>
                        <option value="60">60sec</option>
                      </select>
                      <div className="options">
                        <button>
                          <MdIcons.MdClose className="close" />
                        </button>
                        <button>
                          <MdIcons.MdOutlineDragIndicator />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="drop-area">
              <RiIcons.RiArrowDownCircleFill />
              <h1>Drop Exercise Here To Add To This Workout</h1>
            </div>
            <button className="add-more">
              + Add Rest
            </button>
          </div>
        </section>
        <section className="exercise-library">

        </section>
      </div>
    </Container>
  )
}