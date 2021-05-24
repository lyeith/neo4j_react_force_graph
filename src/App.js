import {Container, Row} from "react-bootstrap";
import {createDriver, Neo4jProvider} from "use-neo4j";

import './App.css';
import GraphContainer from './components/GraphContainer'
import LabelFilter from './components/LabelFilter'
import {LabelProvider} from "./components/LabelProvider";

import db_conf from './conf/db.js'

function App() {
  const driver = createDriver(db_conf.scheme, db_conf.uri, db_conf.port, db_conf.username, db_conf.password)

  return (
    <div className="App">
      <Neo4jProvider driver={driver}>
        <LabelProvider>
          <Container>
            <Row>
              <GraphContainer className="Force-graph"/>
            </Row>
            <Row>
              <LabelFilter/>
            </Row>
          </Container>
        </LabelProvider>
      </Neo4jProvider>
    </div>
  );
}

export default App;
