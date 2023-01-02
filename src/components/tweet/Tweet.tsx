import * as React from "react";
import useDisplay from "../../hooks/useDisplay";
import TweetConfig from "./../../typings/TweetConfig";
import UserInfo from "./UserInfo";
import Content from "./Content";
import Metadata from "./Metadata";
import Impact from "./Impact";
import Actions from "./Actions";

interface Tweet {
  id?: string;
  style?: React.CSSProperties;
  config: TweetConfig;
}

function Tweet(props: Tweet) {
  const { id, style, config } = props;
  return (
    <div id={id} className={"tweet " + config.display} style={style}>
      <UserInfo config={config} />
      <Content config={config} />
      <Metadata config={config} />
      <Impact config={config} />
      <Actions />
    </div>
  );
}

export default Tweet;
