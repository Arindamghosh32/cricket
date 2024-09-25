import React from 'react';
import Body from './../component/Body';
import Header from './../component/Header';
import Worldcup from './../component/Worldcup'
import './../css/Home.css';

export default function Home() {
  return (
    <>
      <div className="home-background">
        <Header />
        <div className="content">
          <Body />
        </div>
        <div className="trophy">
          <Worldcup />
        </div>
      </div>
    </>
  );
}
