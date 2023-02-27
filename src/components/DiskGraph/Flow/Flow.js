import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  Controls,
} from 'reactflow';
import FsNodes from './CustomNodes/FsNodes';
import LvNodes from './CustomNodes/LvNodes';
import VgNodes from './CustomNodes/VgNodes';
import DiskNodes from './CustomNodes/DiskNodes';
import PvNodes from './CustomNodes/PvNodes';
import { createFlow } from './Utils';

import 'reactflow/dist/style.css';

import classes from './Flow.module.css';

const nodeTypes = {
  FsNode: FsNodes,
  LvNode: LvNodes,
  VgNode: VgNodes,
  DiskNode: DiskNodes,
  PvNode: PvNodes,
};

const Flow = (props) => {
  const { volumeNodes, volumeEdges } = createFlow(props.volumeData);
  const [nodes, setNodes, onNodesChange] = useNodesState(volumeNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(volumeEdges);
  const { fitView } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  useEffect(() => {
    const { volumeNodes, volumeEdges } = createFlow(props.volumeData);
    setNodes((nds) => {
      return volumeNodes;
    });
    setEdges((eds) => {
      return volumeEdges;
    });

    return () => {};
  }, [props.volumeData, setEdges, setNodes]);

  useEffect(() => {
    if (props.resetView) fitView();
    return () => {};
  }, [nodes, edges, fitView, props.resetView]);

  return (
    <div className={classes['disk-graph']}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        preventScrolling={false}
        zoomOnScroll={false}
        nodesDraggable={false}
      >
        <Controls position="top-right" showInteractive={false} />
      </ReactFlow>
    </div>
  );
};

export default Flow;
