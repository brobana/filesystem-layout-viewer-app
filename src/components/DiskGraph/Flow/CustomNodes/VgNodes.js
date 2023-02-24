import { Handle, Position } from 'reactflow';
import classes from './VgNodes.module.css';

function VolumeGroupNodes({ data }) {
  return (
    <div className={classes['volume-group-node']}>
      <Handle type="target" position={Position.Left} />
      <div>
        <div>Vg: {data.name}</div>
        <div>Size: {data.size}</div>
        <div>Free: {data.free}</div>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default VolumeGroupNodes;
