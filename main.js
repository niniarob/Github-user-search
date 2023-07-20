const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');
const title = document.querySelector('.title');
const darkText = document.querySelector('.dark-text');
const lightText = document.querySelector('.light-text');
const input = document.querySelector('#user');
const button = document.querySelector('.btn');
const form = document.querySelector('.form');
const avatarMobile = document.querySelector(".avatar-mobile")
const avatarDesktop = document.querySelector(".avatar-desktop")
const nameElement = document.querySelector(".name")
const login = document.querySelector(".login")
const joinDate = document.querySelector(".join-date")
const bio = document.querySelector(".bio")
const repos = document.querySelector("#repos")
const followers = document.querySelector("#followers")
const following = document.querySelector("#following")
const city = document.querySelector("#city")
const blog = document.querySelector("#blog")
const twitter = document.querySelector("#twitter")
const company = document.querySelector("#company")
const userInfo = document.querySelector(".user-info")
const stats = document.querySelector(".stats")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const loadingGif = document.querySelector("#loading-Gif");


const arr = [nameElement,  bio, joinDate, repos, followers,following,city, blog, twitter, company, one, two, three];

function changeFontColor(color) {
  arr.forEach((element) => {
    element.style.color = color;
  });
}

let isDarkMode = false;
const flip = () => {

  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    moon.style.display = "none";
    sun.style.display = "block";
    lightText.style.display = "block"
    darkText.style.display = "none"
    form.style.backgroundColor = "#1E2A47"
    input.style.backgroundColor = "#1E2A47"
    input.style.color = "#fff"
    document.body.style.backgroundColor = "#141D2F";
    userInfo.style.backgroundColor = "#1E2A47"
    stats.style.backgroundColor = "#141D2F"
    changeFontColor("#fff") 
  } else {
    moon.style.display = "block";
    sun.style.display = "none";
    lightText.style.display = "none"
    darkText.style.display = "block"
    form.style.backgroundColor = "#fff"
    input.style.backgroundColor = "#fff"
    input.style.color = "#222731"
    document.body.style.backgroundColor = "";
    userInfo.style.backgroundColor = ""
    stats.style.backgroundColor = ""
    changeFontColor("") 
  }

  title.classList.toggle("dark");
  darkText.classList.toggle("dark");
  input.classList.toggle("dark");
  form.classList.toggle("dark")

};

moon.addEventListener("click", flip);
sun.addEventListener("click", flip);



async function click() {
  try {
    loadingGif.style.display = "block"
    userInfo.style.display = 'none';

 
    let data = null;
    let res = await fetch(`https://api.github.com/users/${input.value}`);
    data = await res.json();
    Info(data);
    console.log(data);   

    loadingGif.style.display = 'none';
    userInfo.style.display = 'block';
    userInfo.style.display = 'flex';

  } catch (error) {
    console.error(error);
    loadingGif.style.display = 'none';
    userInfo.style.display = 'none';
  }
}


button.addEventListener("click", (event) => {
  event.preventDefault();
  click(); 
});

const octocat = {
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  bio: null,
  blog: "https://github.blog",
  company: "@github",
  created_at: "2011-01-25T18:44:36Z",
  email: null,
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  followers: 9820,
  followers_url: "https://api.github.com/users/octocat/followers",
  following: 9,
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  gravatar_id: "",
  hireable: null,
  html_url: "https://github.com/octocat",
  id: 583231,
  location: "San Francisco",
  login: "octocat",
  name: "The Octocat",
  node_id: "MDQ6VXNlcjU4MzIzMQ==",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  public_gists: 8,
  public_repos: 8,
  received_events_url: "https://api.github.com/users/octocat/received_events",
  repos_url: "https://api.github.com/users/octocat/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  twitter_username: null,
  type: "User",
  updated_at: "2023-06-22T11:15:59Z",
  url: "https://api.github.com/users/octocat"
};

const dateTrans = (date) => {
  const dateObj = new Date(date);
  const dateString = dateObj.toDateString();
  const [weekday, month, day, year] = dateString.split(" ");
  return `${day} ${month} ${year}`;
};

const Info = (user) => {
  avatarMobile.src = user.avatar_url;
  avatarDesktop.src = user.avatar_url;
  nameElement.textContent = user.name;
  login.textContent = "@" + user.login;
  const date = dateTrans(user.created_at);
  joinDate.textContent = "Joined " + date;
  bio.textContent = user.bio || "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
  repos.textContent = user.public_repos;
  followers.textContent = user.followers;
  following.textContent = user.following;

  if (user.location) {
    city.textContent = user.location;
  } else {
    city.textContent = "Not Available";
    city.parentElement.style.opacity = 0.5;
  }

  if (user.blog) {
    blog.textContent = user.blog;
    blog.href = user.blog;
  } else {
    blog.textContent = "Not Available";
    blog.href = "#";
    blog.parentElement.style.opacity = 0.5;
  }

  if (user.twitter_username) {
    twitter.textContent = user.twitter_username;
    twitter.href = user.blog;
  } else {
    twitter.textContent = "Not Available";
    twitter.parentElement.style.opacity = 0.5;
  }

  if (user.company) {
    company.textContent = user.company;
  } else {
    company.textContent = "Not Available";
    company.parentElement.style.opacity = 0.5;
  }
};

Info(octocat);