const div = () => document.createElement("div");
const img = () => document.createElement("img");
const h1 = () => document.createElement("h1");

async function load() {
  await fetchRockets();

  const container = document.getElementsByClassName("rocket-container")[0];
  data.forEach((d) => {
    let r = div();
    r.setAttribute("onclick", "window.location=window.origin+'/rocket/" + d.id + "';")
    r.classList.add("rocket");
    let rimg = img();
    rimg.classList.add("bg-img");
    rimg.src = d.flickr_images[Math.floor(Math.random()*d.flickr_images.length)];
    d.active ? r.classList.add("active") : r.classList.add("deactive");
    let title = h1();
    title.textContent = d.name;
    let tc=div();
    tc.append(title)
    r.append(rimg);
    r.append(tc);
    container.append(r);
  });

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
