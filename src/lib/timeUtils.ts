
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

// Format date to "dd MMM yyyy" format
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};


export const calculateDuration = (startDateString: string, endDateString: string) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    

const duration = getDuration(startDate,endDate)
  return duration;
};

function getDuration(startDate: Date, endDate: Date) {
 let startYear = startDate.getFullYear();
 let startMonth = startDate.getMonth();
 let endYear = endDate.getFullYear();
 let endMonth = endDate.getMonth();

 let year = endYear - startYear;
 let month = endMonth - startMonth;

 if (month < 0) {
    year--;
    month += 12;
 }
 if (year >= 1) {
    if (month === 0) {
      return `${year} years`;
    } else {
      return `${year} years ${month} months`;
    }
  } else {
    if (month === 0) {
      return '0 year';
    } else {
      return `${month} months`;
    }
  }
}
