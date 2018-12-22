var cardObj = {
  array:[],
  btns:[],
  firstword: document.getElementById('str').innerText,
  result: document.getElementsByClassName('result')[0]
};

cardObj.create = function(){
  var container = document.getElementById('cardContainer');
  var str = this.firstword;
  for(let i =0; i< str.length; i++){
    var card = document.createElement('div');
    card.innerText = str[i];
    card.classList.add('card');
    this.array.push(str[i]);
    this.btns.push(card);
    container.append(card);
  }
}

cardObj.swap = function(){
  this.array.reverse();
  this.arrange();
}

cardObj.rShift = function(){
  var lastItem = this.array.pop();
  this.array.unshift(lastItem);
  this.arrange();
}

cardObj.lShift = function(){      
  var firstItem = this.array.shift();
  this.array.push(firstItem);
  this.arrange();
}

cardObj.arrange = function(){
  var btn = this.btns;
  for(let i =0; i< btn.length; i++){
    btn[i].innerText = this.array[i];
  }
  this.changeResult();
}

cardObj.changeResult = function(){
  var result = this.result;
  var cardWord = this.array.join("");
  if(cardWord === this.firstword){
    result.innerText = "일치합니다";
    result.classList.add('equal');
  } else {
    result.innerText = "일치하지 않습니다.";
    result.classList.remove('equal');
  }
}

cardObj.create();