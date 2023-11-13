
export const days = [
        "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"
    ]
const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ]
export const createDate = () => {
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

export function drawLineChart(canvas,ctx,temperatures) {
    const xPadding = 50;
    const yPadding = 20;
    const height = canvas.height - yPadding * 2;
    const width = canvas.width - xPadding * 2;

    const maxTemperature = Math.max(...temperatures);
    const temperatureScale = height / maxTemperature;

    ctx.strokeStyle = '#FFFFFF'; // blue color
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(xPadding, canvas.height - yPadding - temperatures[0] * temperatureScale);

    temperatures.forEach((temperature, index) => {
        const x = xPadding + (index * width) / (temperatures.length - 1);
        const y = canvas.height - yPadding - temperature * temperatureScale;
        ctx.lineTo(x, y);
    });

    ctx.stroke();
}

