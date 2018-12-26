const cardContainer = $('#cardContainer');
let cardArr = [];


//카드 뒷배경
for(let i =0; i< 16; i++){
  const card = $('<div/>');
  card.addClass('back');
  card.appendTo(cardContainer);
}

const cardObj ={
  top: 0,
  left: 0,
  cardNum:0,
};

var emptyPos = Math.floor(Math.random()*16)+1;

for(let i=1; i<= 16; i ++){
  const card = $('<div/>');
  card.addClass('card');
  
  if(i === emptyPos){
    card.addClass('empty');
    card.attr('id', 'emptyCard');
  } else {
    cardObj.cardNum++;
    card.text(cardObj.cardNum);    
    card.attr('id', 'card'+ cardObj.cardNum);
  }
  
  card.css('top',cardObj.top+'px');
  card.css('left',cardObj.left+'px');
  card.appendTo(cardContainer);

  if(i % 4 === 0){
    cardObj.top += 104;
    cardObj.left = 0;
  } else {        
    cardObj.left += 104
  }
}

$('.card').not('.empty').on('click', function(e){
  const card = $(e.target);
  const cardPos = card.position();
  const empty = $('#emptyCard');
  const emptyPos = empty.position();

  //맨 왼쪽
  if(emptyPos.left === 0){

    if(cardPos.top - emptyPos.top === 104){
      moveUp(card, empty);
    }else if(emptyPos.top - cardPos.top === 104){
      moveDown(card, empty);
    }else if(cardPos.left - emptyPos.left === 104){
      moveLeft(card, empty);
    }

  //맨 오른쪽
  } else if(emptyPos.left === 312){

    if(cardPos.top - emptyPos.top === 104){
      moveUp(card, empty);
    }else if(emptyPos.top - cardPos.top === 104){
      moveDown(card, empty);
    }else if(emptyPos.left - cardPos.left === 104){
      moveRight(card, empty);
    }

  //맨 위  
  } else if(emptyPos.top === 0){
    if(cardPos.left - emptyPos.left === 104){
      moveLeft(card, empty);
    }else if(emptyPos.left - cardPos.left === 104){
      moveRight(card, empty);
    }else if(cardPos.top - emptyPos.top === 104){
      moveUp(card, empty);
    }

  //맨 아래
  } else if(emptyPos.top === 312){
    if(cardPos.left - emptyPos.left === 104){
      moveLeft(card, empty);
    }else if(emptyPos.left - cardPos.left === 104){
      moveRight(card, empty);
    }else if(emptyPos.top -cardPos.top === 104){
      moveDown(card, empty);
    }

  } else {

    if(cardPos.top - emptyPos.top === 104){
      moveUp(card, empty);
    }else if(emptyPos.top - cardPos.top === 104){
      moveDown(card, empty);
    }else if(emptyPos.left - cardPos.left === 104){
      moveRight(card, empty);
    } else if(cardPos.left - emptyPos.left === 104){
      moveLeft(card, empty);
    }
  }
});

function moveUp(card, empty){
  if(card.position().left !== empty.position().left || card.position().top - empty.position().top !== 104 ){
    return;
  }
  card.animate({top: '-=104px'},400);
  empty.css({top: '+=104px'});
}

function moveDown(card, empty){
  if(card.position().left !== empty.position().left || empty.position().top - card.position().top !== 104 ){
    return;
  }
  card.animate({top: '+=104px'},400);
  empty.css({top: '-=104px'});
}

function moveLeft(card, empty){
  if(card.position().top !== empty.position().top || card.position().left - empty.position().left !== 104 ){
    return;
  }
  card.animate({left: '-=104px'},400);
  empty.css({left: '+=104px'});
}

function moveRight(card, empty){
  if(card.position().top !== empty.position().top || empty.position().left - card.position().left !== 104 ){
    return;
  }
  card.animate({left: '+=104px'},400);
  empty.css({left: '-=104px'});
}