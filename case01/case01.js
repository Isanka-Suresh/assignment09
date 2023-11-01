var currentDiv=-1;
var divCount=7;
var direct="RIGHT";
var intervalId=null;
var audio=$("#audiomp3")

const startRed = ()=>{
    var style1={background:'white'}
    var style2={background:'#ff0000'}
    var style3={background:'#c91919'}
    var style4={background:'#962222'}
    var style5={background:'#9a5252'}
    var style6={background:'#0800ff'}
    var style7={background:'#1936c9'}
    var style8={background:'#223196'}
    var style9={background:'#525c9a'}

    $(".smallS").css(style1)
    if (direct==="RIGHT") {
        $(".smallS").eq(++currentDiv).css(style2)
        if (currentDiv>0) {
            $(".smallS").eq(currentDiv - 1).css(style3)
        }
        if (currentDiv>1){
            $(".smallS").eq(currentDiv-2).css(style4)
        }
        if (currentDiv>2){
            $(".smallS").eq(currentDiv-3).css(style5)
        }

        if (currentDiv===divCount-1){
            direct="LEFT"
        }
    }else{
        $(".smallS").eq(--currentDiv).css(style2)
        if (currentDiv<7){
            $(".smallS").eq(currentDiv+1).css(style3)
            $(".smallS").eq(currentDiv+2).css(style4)
            $(".smallS").eq(currentDiv+3).css(style5)
        }

        if (currentDiv===0){
            direct="RIGHT"
        }
    }

}

$("#btnStart").on("click",(event)=>{
    if (intervalId===null){
        intervalId=setInterval(startRed,100)
    }
    $("#audio")[0].play()
})

$("#btnStop").on("click",()=>{
    clearInterval(intervalId);
    intervalId=null;
    $("#audio")[0].pause()
})
