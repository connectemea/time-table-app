const months = ['JAN' , 'FEB' , 'MAR' , 'APR' , 'MAY' , 'JUN' , 'JULY' , 'AUG' , 'SEP' , 'OCT' , 'NOV' , 'DEC']
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth();
  var yyyy = today.getFullYear();
  var currentMonth=months[mm]
  if (dd < 10) {
    dd = "0" + dd;
  }
  today = dd + " " + currentMonth + " " + yyyy;

 export default today ;