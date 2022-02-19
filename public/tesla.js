async function load() {
    await fetchTesla();

    document.body.setAttribute("style", 'background-image: url("' + tesla.flickr_images[Math.floor(Math.random()*tesla.flickr_images.length)] + '");');

    const objects = [
        document.getElementsByClassName("name")[0],
        document.getElementsByClassName("orbit")[0],
        document.getElementsByClassName("distanceEarth")[0],
        document.getElementsByClassName("distanceMars")[0],
        document.getElementsByClassName("description")[0],
    ]

    objects[0].textContent+=tesla.name;
    objects[1].textContent+=tesla.orbit_type;
    objects[2].textContent+=tesla.earth_distance_km + " Kilometer";
    objects[3].textContent+=tesla.mars_distance_km + " Kilometer";
    objects[4].textContent+=tesla.details;

        // The data/time we want to countdown to
        var countDownDate = new Date(upcoming[0].date_utc).getTime();

        // Run myfunc every second
        var myfunc = setInterval(function() {
    
        var now = new Date().getTime();
        var timeleft = countDownDate - now;
            
        // Calculating the days, hours, minutes and seconds left
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            
        // Result is output to the specific element
        document.getElementById("days").innerHTML = "Next Launch: " + days + "d "
        document.getElementById("hours").innerHTML = hours + "h " 
        document.getElementById("mins").innerHTML = minutes + "m " 
        document.getElementById("secs").innerHTML = seconds + "s (" + upcoming[0].name + ")" 
            
        // Display the message when countdown is over
        if (timeleft < 0) {
            clearInterval(myfunc);
            document.getElementById("days").innerHTML = ""
            document.getElementById("hours").innerHTML = "" 
            document.getElementById("mins").innerHTML = ""
            document.getElementById("secs").innerHTML = ""
            document.getElementById("end").innerHTML = "Next Launch: Launched";
        }
        }, 1000);
}