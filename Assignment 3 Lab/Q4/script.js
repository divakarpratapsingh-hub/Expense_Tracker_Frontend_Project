
function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add zero before single-digit values
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    const time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent = time;

    const date = now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("date").textContent = date;
}

// Display the time immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
