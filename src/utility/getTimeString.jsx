export default function getTimeString (msElapsed) {
    let totalMS = msElapsed;
    let string = "";
    let hours = Math.floor(msElapsed / 3600000);
    totalMS = totalMS % 3600000;
    let minutes = Math.floor(totalMS / 60000);
    totalMS = totalMS % 60000;
    let seconds = Math.floor(totalMS / 1000);

    if (hours >= 1) {
        if (hours >= 10) {
            string += hours + ':';
        }
        else {
            string += '0' + hours + ':';
        }
    }
    else {
        string += '00:'
    }
    if (minutes >= 1) {
        if (minutes >= 10) {
            string += minutes + ':';
        }
        else {
            string += '0' + minutes + ':';
        }
    }
    else {
        string += '00:';
    }
    if (seconds >= 1) {
        if (seconds >= 10) {
            string += seconds;
        }
        else {
            string += '0' + seconds;
        }
    }
    else {
        string += '00';
    }
    return string;
}