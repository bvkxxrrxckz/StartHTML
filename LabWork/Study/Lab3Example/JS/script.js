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

function nTime (obj)
{
    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
    if(h<10)
    {
        h="0"+h;
    }
    if (m <10)
    {
        m="0"+m; 
    }
    var result = h+":"+m+":"+s;
    obj.res.value = result;
}

function nDate (obj)
{
    var t = new Date();
    var d = t.getDate();
    var mon=t.getMonth();
    var y = t.getFullYear();
    switch (mon)
    {
        case 0: s = "Января"; break;
        case 5: s = "Июня"; break;
        case 9: s = "Октября"; break;
    }
    result = d+" "+s+" "+ y;
    obj.res.value=result;
}

function fulltime() 
{
    var time=new Date();
    document.clock.full.value=time.toLocaleString();
    setTimeout('fulltime()',500)
}
