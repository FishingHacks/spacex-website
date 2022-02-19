async function load() {
    await fetchRockets();

    const container = document.getElementsByClassName("container")[0];

    const rid = location.pathname.split("/")[location.pathname.split("/").length-1];
    const rocket = data.find(el=>el.id==rid);
    if(!rocket) return location.href=location.origin;
    
    document.body.setAttribute("style", 'background-image: url("' + rocket.flickr_images[Math.floor(Math.random()*rocket.flickr_images.length)] + '");');

    let childs = container.children;
    for(let i = 0; i < childs.length; i++) {
        if (childs.item(i).classList.contains("ignore")) continue;
        let thingi = rocket[childs.item(i).classList.item(0)];
        if(typeof thingi=="boolean")
            thingi = thingi?"Ja":"Nein";
        if(typeof thingi=="object")
            thingi=thingi.meters;
        childs.item(i).textContent+=thingi;
    }

    mce = [document.getElementsByClassName("mass")[0], document.getElementsByClassName("cost")[0], document.getElementsByClassName("engines")[0], document.getElementsByClassName("height")[0], document.getElementsByClassName("diameter")[0]];
    mce[0].textContent += rocket.mass.kg/1000 + " Tonnen";
    mce[1].textContent += rocket.cost_per_launch/1000000 + " Millionen $";
    mce[2].textContent += rocket.engines.number;
    mce[3].textContent += rocket.height.meters + " Meter";
    mce[4].textContent += rocket.diameter.meters + " Meter";

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