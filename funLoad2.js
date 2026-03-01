var backN = 1;
var backNN = 0;
//["width","top","left","image.src","none","display","scene","serif","z","event","speed","backN","backNN"]

var arrow = ["60left.png","60pushed.png"];
var backSS = [["stage10.png","stage11.png"],["15.png","14.png"]];

var spF2 = [["20%","30%","30%","16.png","block",null,0,30,"no",20,1,0,1],["20%","10%","10%","イラスト15.png","block",null,0,30,"talk",20,0,0,2],["50%","50%","50%","イラスト15.png","block",null,1,30,"talk",20,0,1,1],["20%","50%","50%","16.png","block",null,0,30,"catch",20,0,0,4]];

var EwhChi = "100%";

var bo4xy = [["70%","40%",null,0,1000,null,1,1],["70%","30%",null,1,1000,0,0,0]];

var serifN = 0;
var serifNN = 0;
var serifNS = [["Hello.","Wellcome to the school."],["a","b","c"],["see you"],["b"]];

var selectN = 0;
var decide = 0;

var selectS = [
["selectM","changeA",0,["a","b"],serifNS,0,1,[],[1,2]]
];

//tMa = [[トリガー名、トリガー変数の数値など、eventTagインデックス]]
var tMa = [
["serifNandNN",2,1,1]
];

var eventTag = [
["changeA",serifN,1,selectS,0,0],
["changeA",serifN,2,selectS,0,1],
["creEle","img",["15.png","name1",100,0,0],serifNN,1,1],["removeEle","nameH",["name1"],serifNN,1,2],
[null,null,null,null]
];

var tMaAdd = [["serifNandNN",3,tMa[0][2],tMa[0][3]+1]];

for (let i = 0; i < tMaAdd.length; i++) {
tMa.push(tMaAdd[i]);
}

