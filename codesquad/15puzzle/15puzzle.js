const cardContainer = $('#cardContainer');
let cardArr = [];

const cardPos ={
  top: 0,
  left: 0,
};

for(let i =0; i< 16; i++){
  const card = $('<div/>');
  card.addClass('back');
  card.appendTo(cardContainer);
}

for(let i =1; i< 16; i++){  
  const card = $('<div/>');
  card.addClass('card');
  card.text(i);
  card.attr('id', 'card'+ i);
  card.css('top',cardPos.top+'px');
  card.css('left',cardPos.left+'px');
  cardPos.left += 104;
  if(i % 4 === 0){
    cardPos.top += 104
    cardPos.left = 0;
  }
  card.appendTo(cardContainer);
}
