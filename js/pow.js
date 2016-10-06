var pow = function(x, y)
{

  var num;
  var exp;

  if(isNaN(x)) {
    do{
      num = + prompt('Введите число');
    }
    while(isNaN(num));
  }
  else {
    num = x;
  }

  if(isNaN(y)) {
   do{
      exp = + prompt('Введите степень');
    }
    while(isNaN(exp));
  }
  else {
    exp = y;
  }
  
  if(exp==0)
  {
    return 1;
  }
  if(exp==1)
  {
    return num;
  }
  if(exp > 1)
  {
    var result=num;
    for (var i = 1; i < exp; i++) {
      result *= num;
    }
    return result;
  }
  if(exp < 0)
  {
    if(num==0) {
      return "Деление на ноль не возможно";
    }
    var result=num;
    for (var i = -1; i > exp; i--) {
      result *= num;
    }
    result = 1/result;
    return result;
  }
}

try {
  module.exports = pow;
} catch (e) {}
