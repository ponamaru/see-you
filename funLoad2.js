var backN = 0;
var backNN = 0;
//["width","top","left","image.src","none","display","scene","serif","z","event","speed","backN","backNN"]

var arrow = ["60left.png","60pushed.png"];
var backSS = [["8.png","5.png"],["15.png","18.png"]];

var spF2 = [["10%","32%","64%","12.png","none",null,0,30,"no",20,0,0,1],["40%","34%","30%","11.png","block",null,3,30,"talk",20,0,1,2],["30%","30%","30%","Toumi.png","block",null,2,30,"talk",20,1,0,3]];

var EwhChi = "100%";

var bo4xy = [["70%","40%",null,0,1000,null,1,1],["70%","30%",null,1,1000,0,0,0]];

var serifN = 0;
var serifNN = 0;
var serifNS = [
["<p><font size='5'>渡海</font></p>「ここを曲がったところにピンクの箱があるよ。」","<p><font size='5'>渡海</font></p>「そこを探してみたら？」"],
["a","b","c"],
["<p><font size='5'>渡海</font></p>やあ。"],
["箱を開けた","鍵を手に入れた"],
["<p><font size='5'>渡海</font></p>またね。"],
["<p><font size='5'>渡海</font></p>鍵は見つかった？"]
];

var selectN = 0;
var decide = 0;

var selectS = [
["selectM","changeA",0,["「鍵を探しているの」","「なんでもない」"],serifNS,2,0,[],[0,4]]
];

//tMa = [[トリガー名、トリガー変数の数値など、eventTagインデックス]]
var tMa = [
["serifNandNN",2,0,0],
["serifNandNN",5,3,0],
["serifNandNN",6,3,0],
["serifNandNN",7,3,0],
["serifNandNN",8,3,0],
["serifNandNN",9,3,0]
];



var eventTag = [
["changeA",serifN,1,selectS,0,0],
["changeA",serifN,2,selectS,0,1],
["creEle","img",["11.png","name1",50,50,10],serifNN,0,0],
["removeEle","nameH",["name1"],serifNN,1,2],
[null,null,null,null],
["CspF",null,[1,3,"10.png"],null,3,0],
["CspF",null,[0,4,"block"],null,3,0],
["CspF",null,[1,8,"no"],null,3,0],
["CspF",null,[2,6,5],null,3,0],
["creEle","audio",["鍵を落とす.mp3","name1",50,50,10],serifNN,0,0]
];

var tMaAdd = [["serifNandNN",3,tMa[0][2],tMa[0][3]+1]];

for (let i = 0; i < tMaAdd.length; i++) {
tMa.push(tMaAdd[i]);
}

