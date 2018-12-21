var input = {array: []};
input.getInput = function(){
  return this.array.join("");
};

input.prepareCalcul = function(){
  this.array = this.getInput().split(" ");
};

input.getValue = function(){  
  return this.array.shift();
};

input.isEmpty = function(){
  return this.array.length === 0;
}

var output = {};
output.text = document.getElementById('output');
output.display = function(str){
  this.text.innerText = str;
};

function clickButton(e){
  var str = e.target.innerText;

  switch(str){
    case 'del':
    input.array.pop();
    break;
    case '+':
    case '-':
    case '*':
    case '/':
    input.array.push(' ' + str + ' ');
    break;
    default:
    input.array.push(str);
  }

  if(input.isEmpty()){
    output.display(0); 
  } else {
    output.display(input.getInput());
  }
  
}

var calculator = {};

calculator.calculate = function(n1, n2, operator){
  var result = 0;
  switch(operator){
      case '+':
        result = n1 + n2;
        return result;
      case '-':
        result = n1 - n2;
        return result;
      case '*':
        result = n1 * n2;
        return result;
      case '/':
        result = n1 / n2;
        return result;
      default :
        return 'error';  
  }
}

function showResult(e){
  console.log(input.getInput());
  input.prepareCalcul();
  var result = Number(input.getValue());
  while(!input.isEmpty()){        
    var operator = input.getValue();
    var second = Number(input.getValue());
    result = calculator.calculate(result, second, operator);
    if(result === 'error'){
      alert('유효한 식이 아닙니다.');
      return;
    }
  }
  output.display(result);
  input.array = [result];
}

