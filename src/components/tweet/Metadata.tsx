import React from "react";
import TweetConfig from "./../../typings/TweetConfig";

function Metadata({ config }: { config: TweetConfig }) {
  return (
    <div className="metadata">
      {config.date} · <span className="fake-link app">{config.app}</span>
    </div>
  );
}

export default Metadata;
