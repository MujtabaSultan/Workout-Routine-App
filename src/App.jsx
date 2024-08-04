// src/App.jsx
import './App.css';

const App = () => {
  const workout = [
    { name: 'push ups', done: true },
    { name: 'running', done: false },
    { name: 'pull ups', done: true },
  ];

  return (
    <>
      <h1>workouts List</h1>
      <ul>
        {workout.map((exercise, index) => (
          <li key={index} className={exercise.done ? 'completed' : 'not-completed'}>
            {exercise.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;