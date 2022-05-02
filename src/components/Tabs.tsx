import React, { useState } from 'react';
import Tab from './Tab';

interface Props {
  children: React.ReactNode;
}

const Tabs = ({ children }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = React.Children.map(children, (child: any, index) => {
    return (
      <Tab
        key={`tab-${index}`}
        isActive={activeIndex === index}
        onClick={() => setActiveIndex(index)}
      >
        {child.props.className}
      </Tab>
    );
  });

  const view = React.Children.map(children, (child: any, index) => {
    const content = child.props.children;
    return <Tab>{content}</Tab>;
  });
  return (
    <>
      <div className="tabs">{tabs}</div>
      <div className="view">{view[activeIndex]}</div>
    </>
  );
};

export default Tabs;
