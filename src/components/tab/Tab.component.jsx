import  React, { Fragment, useState } from 'react';

const Tab = ({children, content, onValueChanged, value, notFound = null,onChange,defaultId}) => {
  const [activeTab, setActiveTab] = useState(defaultId);
  const changeTab = (id) => {
    if (typeof onValueChanged !== 'undefined') {
      onValueChanged(id);
    }
    setActiveTab(id);
    onChange && onChange(id);
  };
  const act = typeof onValueChanged !== 'undefined' ? value : activeTab;
  const tabs = children.map(child => child.props);
  const provider = {
    tabs,
    activeTab: act,
    switchTo: changeTab,
  };

  const found = children.find(a => a.props.id === act && !a.props.disabled);

  return (
    <Fragment>
      {content(provider)}
      {(found && found.props.children) ? (typeof found.props.children === 'function' ? found.props.children(provider) : found.props.children) : notFound}
    </Fragment>
  );
};

export default Tab;
