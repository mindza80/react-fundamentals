import logo from './logo.svg';
import './App.css';

import ChildrenWithTitle from './ChildrenWithTitle.jsx'
import { FirstReactComponent } from './FirstReactComponent.jsx'
import { ConditionalRenderingComponent } from './ConditionalRenderingComponent.jsx'
import { RenderedList } from './RenderingLists.jsx'

function App() {
  return (
    <div>
    <h1>Hello world</h1>
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
    <RenderedList />
    </div>
  );
}

export default App;
