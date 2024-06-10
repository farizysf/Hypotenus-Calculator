let a;
let b;
let c;
let flag = 0;

document.getElementById("button").onclick = function () {
  if (flag == 0) {
    a = Number(document.getElementById("input").value);
    console.log(a);
    document.getElementById("label").innerHTML = "Please enter value for b";
    let clearValue = document.getElementById("input");
    if (clearValue.value != "") clearValue.value = "";
    flag += 1;
  } else if (flag == 1) {
    b = Number(document.getElementById("input").value);
    console.log(b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    console.log(c);
    document.getElementById("p1").innerHTML =
      "The two values entered are : " + a + " and " + b;
    document.getElementById("p2").innerHTML = "The hypotenus is : " + c;
  }
};

document.getElementById("reset").onclick = function () {
  let clearValue = document.getElementById("input");
  if (clearValue.value != "") clearValue.value = "";
  document.getElementById("label").innerHTML = "Please enter value of a :";
  document.getElementById("p1").innerHTML = "The two values entered are : ";
  document.getElementById("p2").innerHTML = "The hypotenus is : ";
  flag = 0;
};
