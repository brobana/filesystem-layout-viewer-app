import { Handle, Position } from 'reactflow';
import classes from './FsNodes.module.css';

function FilesystemNodes({ data }) {
  return (
    <div className={classes['filesystem-node']}>
      <Handle type="target" position={Position.Left} />
      <div>
        <div>Mountpoint: {data.mountpoint}</div>
        <div>Size: {data.size}</div>
        <div>Used: {data.used}</div>
        <div>Type: {data.type}</div>
      </div>
    </div>
  );
}

export default FilesystemNodes;
