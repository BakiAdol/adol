// codeforces api
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
