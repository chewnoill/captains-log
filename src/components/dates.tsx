import format from "dateformat";

export const ShowDate = ({ date }: { date: Date }) => (
  <span className="date-long">
    {format(new Date(date), "dddd mmmm dS yyyy")}
  </span>
);

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const subtractDays = (d1: Date, d2: Date) =>
  (d1.getTime() - d2.getTime()) / MS_PER_DAY;

export const DaysSince = ({ date, on, label }) => (
  <>
    <span className="date-days-since">
      {Math.trunc(subtractDays(new Date(date), on))}
    </span>{" "}
    <span className="date-label">days since {label}</span>
  </>
);

export const DaysSinceGlobalPandemic = ({ date }) => (
  <DaysSince
    date={new Date(date)}
    label="the Global Pandemic was declared"
    on={new Date("2020/03/11")}
  />
);
