import React from "react";
import { DATE } from "../../util/dateMaker";
import TweetConfig from "./../../typings/TweetConfig";

function Metadata({ config }: { config: TweetConfig }) {
  return (
    <div className="metadata">
      {DATE(config.date!)} · <span className="fake-link app">{config.app}</span>
    </div>
  );
}

export default Metadata;
