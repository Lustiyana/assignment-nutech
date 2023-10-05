export const dateFormatter = (dateString) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  };

  const date = new Date(dateString);
  const inputDate = date.toLocaleDateString("id-ID", options);
  const formattedDate = inputDate.replace(" pukul", "");

  return formattedDate;
};
