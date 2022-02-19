async function load() {
    await fetchCrew();

    const container = document.getElementsByClassName("container")[0];

    const cid = location.pathname.split("/")[location.pathname.split("/").length-1];
    const c = crew.find(el=>el.id==cid);
    if(!c) return location.href=location.origin;
    
    document.body.setAttribute("style", 'background-image: url("' + c.image + '");');

    let name = document.createElement("h1");
    name.style.cursor="pointer";
    name.setAttribute("onclick", "window.location='" + c.wikipedia + "';")
    name.textContent=c.name;
    container.append(name);
    let status = document.createElement("p");
    status.innerHTML="<b>Status: </b><span style=\"color: #" + (c.status=="active"?"00ff00":"ff0000") + "\";>" + (c.status=="active"?"Aktiv":"Nicht Aktiv") + "</span>";
    container.append(status);
    let launches = document.createElement("p");
    launches.innerHTML="<b>Launches: </b>" + c.launches.length;
    container.append(launches);
    let agency=document.createElement("p");
    agency.innerHTML="<b>Agency: </b>" + c.agency;
    container.append(agency);


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
    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);
    
}