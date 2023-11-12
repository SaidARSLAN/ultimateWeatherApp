
export const days = [
        "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"
    ]
const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ]
const createDate = () => {
    const date = new Date()
    const currentDate = {}

    const month = months[date.getMonth()]
    const day = days[date.getDay()]
    const year = date.getFullYear()
    const dayOfTheMonth = date.getDate();
    currentDate.day = day
    currentDate.month = month.slice(0,3)
    currentDate.year = year
    currentDate.dayOfTheMonth = dayOfTheMonth

    return currentDate 
}

export {createDate}