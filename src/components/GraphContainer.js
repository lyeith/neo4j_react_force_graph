import React, {useContext, useEffect} from "react";
import {useReadCypher} from "use-neo4j";
import Graph from "./Graph";
import {LabelContext} from "./LabelProvider";

const extract_nodes = (records) => {
  let nodes = new Set();
  let links = new Set();

  records.map((rec) => {
    rec.map((item) => {

      nodes.add({
        'id': item.start.identity.low,
        'label': item.start.labels[0],
        ...item.start.properties
      })
      nodes.add({
        'id': item.end.identity.low,
        'label': item.end.labels[0],
        ...item.end.properties
      })

      item.segments.map((segment) => {
        links.add({
          'source': segment.relationship.start.low,
          'target': segment.relationship.end.low,
          'name': segment.relationship.type,
        })
      })
    })
  })

  nodes = Array.from(nodes)
  links = Array.from(links)

  return {nodes, links}
}

export default function GraphContainer() {

  const {labels, nodeLimit} = useContext(LabelContext)

  const labelArray = Object.entries(labels)
    .map(((label) => {
      if (label[1]) return label[0]
    }))
    .filter((label) => label !== undefined)

  const query = `MATCH p=(n)-[r]-(m) WHERE labels(n)[0] in ${JSON.stringify(labelArray)} RETURN p LIMIT ${nodeLimit}`
  const {loading, records, run} = useReadCypher(query)
  useEffect(() => {
    run({query})
  }, [query])

  if (loading) return (<div>Loading</div>)

  return (
    <div>
      {records === undefined ? null :
        (<Graph data={extract_nodes(records)}/>)}
    </div>
  )
}
