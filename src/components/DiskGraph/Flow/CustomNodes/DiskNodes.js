import { Handle, Position } from 'reactflow';
import classes from './DiskNodes.module.css';

function DiskNodes({ data }) {
  return (
    <div className={classes['disk-node']}>
      <Handle type="target" position={Position.Left} />
      <div>
        <div>Device: {data.name}</div>
        <div>Size: {data.size}</div>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default DiskNodes;
