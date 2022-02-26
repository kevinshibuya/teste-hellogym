import * as MdIcons from 'react-icons/md';

import { Container } from './styles';

interface ExerciseRowProps {
  cardData: {
    src: string;
    alt: string;
    name: string;
    type: string;
  }
}

export function ExerciseRow({ cardData }: ExerciseRowProps) {
  return (
    <Container>
      <td><input type="checkbox" /></td>
      <td>
        <div className="exercise-wrap">
          <img src={cardData.src} alt={cardData.alt} />
          <p>{cardData.name}</p>
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
    </Container>
  )
}