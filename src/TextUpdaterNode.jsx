import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { FcCallback } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { BiMessageRoundedDetail } from "react-icons/bi";




const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable, id }) {

  const [isActive, setIsActive] = useState(false);


  const addClass = (event) => {
    console.log('clicked', event.currentTarget);
    const element = event.currentTarget;
    setTimeout(() => {
      element.classList.add('active');
    }, 0);
  };


  return (
    <div id={id} className='text-updater-node' onClick={addClass}>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />

      <div className='text-updater-node-header'>
        <div style={{ display: 'flex' , alignItems: 'center' }}>
          <BiMessageRoundedDetail className='message-icon'/> <span className='text-updater-node-header-text'>Send Message</span>
        </div>
        <FcCallback  style={{fontSize: 'x-large'}} />
      </div>
      <div className='text-updater-node-text'>
        {data}
      </div>
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
