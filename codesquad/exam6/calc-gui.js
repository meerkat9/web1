var input = {};
    var calculator = {};

    input.getValue = function(){
      return input.valueArr.shift();
    };

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

    function main(){
      var inputValue = document.getElementById('input').value;
      input.valueArr = inputValue.split(" ");

      var result = Number(input.getValue());
      while(input.valueArr.length > 0){        
        var operator = input.getValue();
        var second = Number(input.getValue());
        result = calculator.calculate(result, second, operator);
        if(result === 'error'){
          alert('연산자는 + , -, *, / 만 가능합니다.');
          return;
        }
      }
      document.getElementById('result').innerText = `최종결과 값은 ${result} 입니다.`;      
    }