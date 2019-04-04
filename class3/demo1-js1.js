// if
var iScore = 70;
if( iScore >= 60 ){
    document.write('[IF] good job!' + '<hr/>');
}

// if...else...
var iScore = 55;
if( iScore >= 60 ){
    document.write('[IF] good job!' + '<hr/>');
}else{
    document.write('[IF] bad job!' + '<hr/>');
}

//100 - 90 优
//90  - 75 良
//75  - 60 中
//60以下  ：差

if( iScore >= 90 ){
    document.write('[IF] 优!' + '<hr/>');
}else if( iScore >= 75 ){
    document.write('[IF] 良!' + '<hr/>');
}else if( iScore >= 60 ){
    document.write('[IF] 中!' + '<hr/>');
}else{
    document.write('[IF] 差!' + '<hr/>');
}


// switch   用到的情况都必须是等于
var day = 8;

switch(day){
    case 0:
        x = '星期天';
        break;
    case 1:
        x = '星期一';
        break;
    case 2:
        x = '星期二';
        break;
    case 3:
        x = '星期三';
        break;
    case 4:
        x = '星期四';
        break;
    case 5:
        x = '星期五';
        break;
    case 6:
        x = '星期六';
        break;
    default:
        x = 'Error';
        break;
}
document.write('[switch] ' + x + '<hr/>');
// switch 一定要有break

// switch and if; switch能做的，if都能做


