import React, {Component} from 'react';
import Split from './composition/Split.js';
import './App.css';
//import Tooltip from './composition/Tooltip';
//import Messages from './Messages';
//import TheDate from './state/TheDate.js';
//import Counter from './state/Counter.js';
//import HelloWorld from './state-drills/HelloWorld.js';
//import Bomb from './state-drills/Bomb.js';
//import RouletteGun from './state-drills/RouletteGun.js';
import Tabs from './state/Tabs.js';
import Accordian from './state-drills/Accordian.js';


//old tooltip code
/*const firstTooltip = (
  <Tooltip 
  color='#126BCC'
  message='tooltip message'>
    ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip 
  color='hotpink'
  message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={2}>
        {firstTooltip}
        here is one split
        //{ make another tooltip directly inside the App }
        <Tooltip message = 'one more tooltip message'>
          nessersasorboss
        </Tooltip>
      </Split>
      <Split className='right'>
        here is another split
        {secondTooltip}
      </Split>
    </main>
  );
}*/

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends Component {
    render() {
        return (
            <div className="App">
                <Accordian sections={sectionsProp}/>
            </div>
        );
    }
}

export default App;