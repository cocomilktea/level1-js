var characterArr = [];


//배열을 만드는 함수
//arr : 캐릭배열
//return : 없음
function generateArr(arr){
	var n = [0, 1, 2, 3, 4, 5, 6, 7];
	for(var i = 0; i < 7; i++){
		characterArr[i] = [];
		for(var j = 0; j < 7; j++){
			//characterArr[i][j] = i * 7 + j +1;
			var r = Math.floor(Math.random() * 8);
			characterArr[i][j] = r;
		}
	}
}
generateArr(characterArr);
console.log(characterArr);



//html화면에 뿌려주기
//arr : 캐릭배열
//return : 없음
function updateHtml(arr){
	for(var i = 0; i < 7; i++){
		for(var j = 0; j < 7; j++){
			var h = document.getElementById("n"+i+j);
			h.innerHTML = characterArr[i][j];
		}
	}
}
updateHtml(characterArr);


//클릭한 값 위치 가져오기
//arr : 캐릭배열, v : 클릭한값
//return : 값이 있으면 pos리턴 없으면 null 리턴
function findPosition(arr, v){
	var pos = {x : -1, y : -1}; //-1은 없는값으로 초기화
	for(var i = 0; i < 7; i++){
		for(var j = 0; j < 7; j++){
			if(arr[i][j] ==  v ){
				pos.x = i;
				pos.y = j;
				break;
			}
		}
	}
	if(pos.x !== -1){
		return pos;
	} else {
		return null;
	}

}



//클릭이벤트 함수
function pangClick(event){
	//var v = event.target.innerHTML;
	var v = event.target.id;
	console.log(v);
	console.log(findPosition(characterArr, v));
}





