import logo from './logo.svg';
import './App.css';

import ChildrenWithTitle from './ChildrenWithTitle.jsx'
import { FirstReactComponent } from './FirstReactComponent.jsx'
import { ConditionalRenderingComponent } from './ConditionalRenderingComponent.jsx'
import { RenderedList } from './RenderingLists.jsx'
import { InteractionEvents33 } from './InteractionEvents33.jsx'
import { StatefulComponent34 } from './StatefulComponent34.jsx'
import { SynchronizingWithEffects35 } from './SynchronizingWithEffects35.jsx'

function App() {
  return (
    <div>
    {/* <h1>Hello world</h1>
    <p>You look beautiful</p>
    <FirstReactComponent />
    <ChildrenWithTitle title="I am title">
        I am children
    </ChildrenWithTitle>
    <ConditionalRenderingComponent
      isBlue={true}
    />
    <ConditionalRenderingComponent
      isBlue={false}
    />
    <RenderedList /> */}
    {/* <InteractionEvents33 /> */}
    {/* <StatefulComponent34 /> */}
    <SynchronizingWithEffects35 />
    </div>
  );
}

export default App;
