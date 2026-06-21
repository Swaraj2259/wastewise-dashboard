const textColor = "#fafafa";

new Chart(document.getElementById("lineChart"), {
type: "line",
data: {
labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets: [{
label: "Waste Collected (KG)",
data: [1200,1800,1500,2200,2600,2100,3000],
borderColor: "#a1a1a1",
backgroundColor: "#737373",
fill: false,
tension: 0.4
}]
},
options: {
plugins:{
legend:{
labels:{
color:textColor
}
}
},
scales:{
x:{
ticks:{color:textColor},
grid:{color:"#262626"}
},
y:{
ticks:{color:textColor},
grid:{color:"#262626"}
}
}
}
});

new Chart(document.getElementById("pieChart"), {
type: "doughnut",
data: {
labels:["Organic","Plastic","Metal","Paper"],
datasets:[{
data:[45,25,15,15],
backgroundColor:[
"#404040",
"#525252",
"#737373",
"#a1a1a1"
]
}]
},
options:{
plugins:{
legend:{
labels:{
color:textColor
}
}
}
}
});