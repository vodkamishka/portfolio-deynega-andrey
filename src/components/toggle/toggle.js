import React, { Component } from 'react';
import styled from 'styled-components'

export default class Toggle extends Component {
  render() {
    const { onModal, onToggle, toggle, english } = this.props;
    
    const styleBar1 = {
      transform: toggle ? 'rotate(320deg) translate(-9px, 6px)' : 'rotate(0deg) translate(0, 0)'
    }
    const styleBar2 = {
      opacity: toggle ? '0' : '1'
      
    }
    const styleBar3 = {
      transform: toggle ? 'rotate(400deg) translate(-8px, -8px)' : 'rotate(0deg) translate(0, 0)'
    }
    return (
      <ToggleWrapper>
      <div className="containerForBars"
      title = {english ? 'Menu' : 'Меню'}
        onClick = {
          () => {
            onToggle()
            onModal()
          }
        }
        >
        <div className="bar1" style={styleBar1}></div>
        <div className="bar2" style={styleBar2}></div>
        <div className="bar3" style={styleBar3}></div>
      </div>
      </ToggleWrapper>
    )
  }
}

const ToggleWrapper = styled.div`
.containerForBars {
  display: inline-block;
  cursor: pointer;
  position: fixed;
  top: 4%;
  right: 25px;
  z-index: 100000;
  &:hover {
    .bar1, .bar2, .bar3 {
      background: #fa225b;
    }
  }
}
 .bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
  transition: 1s;
}
`;