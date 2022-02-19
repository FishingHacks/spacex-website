async function fetchRockets() {
  await fetch("https://api.spacexdata.com/v4/rockets").then(res=>res.json()).then(d=>{data=d;})
  await fetchUpcoming();
}

async function fetchTesla() {
  await fetch("https://api.spacexdata.com/v4/roadster").then(res=>res.json()).then(d=>{tesla=d;});
  await fetchUpcoming();
}

async function fetchCrew() {
  await fetch("https://api.spacexdata.com/v4/crew").then(res=>res.json()).then(d=>{crew=d;});
  await fetchUpcoming();
}

async function fetchUpcoming() {
  await fetch("https://api.spacexdata.com/v4/launches/upcoming").then(res=>res.json()).then(d=>{upcoming=d;});
}

let data = [];

let tesla = {};

let crew = [];

let upcoming = [];