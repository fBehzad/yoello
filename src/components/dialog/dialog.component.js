import {useEffect} from 'react';
import ReactDom from 'react-dom'
import './dialog.style.sass';

const modalRoot = document.getElementById('modal-root');
const Dialog = ({children})=>{
  const el = document.createElement('div');
  useEffect(()=>{
    modalRoot.appendChild(el);
    return(()=>{
      modalRoot.removeChild(el);
    })
  },[]);
  return ReactDom.createPortal(children,el)
};
export default Dialog
