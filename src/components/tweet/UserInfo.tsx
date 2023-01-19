import React from "react";
import TweetConfig from "./../../typings/TweetConfig";
import DropIcon from "../icons/DropIcon";
import VerifiedIcon from "../icons/VerifiedIcon";
import LockIcon from "../icons/LockIcon";
import Twemoji from "react-twemoji";
import BusinessVerifiedIcon from "../icons/BusinessVerifiedIcon";
import GovernmentsVerifiedIcon from "../icons/GovernmentsVerifiedIcon";

function UserInfo({ config }: { config: TweetConfig }) {
  function VerifiedIconParser(props: { style: string }) {
    switch (props.style) {
      case "legacy":
        return <VerifiedIcon />;
      case "business":
        return <BusinessVerifiedIcon />;
      case "government":
        return <GovernmentsVerifiedIcon />;
      default:
        return <VerifiedIcon />;
    }
  }

  return (
    <div className="user-info">
      <div className="avatar-container">
        <img className="avatar" src={config.user.avatar} alt={config.user.name + " avatar"} />
      </div>
      <div className="user-info-right">
        <div className="drop-button">
          <DropIcon />
        </div>
        <div className="user-name">
          <Twemoji
            options={{ className: "twemoji-sm" }}
            // @ts-ignore
            className="user-name-txt"
          >
            <span className="fake-link">{config.user.name}</span>
          </Twemoji>
          {config.user.verified.state && (
            <div className="icon">
              <VerifiedIconParser style={config.user.verified.style} />
            </div>
          )}
          {config.user.locked && !config.user.verified.state && (
            <div className="icon">
              <LockIcon />
            </div>
          )}
          {config.user.affiliate && !config.user.locked && (
            <div className="icon">
              <img
                alt=""
                draggable="false"
                src="https://github.com/DerGoogler/cdn/blob/master/images/affiliationMark.jpg?raw=true"
                style={{
                  height: "calc(1.0625em)",
                  width: "calc(1.0625em)",
                  borderRadius: '2px'
                }}
              />
            </div>
          )}
        </div>
        <div className="user-nickname">@{config.user.nickname}</div>
      </div>
    </div>
  );
}

export default UserInfo;
