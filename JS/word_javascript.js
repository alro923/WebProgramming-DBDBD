$(function() {
  $('ul.tab li').click(function() { /*li를 클릭할경우*/
    var activeTab = $(this).attr('data-tab'); /*속성 관리*/
    $('ul.tab li').removeClass('current'); /*이전 클라스의 current클라스 속성을 지우고*/
    $('.tabcontent').removeClass('current'); /*tabcontent클라스의 current클라스 속성 제거*/
    $(this).addClass('current'); /*클릭한 클라스의 current클라스 추가*/
    $('#' + activeTab).addClass('current'); /*활성된 tap에 current클라스 추가*/
  })
});
