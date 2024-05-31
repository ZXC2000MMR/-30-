function updateDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    const currentDate = new Date();
    
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    dateTimeElement.textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);