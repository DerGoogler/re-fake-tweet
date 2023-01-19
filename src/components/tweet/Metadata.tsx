import TweetConfig from "./../../typings/TweetConfig";

function Metadata({ config }: { config: TweetConfig }) {
  const makeDate = (data: string) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const date = new Date(data);
    let aaaa: any = date.getFullYear();
    let gg: any = date.getDate();
    let mm: any = date.getMonth() + 1;

    if (gg < 10) {
      gg = "0" + gg;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    let cur_day = gg + " " + monthNames[date.getMonth()] + ", " + aaaa;

    let hours: any = date.getHours();
    let ampm: any = hours >= 12 ? "PM" : "AM";
    let minutes: any = date.getMinutes();
    let seconds: any = date.getSeconds();

    hours = hours % 12;
    hours = hours ? hours : 12;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return hours + ":" + minutes + " " + ampm + " · " + cur_day;
  };

  return (
    <div className="metadata">
      {makeDate(config.date!)}
      {config.app != "" || null ? " · " : ""} <span className="fake-link app">{config.app}</span>
    </div>
  );
}

export default Metadata;
