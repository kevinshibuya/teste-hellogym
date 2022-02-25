import * as MdIcons from 'react-icons/md';

import { Header } from "../../components/Header";
import { SectionHeader } from "../../components/SectionHeader";
import { Sidebar } from "../../components/Sidebar";

import { Container } from "./styles";

export function WorkoutBuilder() {
  return (
    <Container>
      <Sidebar />
      <Header />
      <SectionHeader sectionName="Workout Builder" />
      <div className="content">
        <section className="workout">
          <h1>Workout</h1>
          <label htmlFor="name">Workout Name</label>
          <input placeholder="Your workout name..." type="text" name="name" id="name" />
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
                    <div>
                      <p>Circuit</p>
                      <input type="number" name="rounds" id="rounds" />
                      <label htmlFor="rounds">Rounds</label>
                    </div>
                    <div>
                      <button>Ungroup</button>
                      <MdIcons.MdOutlineDragIndicator />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="exercise-library">

        </section>
      </div>
    </Container>
  )
}