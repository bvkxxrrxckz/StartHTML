function showMessage ()
{
    alert("Вы щелкнули по ДИВ");
}

function areaRectangle(obj)
{
    var a=obj.t1.value;
    var b=obj.t2.value;
    var s=a*b;
    obj.result.value=s;
}