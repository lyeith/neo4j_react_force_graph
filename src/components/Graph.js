import React from 'react'
import {ForceGraph3D} from 'react-force-graph';

export default function Graph(data) {
  return (
    <ForceGraph3D
      graphData={data.data}
      nodeAutoColorBy={d => d.label}
      linkAutoColorBy={d => d.name}
      height={800}
      nodeRelSize={8}
      linkOpacity={0.4}
      linkWidth={2}
    />
  );
}