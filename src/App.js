import './App.css';
import {Profile} from './components/profile/Profile';
import {Skill} from './components/skill/Skill';
import {SKILLS} from './const';

import {Tech} from './components/tech/Tech';
import {TECHS} from './const';

function App() {
  return (
    <div className="App">
      <Profile />

      <div className='title'>Компетенции</div>
      <div className="Skills">
        {SKILLS.map((skill, i) => {
          return (
            <Skill key={i} title={skill} />
          );
        })}
      </div>

      <div className='title'>Технологии</div>
      <div className="Techs">
        {TECHS.map((tech, i) => {
          return (
            <Tech key={i} title={tech} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
