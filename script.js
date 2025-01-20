let date = new Date();

let dayNumber = date.getDay();

let theDay;

let quote;

switch (dayNumber) {
    case 0:
        theDay = "Sunday";
        quote = "Time to Chillax!";
        break;

    case 1: 
        theDay = "Monday";
        quote = "Morning Blues";
        break;

    case 2: 
        theDay = "Tuesday";
        quote = "Tuesday is a day of work!"
        break;

    case 2: 
        theDay = "Tuesday";
        quote = "Tuesday is a day of work!"
        break;

    case 3: 
        theDay = "Wednesday";
        quote = "Ugh. The middle of the week.."
        break;

    case 4: 
        theDay = "Tuesday";
        quote = "Thursday is another day of work, work and work!"
        break;

    case 5: 
        theDay = "Friday";
        quote = "The weekend is almost hereeeee!!"
        break;

    case 6: 
        theDay = "Saturday";
        quote = "Party time!!!"
        break;

}

let weekday = document.getElementById("weekday");
weekday.innerHTML = `${theDay}`;

let quoteTag = document.getElementById("quote");
quoteTag.innerHTML = `${quote}`;
