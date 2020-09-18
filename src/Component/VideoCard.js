import React from "react";
import { Avatar } from "@material-ui/core";
import "./VideoCard.css";

const VideoCard = ({
  image,
  tittle,
  views,
  timestamp,
  channelImage,
  channel,
}) => {
  return (
    <div className="videocard ">
      <img src={image} alt="channel" className="videocard__image image-fluid" />
      <div className="videocard__info">
        <Avatar
          alt="Adewole Adebayo"
          src={channelImage}
          className="videocard__avatar"
        />
        <div className="videocard__baseinfo">
          <h4>{tittle}</h4>
          <p>{channel}</p>
          <p>
            {views} * {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
