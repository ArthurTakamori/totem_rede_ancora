export default function generateReplacementDate(isFuture) {
    var currentDate = new Date();
    var years = isFuture ? 5 : 2;
    var randomMilliseconds = Math.random() * (years * 365 * 24 * 60 * 60 * 1000);
    var randomDate = isFuture ? new Date(currentDate.getTime() + randomMilliseconds) : new Date(currentDate.getTime() - randomMilliseconds);
    return formatDate(randomDate);
}

function formatDate(date) {
    var options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}



