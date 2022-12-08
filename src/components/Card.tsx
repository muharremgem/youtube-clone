import React from "react";
import { Link } from "react-router-dom";
import { HomePageVideos } from "../Types";

export default function Card({ data }: { data: HomePageVideos }) {
  // const isData = data ? true : false;
  return (
    <div className="w-64 h-60 flex gap-3 flex-col">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/`}>
          <img
            src={data.videoThumbnail}
            className="h-44 w-72"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="line-clmap-2">
              {data.videoTitle}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
