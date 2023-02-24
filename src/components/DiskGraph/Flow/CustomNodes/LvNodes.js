import { Handle, Position } from 'reactflow';
import classes from './LvNodes.module.css';

function LogicalVolumeNodes({ data }) {
  return (
    <div className={classes['logical-volume-node']}>
      <Handle type="target" position={Position.Left} />
      <div>
        <div>Lv: {data.name}</div>
        <div>Size: {data.size}</div>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default LogicalVolumeNodes;
