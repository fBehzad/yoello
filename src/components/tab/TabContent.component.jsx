import React from 'react';
import './Tab.style.sass'

const TabContent = ({provider}) => {
  return<div className="tab-container">
    <h3 className="tab-title">Demo App</h3>
    <div className="tab-header">
    {provider.tabs.map((item, index) =>
      <div
        key={index}
        className={`tab-item
             ${item.id === provider.activeTab ? 'tab-item-active' : ''}`
        }
        onClick={() => {
          !item.disabled && provider.switchTo(item.id);
        }
        }>
        {item.title}
      </div>,
    )}
  </div>
  </div>;
};

export default TabContent
