import { Handle, Position } from 'reactflow';
import classes from './PvNodes.module.css';

function PhysicalVolumeNodes({ data }) {
  return (
    <div className={classes['physical-volume-node']}>
      <Handle type="target" position={Position.Left} />
      <div>
        <div>Pv: {data.name}</div>
        <div>Size: {data.size}</div>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default PhysicalVolumeNodes;
