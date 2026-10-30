type FormattedDateProps = {
  value: string | undefined;
  className?: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

export function FormattedDate({ value, className }: FormattedDateProps) {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return null;

  return (
    <time dateTime={value} className={className}>
      {dateFormatter.format(date)}
    </time>
  );
}