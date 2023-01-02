import * as React from "react";
import { styled } from "@mui/material/styles";
import * as htmlToImage from "html-to-image";
import * as FileSaver from "file-saver";
import Tweet from "./components/tweet/Tweet";
import { MobileDateTimePicker } from "@mui/x-date-pickers";

import { useLocalStorage } from "usehooks-ts";

import { TextFieldProps, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";

import GitHub from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from ".";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const TweetContainer = styled("div")({
  display: "block",
  margin: "0 auto",
  maxWidth: "600px",
});

const ContentContainer = styled(Box)({
  padding: "24px 0px 24px",
  width: "100%",
  maxWidth: "600px",
  margin: "auto",
});

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [ username,     setUsername     ] = useLocalStorage<string>             ( "username",     "Der_Googler"                                           );
  const [ name,         setName         ] = useLocalStorage<string>             ( "name",         "ＪＩＭＭＹ デーモン"                                     );
  const [ avatar,       setAvatar       ] = useLocalStorage<string>             ( "avatar",       "https://avatars.githubusercontent.com/u/54764558?v=4"  );
  const [ verified,     setVerified     ] = useLocalStorage<boolean>            ( "verified",     true                                                    );
  const [ locked,       setLocked       ] = useLocalStorage<boolean>            ( "locked",       false                                                   );
  const [ display,      setDisplay      ] = useLocalStorage<string>             ( "display",      "default"                                               );
  const [ text,         setText         ] = useLocalStorage<string>             ( "text",         "Ok, cool!"                                             );
  const [ image,        setImage        ] = useLocalStorage<string>             ( "image",        ""                                                      );
  const [ date,         setDate         ] = useLocalStorage<string | undefined> ( "date",         "Mon Jun 27 2022 20:17:28 GMT+0200"                     );
  const [ app,          setApp          ] = useLocalStorage<string>             ( "app",          "Twitter for Android"                                   );
  const [ retweets,     setRetweets     ] = useLocalStorage<number>             ( "retweets",     32000                                                   );
  const [ quotedTweets, setQuotedTweets ] = useLocalStorage<number>             ( "quotedTweets", 100                                                     );
  const [ likes,        setLikes        ] = useLocalStorage<number>             ( "likes",        12700                                                   );

  const designs = [
    {
      label: "Default",
      value: "default",
    },
    {
      label: "Dim",
      value: "dim",
    },
    {
      label: "Lights out",
      value: "lightsout",
    },
  ];

  return (
    <>
      <div style={{ padding: 8 }}>
        <TweetContainer>
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
              date: date!,
              app: app,
              retweets: retweets,
              quotedTweets: quotedTweets,
              likes: likes,
            }}
          />
        </TweetContainer>
        <Paper elevation={0} square sx={{ pb: "50px" }}>
          <ContentContainer component="main">
            <FormGroup>
              <Input title="Username" value={username} state={setUsername} />
              <Input title="Name" value={name} state={setName} />
              <Input title="Avatar" value={avatar} state={setAvatar} />
            </FormGroup>

            <FormGroup sx={{ margin: "8px" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={verified}
                    disabled={locked}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setVerified(event.target.checked);
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
                      setLocked(event.target.checked);
                    }}
                  />
                }
                label="Locked"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                select
                label="Design"
                margin="dense"
                value={display}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDisplay(event.target.value);
                }}
              >
                {designs.map((design) => (
                  <MenuItem key={design.value} value={design.value}>
                    {design.label}
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
                  setText(event.target.value);
                }}
              />
            </FormGroup>

            <FormGroup>
              <Input title="Image" value={image} state={setImage} />
              <Input title="App" value={app} state={setApp} />
              <Input title="Re-Tweets" value={String(retweets).replace(/\D/g, "")} state={setRetweets} />
            </FormGroup>

            <FormGroup sx={{ marginTop: "8px", marginBottom: "4px" }}>
              <MobileDateTimePicker
                label="Date"
                value={date}
                onChange={(newValue: Date | null) => {
                  setDate(newValue?.toString());
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </FormGroup>

            <FormGroup>
              <Input title="Quoted Tweets" value={String(quotedTweets).replace(/\D/g, "")} state={setQuotedTweets} />
              <Input
                title="Likes"
                value={String(likes).replace(/\D/g, "")}
                state={setLikes}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              />
            </FormGroup>
          </ContentContainer>
        </Paper>
      </div>

      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <StyledFab
            color="secondary"
            aria-label="add"
            onClick={() => {
              htmlToImage.toPng(document.getElementById("tweet")!).then((blob) => {
                const filename = `${name}_${username}_${Math.floor(Math.random() * likes)}.png`;
                if (window.saveAs) {
                  window.saveAs(blob, filename);
                } else {
                  FileSaver.saveAs(blob!, filename);
                }
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
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

interface Input {
  title: string;
  value: string;
  state: React.Dispatch<React.SetStateAction<any>>;
}

function Input(props: Input & TextFieldProps) {
  const { title, value, state } = props;
  return (
    <TextField
      id="outlined-basic"
      fullWidth
      margin="dense"
      label={title}
      value={value}
      title={title}
      variant="outlined"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        state(event.target.value);
      }}
    />
  );
}

export default App;
