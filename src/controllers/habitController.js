import Habit from "../models/habit.js"
import todaysDate from "../Helper/dateHelper.js";



//add habit
export const addHabit = async (req,res) =>{
    let habit
    try {
        //if habit already exists
        habit = await Habit.findOne({content:req.body.habit}).populate();
    } catch (error) {
        console.log(error)
    }

    try {
        
        if(habit){
             console.log("habit exists")
             return;
        }else{
    
            //lets create habit
            habit  = await Habit.create({
                content: req.body.habit,
                dates:[{date: todaysDate(),
                complete:"none"}]
            })

           return res.redirect('/')
        }

    } catch (error) {
        console.log(error)
    }
    
}

//Deleting a habit
export const  deleteHabit = async (req,res) =>{

    try {
        const _id = req.query.id;
    const habit = await Habit.findById(_id)

    //habit not there then return
    if(!habit){
        console.log("no habit there")
        return;
    }
    
    //if there then delete
    await Habit.deleteOne({_id})

    return res.redirect('/')

    } catch (error) {
        console.log("error deleting the habit");
    }
    
}

//add status for the created habit

export const changeHabitStatus = async (req,res) =>{
    const _id = req.query.id;
    const date = req.query.date;
    try {
       const habit = await Habit.findById(_id);

       if(!habit){
        console.log('habit not found')
        return;
       }
        
       const dates = habit["dates"];


       const foundDateIndex = dates.findIndex((eachdate)=>{
       return eachdate.date === date
       })

        
       if(foundDateIndex === -1){
        dates.push({date:date, complete:'yes'});
            
           await habit.save()

            return res.redirect('/')
       }

       const foundDate = dates[foundDateIndex];
      
       if(foundDate.complete === 'yes'){
        foundDate.complete = 'no';
       }else if(foundDate.complete === 'no'){
            foundDate.complete = 'none'
       }else if(foundDate.complete === 'none'){
            foundDate.complete = 'yes'
       }
        
        habit.save()

        return res.redirect('back')
       
    } catch (error) {
        console.log(error)
    }
}