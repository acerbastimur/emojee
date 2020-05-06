export const returnRelativeTimeWithLabel = (timeInMs) => {
  const seconds = Number.parseInt((timeInMs / 1000) % 60);
  const minutes = Number.parseInt((timeInMs / 60000) % 60);
  const hours = Number.parseInt((timeInMs / 3.6e6) % 24);
  const days = Number.parseInt((timeInMs / 8.64e7) % 30);
  const weeks = Number.parseInt(timeInMs / 6.048e8);

  if (weeks > 0) return { value: weeks, label: "week" };
  if (days > 0) return { value: days, label: "day" };
  if (hours > 0) return { value: hours, label: "hour" };
  if (minutes > 0) return { value: minutes, label: "minute" };
  if (seconds > 0) return { value: seconds, label: "second" };
};

export const returnFormattedTime = (productDate) => {
  const productDateInMs = new Date(productDate).getTime(); // convert productDate to Date object
  const nowInMs = Date.now();

  const formatter = new Intl.RelativeTimeFormat("en", { auto: "numeric" }); // method to format dates
  const isInPast = productDateInMs - nowInMs < 0;
  const timeInMs = Math.abs(nowInMs - productDateInMs); // time between now and productDate

  const relativeTimeWithLabel = returnRelativeTimeWithLabel(timeInMs); // get relative time with label
  const weeks = Number.parseInt(timeInMs / 6.048e8); // calculate weeks past due to deciding to show full date

  const fullDate = new Intl.DateTimeFormat("en-US").format(
    new Date(productDate)
  );

  return weeks < 1 // if it's not older than 1 week, return a relative time
    ? formatter.format(
        isInPast ? -relativeTimeWithLabel.value : relativeTimeWithLabel.value,
        relativeTimeWithLabel.label
      )
    : fullDate;
};

export const formatPrice = ({ price = 0 }) => {
  const priceAsDouble = price / 100;
  return priceAsDouble.toFixed(2);
};
