import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return <div className='Navbar'>
<ul class="navbar">
  <li class="nav-item">
    <a class="nav-link-active"> 🔥 24h Trending</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >Latest Shows</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" > Most Popular </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >♦️ In Genesis</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >⛰️ Temple</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >✈️ In void</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >🐨 #BAYC</a>
  </li>
  </ul>
    </div>;
  }
}
