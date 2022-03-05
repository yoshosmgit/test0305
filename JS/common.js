console.log("JSファイルからハロワー");

console.log("SUNABACO".split("A"));

// ここからツイターリンク
function twitText() {
	var s, url;
	s = "JSからTwitter起動してます %23SUNABACO";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}
// ここまでツイッターリンク

var region = ["koza", "ebetsu", "takamatsu"]; //配列
console.log(region);
console.log(region[0]);

//連想配列（辞書型・ディクショナリ型）
var region = {"okinawa":"koza", "hokkaido":"ebetsu"}
console.log(region["hokkaido"]);
region["koza"]="naha";
console.log("okinawa");
console.log(region["okinawa"]);
region["koza"]="naha";
console.log(region["okinawa"]);
region["okinawa"]="naha";
console.log(region["okinawa"]);

var license_flg = 0;
var money = 100;
if (license_flg == 1){
	console.log("車を運転していいよ");
}else if(money >= 800){
	console.log("電車に乗れるよ");
}else{
	console.log("歩いて帰ろう");
}

number = [1,2,3,4,5,6,7,8,9]

for(var i = 1; i <10; i++){
	console.log(i);
}

function greet(name){
	var message = name + "さん、こんにちは";
	return message
}
console.log(greet());

var h1_node = document.getElementById("h1-node")
console.log(h1_node);
var h1_text = h1_node.textContent //要素の中身だけ取得
console.log(h1_text);

// イベントの準備
var btn_node = document.getElementById("btn");
btn_node.addEventListener("click", changeText);

function changeText(){
	var h1_node = document.getElementById("h1-node")
	h1_node.textContent = "好きな文字を書いてね"
}