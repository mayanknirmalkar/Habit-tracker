import Habit from "../models/habit.js"


//getting all 7 days of week
function weekDates(){
    const dates = [];

    for(let i = 0 ; i < 7 ; i++){
        const dateObj = new Date();
        const date  = '0' + (dateObj.getDate() + i);
        const month = '0' + (dateObj.getMonth() + 1);
        const year = dateObj.getFullYear();
        dates.push(date.slice(-2) + '/' + month.slice(-2) + '/' + year);
    }

    return dates;
}

export const HomePage = async (req,res) =>{
    try {
       const habits = await Habit.find();

      


       return res.render("home", {
            title:"Your Habits are being Tracked",
            habits:habits,
            week:weekDates()
       })
    } catch (error) {
        console.log(error)
    }
}