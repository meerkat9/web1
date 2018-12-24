var cardObj = {
  array:[],
  btns:[],
  firstword: '',
  result: document.getElementsByClassName('result')[0]
};
var wordArr = ['apple', 'lime', 'grape', 'orange', 'melon', 'strawberry', 'peach', 'mango', 'tomato', 'lemon']

cardObj.chooseFruit = function(){  
  var randomPos = Math.floor(Math.random()*wordArr.length);  
  var fruit = wordArr[randomPos];
  document.getElementById('str').innerText = fruit;
  this.firstword = fruit;
  //console.log('fruit',fruit);  
}

cardObj.createCard = function(){
  //초기화
  this.array = [];
  this.btns = [];
  var container = document.getElementById('cardContainer');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  var fruit = this.firstword;
  for(let i =0; i< fruit.length; i++){
    var card = document.createElement('div');
    card.innerText = fruit[i];
    card.classList.add('card');
    this.btns.push(card);
    this.array.push(fruit[i]);
    container.append(card);
  }
};

cardObj.shuffle = function(){
  var toggle = Math.floor(Math.random()*2) === 1;
  if(toggle){
    this.swap();
  }
  var random = Math.floor(Math.random()*(this.array.length-1));
  for(let i=0; i< random; i ++){
    this.rShift();    
  }
  if(!toggle && random === 0){
    this.swap();
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
    this.init();
    document.getElementById('prize').innerText += 'O';
  } else {
    result.innerText = "일치하지 않습니다.";
    result.classList.remove('equal');
  }
}

cardObj.init = function(){
  this.chooseFruit();
  this.createCard();
  this.shuffle();
};

cardObj.init();