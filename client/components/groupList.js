import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}



export default class GroupList extends Component {
  componentWillMount(){
    //call our get groups function
    this.props.getGroups(1)
  }
  render(){
    console.log('get groups!:',this.props.groups)
    return(
      <div>
        <h2>Groups</h2>
         {this.props.groups.map(function(group){
            return <div className="callout secondary">
                    <p>{group.name} <button className="float-right tiny button">View</button></p>
                  </div>;
          })}
        {/*puke(this.props.groups)*/}
      </div>
    )
  }
}