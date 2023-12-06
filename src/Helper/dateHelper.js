//date to string convert
function todaysDate(){
    const date = new Date();

    const day = '0' + date.getDate();

    // since it returns zero based month
    const month = '0' + (date.getMonth() + 1);

    const year = date.getFullYear();

    const todaysDate = day.slice(-2) + "/" + month.slice(-2) + "/" + year;
    
    return todaysDate;
}

export default todaysDate;