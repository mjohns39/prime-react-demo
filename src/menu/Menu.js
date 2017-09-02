import React, { Component } from 'react';
import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
import Home from '../home/Home'
import CarTable from '../datatable/CarTable'
export default class Menu extends Component {


  render() {
    var items=[
      {label: 'Home', icon: 'fa-home', command: ()=>{this.props.changeMenu(<Home/>);}},
      {label: 'CarTable', icon: 'fa-table', command: ()=>{this.props.changeMenu(<CarTable/>);}}
    ];

    return (
      <div>
        <TabMenu model={items}/>
      </div>

    );
  }

}
