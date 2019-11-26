// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log('window loaded');

    document.getElementById("takeoff").addEventListener("click", function() {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        let flightStatus = document.getElementById("flightStatus");
        let shuttleBackground = document.getElementById("shuttleBackground");
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        if (result = true) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
        }
    });
    document.getElementById("landing").addEventListener("click", function() {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });
    document.getElementById("missionAbort").addEventListener("click", function() {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        let result = window.alert("Confirm that you want to abort the mission.");
        if (result = true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }
    });
});

