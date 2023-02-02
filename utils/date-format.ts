import { format } from "date-fns";

export const getDateFormat = (date: Date) => {
  return format(new Date(date), "dd/MM/yy");
};
