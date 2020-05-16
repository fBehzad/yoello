import React from 'react';
import { Collapse } from './collapse';
import './collapse.style.sass'

export const CollapseComponent = (props) => {
  const { title , innerRef, children,collapseState,flag } = props;
  return <Collapse
    ref={innerRef}
    auto
    flag={flag}
    content={provider =>
      <div
        onClick={() => {
          provider.setVisibility(!provider.visibility);
          collapseState(!provider.visibility);
        }}>
        <div
          className={`collapse-header pt-1 px-3 ${provider.visibility ? 'collapse-border' : ''}`}>
          <div className="ap-space-between">
            <span className={` ${(!provider.visibility) ? 'fs-7' : 'fs-7'}`}>
                <div className="d-flex flex-column my-2">
                 <span>{title}</span>
                </div>
            </span>
          </div>
        </div>
      </div>
    }>
    {provider =>
      <div ref={provider.ref}>
        {children}
      </div>
    }
  </Collapse>;
};
