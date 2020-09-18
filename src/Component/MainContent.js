import React from "react";
import "./MainContent.css";
import VideoCard from "./VideoCard";

const MainContent = () => {
  return (
    <div className="mainContent ">
      <h2>Recommended</h2>
      <div className="mainContent__videos m-auto">
        <VideoCard
          tittle="Become a web developer in 10 mins"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="img/youtube.png"
          channel="Adewole Adebayo"
          image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
        />
        <VideoCard
          tittle="Top 10 programming languages to learn"
          views="1.8M Views"
          timestamp="20 days ago"
          channelImage="img/edureka.jpg"
          channel="Edureka"
          image="img/img1.jpg"
        />
        <VideoCard
          tittle="Introduction to Programming Language"
          views="12M Views"
          timestamp="1 year ago"
          channelImage="img/tut.jpg"
          channel="TutorialsPoint"
          image="img/img2.jpg"
        />
        <VideoCard
          tittle="Software development"
          views="20M Views"
          timestamp="2 years ago"
          channelImage="img/edureka.jpg"
          channel="Edureka"
          image="img/img3.jpg"
        />
        <VideoCard
          tittle="Become a web developer in 10 mins"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="img/tnb.jpg"
          channel="The New Boston"
          image="img/img4.jpg"
        />
        <VideoCard
          tittle="Become a web developer in 10 mins"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="img/bayo.jpg"
          channel="Adewole Adebayo"
          image="img/img5.jpg"
        />
        <VideoCard
          tittle="Become a web developer in 10 mins"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="img/me.jpg"
          channel="Adewole Adebayo"
          image="img/img6.jpg"
        />
        <VideoCard
          tittle="Become a web developer in 10 mins"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="img/me.jpg"
          channel="Adewole Adebayo"
          image="img/img7.jpg"
        />
      </div>
    </div>
  );
};

export default MainContent;
