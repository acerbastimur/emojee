export const returnRelativeTimeWithLabel = (timeInMs) => {
  const seconds = Number.parseInt((timeInMs / 1000) % 60);
  const minutes = Number.parseInt((timeInMs / 60000) % 60);
  const hours = Number.parseInt((timeInMs / 3.6e6) % 24);
  const days = Number.parseInt((timeInMs / 8.64e7) % 30);
  const weeks = Number.parseInt(timeInMs / 6.048e8);

  if (weeks > 0) return { value: weeks, label: "week" }; // TODO
  if (days > 0) return { value: days, label: "day" };
  if (hours > 0) return { value: hours, label: "hour" };
  if (minutes > 0) return { value: minutes, label: "minute" };
  if (seconds > 0) return { value: seconds, label: "second" };
};

export const returnFormattedTime = (scheduledDate) => {
  const scheduledDateInMs = new Date(scheduledDate).getTime();
  const nowInMs = Date.now();

  const formatter = new Intl.RelativeTimeFormat("en", { auto: "numeric" });
  const isInPast = scheduledDateInMs - nowInMs < 0;
  const timeInMs = Math.abs(nowInMs - scheduledDateInMs);

  const relativeTimeWithLabel = returnRelativeTimeWithLabel(timeInMs);
  const weeks = Number.parseInt(timeInMs / 6.048e8);
  const fullDate = new Intl.DateTimeFormat("en-US").format(
    new Date(scheduledDate)
  );

  return weeks < 1
    ? formatter.format(
        isInPast ? -relativeTimeWithLabel.value : relativeTimeWithLabel.value,
        relativeTimeWithLabel.label
      )
    : fullDate;
};

export const formatPrice = ({ price = 0 }) => {
  const integerPart = price / 100;
  return integerPart.toFixed(2);
};
