import React from 'react';
import Tab from '../../components/tab/Tab.component';
import TabContent from '../../components/tab/TabContent.component';
import TabItem from '../../components/tab/TabItem.component';
import  RestaurantIcon from '../../ui/icons/restaurantIcon';
import  CoffeeCupIcon from '../../ui/icons/coffeeCupIcon';
import  PercentageIcon from '../../ui/icons/percentageCupIcon';
import  SearchIcon from '../../ui/icons/searchIcon';
import './homepage.style.sass';
import BeerContainer from '../../components/beerList/beerList.container';

const HomePage = () => {
  return (
      <Tab
        defaultId='beer'
        content={(provider) => {
          return <TabContent provider={provider}/>;
        }}
      >
        <TabItem id="beer" title={<CoffeeCupIcon size={30}/>}>
          <BeerContainer/>
        </TabItem>
        <TabItem id="food" title={<RestaurantIcon size={30}/>}>
          <div className="tab-content">
            <button >All Food</button>
          </div>
        </TabItem>
        <TabItem id="percentage" title={<PercentageIcon size={30}/>} disabled/>
        <TabItem id="search" title={<SearchIcon size={30}/>} disabled/>
      </Tab>

  );
};

export default HomePage;
