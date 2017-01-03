// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
        animationCallbacks: {
                    setupQuiz: function () {},
                    startQuiz: function () {countdown();$(".quizTimeOut img").remove();$(".quizTimeOut").append('<img src="./images/sandglass.gif">')},
                    resetQuiz: function () {countreset()},
                    checkAnswer: function () {},
                    nextQuestion: function () {},
                    backToQuestion: function () {},
                    completeQuiz: function () {countpause();$(".quizTimeOut img").remove();}
                }
    });
	
	
});

/*倒计时*/
var quizTime, quizTimeCount=parseInt($('#theTimeOver').html()), quizTimeCountReset=parseInt($('#theTimeOver').html());

function countdown() {
	$('#theTimeOver').html(quizTimeCount);
    if (quizTimeCount === 0) {
		$(".quizEndTime").show();
		$(".quizTimeOut img").remove();
    } else {
        quizTimeCount--;
        quizTime = setTimeout(countdown, 1000);
    }
}

function countpause() {
    clearTimeout(quizTime);
}

function countreset() {
    countpause();
    quizTimeCount = quizTimeCountReset;
    $('#theTimeOver').html(quizTimeCount);
}
