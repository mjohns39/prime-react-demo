import React, { Component } from 'react';
import {TabMenu} from 'primereact/components/tabmenu/TabMenu';

export default class Menu extends Component {

  render() {

    var items=[
      {label: 'Stats', icon: 'fa-bar-chart'},
      {label: 'Calendar', icon: 'fa-calendar'},
      {label: 'Documentation', icon: 'fa-book'},
      {label: 'Support', icon: 'fa-support'},
      {label: 'Social', icon: 'fa-twitter'}
    ];
    return (
      <div>
        <TabMenu model={items}/>
      </div>

    );
  }

}
