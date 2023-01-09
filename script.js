"use strict";

let insertBtn = document.getElementById("insert-btn");
let teamMemberInput = document.getElementById("team-member-name");
let memberList = document.getElementById("member-list");
let teamNumber = document.getElementById("team-number");
let resetBtn = document.querySelector(".reset");
let noOfnamesEnter = document.querySelector(".margin-btm span:last-child");
let teamGeneratedSection = document.getElementById("team-generated-section");
let assignBtn = document.querySelector(".btn");
let count = 1;
// console.log(
//   insertBtn,
//   teamMemberInput,
//   teamNumber,
//   resetBtn,
//   noOfnamesEnter,
//   teamGeneratedSection
// );
let teamNames = [];
let teamMembersBlock;
insertBtn.addEventListener("click", () => {
  if (teamMemberInput.value === "") {
    alert("Text cannot be empty!");
    return;
  }
  teamMembersBlock = document.createElement("li");
  teamMembersBlock.innerText = teamMemberInput.value;
  teamNames.push(teamMembersBlock.innerText);
  memberList.appendChild(teamMembersBlock);
  noOfnamesEnter.innerText = count++;
  teamMemberInput.value = "";
  console.log(teamNames);
});

assignBtn.addEventListener("click", () => {
  if (noOfnamesEnter.innerText == 0) {
    alert("Enter the team members name");
    return;
  }
  //   let results = []
  //   while (teamNumber.length){
  //     results.push(teamNumber.splice(0,))
  //   }
});
