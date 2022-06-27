import React from "react";
import "./Tweet.scss";
import useDisplay from "../../hooks/useDisplay";
import TweetConfig from "./../../typings/TweetConfig";
import UserInfo from "./UserInfo";
import Content from "./Content";
import Metadata from "./Metadata";
import Impact from "./Impact";
import Actions from "./Actions";

interface ITweetState {}

export interface ITweetProps {
  config: TweetConfig;
}

class Tweet extends React.Component<
  ITweetProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  ITweetState
> {
  public constructor(props: ITweetProps | Readonly<ITweetProps>) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<ITweetProps> {
    const { config } = this.props;
    return (
      <div {...this.props} className={"tweet " + config.display}>
        <UserInfo config={config} />
        <Content config={config} />
        <Metadata config={config} />
        <Impact config={config} />
        <Actions />
      </div>
    );
  }
}

export default Tweet;
