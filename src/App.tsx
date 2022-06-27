import { Component } from "react";
import {
  TextField,
  FormControlLabel,
  FormGroup,
  Switch,
  Paper,
  MenuItem,
  TextFieldProps,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import DownloadIcon from "@mui/icons-material/Download";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import Tweet from "./components/tweet/Tweet";
import { GitHub } from "@mui/icons-material";

interface State {
  username: string;
  name: string;
  avatar: string;
  verified: boolean;
  locked: boolean;
  display: string;
  text: string;
  image: string;
  date: string;
  app: string;
  retweets: number;
  quotedTweets: number;
  likes: number;
  [x: string]: any;
}

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

class App extends Component<{}, State> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      username: "Der_Googler",
      name: "ＪＩＭＭＹ デーモン",
      avatar: "https://avatars.githubusercontent.com/u/54764558?v=4",
      verified: true,
      locked: false,
      display: "default",
      text: "Ok, cool!",
      image: "",
      date: "3:32 PM · Feb 14, 1997",
      app: "Twitter for Android",
      retweets: 32000,
      quotedTweets: 100,
      likes: 12700,
    };
  }

  public render() {
    const {
      username,
      name,
      avatar,
      verified,
      locked,
      display,
      text,
      image,
      date,
      app,
      retweets,
      quotedTweets,
      likes,
      isDrawerOpen,
    } = this.state;
    return (
      <>
        <Tweet
          id="tweet"
          config={{
            user: {
              nickname: username,
              name: name,
              avatar: avatar,
              verified: verified,
              locked: locked,
            },
            display: display,
            text: text,
            image: image,
            date: date,
            app: app,
            retweets: retweets,
            quotedTweets: quotedTweets,
            likes: likes,
          }}
        />
        <Paper square sx={{ pb: "50px" }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box component="main" sx={{ p: 3, width: "100%" }}>
              <FormGroup>
                <this.Input label="Nickname" value={username} state={"username"} />
                <this.Input label="Name" value={name} state={"name"} />
                <this.Input label="Avatar" value={avatar} state={"avatar"} />
              </FormGroup>

              <FormGroup sx={{ margin: "8px" }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={verified}
                      disabled={locked}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        this.setState({ verified: event.target.checked });
                      }}
                    />
                  }
                  label="Verified"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={locked}
                      disabled={verified}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        this.setState({ locked: event.target.checked });
                      }}
                    />
                  }
                  label="Locked"
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  select
                  label="Display"
                  margin="dense"
                  value={display}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    this.setState({ display: event.target.value });
                  }}
                >
                  {["default", "dim", "lightsout"].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-multiline-static"
                  label="Text"
                  multiline
                  margin="dense"
                  rows={4}
                  value={text}
                  variant="outlined"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    this.setState({ ["text"]: event.target.value });
                  }}
                />
                <this.Input label="Date" value={date} state={"date"} />
              </FormGroup>

              <FormGroup>
                <this.Input label="Image" value={image} state={"image"} />
                <this.Input label="App" value={app} state={"app"} />
                <this.Input label="Re-Tweets" value={String(retweets)} state={"retweets"} />
              </FormGroup>

              <FormGroup>
                <this.Input label="Quoted Tweets" value={String(quotedTweets)} state={"quotedTweets"} />
                <this.Input label="Likes" value={String(likes)} state={"likes"} />
              </FormGroup>
            </Box>
          </Box>
        </Paper>

        <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
          <Toolbar>
            <StyledFab
              color="secondary"
              aria-label="add"
              onClick={() => {
                domtoimage.toBlob(document.getElementById("tweet")!).then(function (blob) {
                  saveAs(blob, `${new Date()}.png`);
                });
              }}
            >
              <DownloadIcon />
            </StyledFab>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              color="inherit"
              onClick={() => {
                window.open("https://github.com/DerGoogler/re-fake-tweet", "_blank");
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </>
    );
  }

  public Input = (props: { label: string; value: string; state: string }) => {
    const { label, value, state } = props;
    return (
      <TextField
        id="outlined-basic"
        fullWidth
        margin="dense"
        label={label}
        value={value}
        variant="outlined"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          this.setState({ [state]: event.target.value });
        }}
      />
    );
  };
}

export default App;
