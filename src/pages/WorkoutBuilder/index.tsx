import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import { useEffect, useState } from 'react';

import { Header } from "../../components/Header";
import { SectionHeader } from "../../components/SectionHeader";
import { Sidebar } from "../../components/Sidebar";
import { ExerciseCard } from '../../components/ExerciseCard';
import { ExerciseRow } from '../../components/ExerciseRow';

import bicepCurls from "../../assets/bicep-curls.png";
import tricepPulldown from "../../assets/tricep-pulldown.png";
import { Container, ExerciseLibrary, Workout } from "./styles";

interface ExercisesProps {
  src: string;
  alt: string;
  name: string;
  type: string;
}

export function WorkoutBuilder() {
  const [exercises, setExercises] = useState<ExercisesProps[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('/api/exercises')
        .then(res => res.json());

      if (search) {
        const filteredData = data.exercises.filter((exercise: ExercisesProps) => searchFilter(exercise, search));
        setExercises(filteredData);
        return;
      }

      setExercises(data.exercises);
    }

    fetchData();
  }, [search]);

  const searchFilter = (exercise: ExercisesProps, search: string) => {
    console.log(exercise);
    return exercise.name.toLowerCase().includes(search.toLowerCase());
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    // const newExercises = [...exercises];
    // const items = exercises.filter(exercise => searchFilter(exercise, event.target.value));

    // console.log(items);
    // setExercises(items);
  };

  const bicepsCard = {
    src: bicepCurls,
    alt: 'bicep-curls',
    name: 'Bicep Curls',
    type: 'ARMS',
  }

  const tricepsCard = {
    src: tricepPulldown,
    alt: 'tricep-pulldown',
    name: 'Tricep Pulldown',
    type: 'ARMS',
  }

  return (
    <Container>
      <Sidebar />
      <Header />
      <SectionHeader sectionName="Workout Builder" />
      <div className="content">
        <Workout>
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
            <div className="table">
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
                  <ExerciseRow cardData={bicepsCard} />
                  <ExerciseRow cardData={tricepsCard} />
                  <ExerciseRow cardData={bicepsCard} />
                </tbody>
              </table>
            </div>
            <div className="drop-area">
              <RiIcons.RiArrowDownCircleFill />
              <h1>Drop Exercise Here To Add To This Workout</h1>
            </div>
            <button className="add-more">
              + Add Rest
            </button>
          </div>
        </Workout>
        <ExerciseLibrary>
          <h1 className="title">
            Exercise Library
          </h1>
          <div className="searchbar">
            <div className="searchbar-options search">
              <label htmlFor="search">Search</label>
              <input
                placeholder="Search exercises..."
                type="text"
                name="search"
                id="search"
                onChange={(event) => handleSearch(event)}
              />
              <FaIcons.FaSearch />
            </div>
            <div className="searchbar-options">
              <label htmlFor="type">Type</label>
              <select name="type" id="type">
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <button className="add-more">
            + Add A Custom Exercise
          </button>
          <div className="exercise-list">
            {exercises.map((exercise, index) => {
              return (
                <ExerciseCard key={index} cardData={exercise} />
              )
            })}
          </div>
          <button className="load-more">
            Load More Exercises
          </button>
        </ExerciseLibrary>
      </div>
    </Container>
  )
}