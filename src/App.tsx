import ons from "onsenui";
import { Component } from "react";
import { Toolbar, ToolbarButton, Icon, Page, Button } from "react-onsenui";

class App extends Component {
  private handleClick() {
    ons.notification.alert("Hello world!");
  }

  private renderToolbar() {
    return (
      // @ts-ignore
      <Toolbar>
        <div className="center">My app</div>
        <div className="right">
          {/**
           
          // @ts-ignore */}
          <ToolbarButton>
            <Icon icon="ion-ios-menu, material:md-menu"></Icon>
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  public render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{ textAlign: "center" }}>
          {/*
          // @ts-ignore */}
          <Button onClick={this.handleClick}>Click me!</Button>
        </p>
      </Page>
    );
  }
}

export default App;
