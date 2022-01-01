// me
const mySkills = [
  "C/C++",
  "Java Script",
  "Python",
  "Java",
  "Data Struccture and ALgorithm",
  "OOP",
  "SQL",
  "React Js",
  "Node Js",
  "Git",
];
const me = document.getElementById("me");
for (let i = 0; i < mySkills.length; i++) {
  me.innerHTML += `<h3>${mySkills[i]}</h3>`;
}

// oj
const codeforcesOjCard = document.getElementById("codeforcesOjCard");

let cfurl = "https://codeforces.com/api/user.info?handles=Adol";
fetch(cfurl)
  .then((res) => res.json())
  .then((out) => {
    codeforcesOjCard.innerHTML += `<p>Max rating : ${out.result[0].maxRating}</p>
    <p>Current rating : ${out.result[0].rating}</p>
    `;
  })
  .catch((err) => {
    throw err;
  });
let cfurlP = "https://codeforces.com/api/user.status?handle=Adol";
var sum = 0;
fetch(cfurlP)
  .then((res) => res.json())
  .then((out) => {
    var result = out.result;

    for (var tmp in result) {
      if (result[tmp].verdict == "OK") sum++;
    }
    codeforcesOjCard.innerHTML += `<p>Total Problems Solved : ${sum}</p>`;
  })
  .catch((err) => {
    throw err;
  });
const uvaOjCard = document.getElementById("uvaOjCard");
const urlUva = "https://uhunt.onlinejudge.org/api/subs-user/924876";
const mySet = new Set();
fetch(urlUva)
  .then((res) => res.json())
  .then((out) => {
    // uvaOjCard.innerHTML += out.uname;

    var allSub = out.subs;
    for (var tmp in allSub) {
      if (allSub[tmp][2] == 90) mySet.add(allSub[tmp][1]);
    }

    uvaOjCard.innerHTML += `<p>Total Problems Solved : ${mySet.size}</p>`;
  })
  .catch((err) => {
    throw err;
  });

// contest
const contestRank = document.getElementById("contestRank");
const myCOntest = [
  {
    contestName: "Daffodil International University Summer 2017 Takeoff",
    contestLink:
      "https://algo.codemarshal.org/contests/diu-summer2017-takeoff-main/standings",
    contestRank: "12",
  },
  {
    contestName: "DIU Intra University Programming Contest 2019",
    contestLink: "https://toph.co/c/diu-intra-2019/standings",
    contestRank: "26",
  },
  {
    contestName: "ICPC Dhaka Regional 2020 Online Preliminary",
    contestLink:
      "https://algo.codemarshal.org/contests/icpc-dhaka-20-preli/standings",
    contestRank: "272",
  },
  {
    contestName: "DIU Intra University Programming Contest 2021",
    contestLink: "https://toph.co/c/diu-intra-university-2021/standings",
    contestRank: "22",
  },
];
for (let i = 0; i < myCOntest.length; i++) {
  contestRank.innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>
    <a href="${myCOntest[i].contestLink}">${myCOntest[i].contestName}</a>
    </td>
    <td>${myCOntest[i].contestRank}</td>
    </tr>`;
}

// projects
const projects = document.getElementById("projects");

const myProjects = [
  {
    projectName: "JOB FINDER | WEBSITE | Fall 21",
    projectPlatform: "MERN stack",
    projectDescription: "Built MERN application for find job and employees",
    projectSource: "",
  },

  {
    projectName: "SNAKE GAME | CONSOLE | Summer 21",
    projectPlatform: "C/C++",
    projectDescription:
      "Built OpenGL application for playing snake game<br>Implemented C/C++ with OOP",
    projectSource: "https://github.com/BakiAdol/Snake-Game",
  },

  {
    projectName: "RAINFALL PREDICTION | CONSOLE | Spring 21",
    projectPlatform: "ML",
    projectDescription:
      "Built ML application for predict rainfall<br>Implemented classification algorithms: SVC, Naive Bayes Classifier and KNeighborsClassifier.",
    projectSource: "https://github.com/BakiAdol/Rainfall-Prediction",
  },

  {
    projectName: "VOICE DIALER | ANDROID APP | Summer 18",
    projectPlatform: "Android",
    projectDescription:
      "Built android app for dial call and message using voice<br>Implemented Insertion Sort algorithm",
    projectSource: "https://github.com/BakiAdol/Voice-Dialer",
  },
];

for (let i = 0; i < myProjects.length; i++) {
  projects.innerHTML += `<div class="projectCard"><p>${myProjects[i].projectName}</p>
  <p>${myProjects[i].projectPlatform}</p><p>${myProjects[i].projectDescription}</p>
  <a href="${myProjects[i].projectSource}">Source</a>
  </div>`;
}
