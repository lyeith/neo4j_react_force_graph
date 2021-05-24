import React, {useContext} from 'react'
import {Row} from "react-bootstrap";
import {LabelContext} from "./LabelProvider";

export default function LabelFilter() {
  const {labels, setLabels, nodeLimit, setNodeLimit} = useContext(LabelContext)
  const handleChange = (e) => {
    const label = e.target.value
    const newLabels = labels

    newLabels[label] = e.target.checked
    setLabels({...newLabels})
  }

  const handleLimitChange = (e) => {
    setNodeLimit(e.target.value)
  }
  return (
    <>
      <Row>
        <h1>Paradise Papers Visualization</h1>
      </Row>
      <Row>
        <h4>Entity Filter</h4>
        <div role="group">
          <label>
            <input type="checkbox" name="entities" value="Address" onChange={handleChange}/>
            Address
          </label>
          <label>
            <input type="checkbox" name="entities" value="Entity" onChange={handleChange} defaultChecked/>
            Entity
          </label>
          <label>
            <input type="checkbox" name="entities" value="Intermediary" onChange={handleChange} defaultChecked/>
            Intermediary
          </label>
          <label>
            <input type="checkbox" name="entities" value="Other" onChange={handleChange}/>
            Other
          </label>
          <label>
            <input type="checkbox" name="entities" value="Officer" onChange={handleChange} defaultChecked/>
            Officer
          </label>
        </div>
      </Row>
      <Row>
        <label>
          <input type="number" name="nodeLimit" onChange={handleLimitChange} value={nodeLimit}/>
          Node Limit
        </label>
      </Row>
    </>
  )
}