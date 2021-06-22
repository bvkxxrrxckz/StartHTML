/*Скрипты для индив.заданий*/

/*Сумма последовательности*/
function getRandom()
{
    return Math.random();
}
 
function fillingArray (length)
{
    let arr = new Array(length);
    for (var i = 0; i<length;i++)
    {
        arr[i]=getRandom();
    }
    return arr
}
function getArray (value)
{
    document.getElementById("array").textContent = fillingArray(value).join(", ");
    document.getElementById("sum").textContent = getSum(value);
    
}
function getSum(value)
{
    var sum = 0;
    let array = fillingArray(value);
    for(var i = 0;i<array.length;i++)
    {
        sum+=array[i];
    }
    return sum;
}

/*Майские праздники*/

    var d=document
    var t = new Date()

function fday(day)
{ 
    var s;
    switch (day)
    { case 0: s="воскресенье"; break;
        case 1: s="понедельник"; break;
        case 2: s="вторник"; break;
        case 3: s="среда"; break;
        case 4: s="четверг"; break;
        case 5: s="пятница"; break;
        case 6: s="суббота"; break;
    }
    return s
}
function def (obj)
{ 
    var s;
    let date = new Date('2021-05-01'),
        date2 = new Date('2021-05-03')

    while (date <= date2)
    {
        console.log(date)
        date.setDate( date.getDate() + 1 )
    }
   
    obj.fd.value =s
}
function aldate(obj)
{ 
    obj.aldat.value = t
}

/*Кнопка с приколом*/
function showMessage()
{
    alert("Куда это вы собрались???");
}
function setName (obj)
{
    var name;
    obj.name=name;
    return name;
   
}
function showName (obj)
{
    document.getElementById("name").textContent = setName(obj);
}






