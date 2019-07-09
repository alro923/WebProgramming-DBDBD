// 첫번째꺼 : 1 2 5 7 12
window.onload = function() {
  setInterval(function() {
    var nowck1 = document.getElementById("inputid1"); /*해당 아이디를 가진 버튼 엘리먼트를 받아서*/
    var nowck2 = document.getElementById("inputid2");
    var nowck3 = document.getElementById("inputid3");
    if (nowck1.checked == true) {/*토글 버튼이 체크되었을 경우*/
      document.getElementById("imgid1").style.opacity = "0.1";
      document.getElementById("imgid5").style.opacity = "0.1";
      document.getElementById("imgid7").style.opacity = "0.1";
      document.getElementById("imgid9").style.opacity = "0.1";
      document.getElementById("imgid10").style.opacity = "0.1";
      document.getElementById("imgid12").style.opacity = "0.1";

      document.getElementById("kimgid4").style.opacity = "0.1";
      document.getElementById("kimgid6").style.opacity = "0.1";
      document.getElementById("kimgid8").style.opacity = "0.1"; /*해당 이미지들의 투명도 조정*/
      document.getElementById("kimgid9").style.opacity = "0.1";
      document.getElementById("kimgid11").style.opacity = "0.1";
      document.getElementById("kimgid14").style.opacity = "0.1";
    } else if (nowck1.checked == false) { /*토글 헤제했을 경우 다시 투명도 조정*/

      document.getElementById("imgid1").style.opacity = "1";
      document.getElementById("imgid5").style.opacity = "1";
      document.getElementById("imgid7").style.opacity = "1";
      document.getElementById("imgid9").style.opacity = "1";
      document.getElementById("imgid10").style.opacity = "1";
      document.getElementById("imgid12").style.opacity = "1";

      document.getElementById("kimgid4").style.opacity = "1";
      document.getElementById("kimgid6").style.opacity = "1";
      document.getElementById("kimgid8").style.opacity = "1";
      document.getElementById("kimgid9").style.opacity = "1";
      document.getElementById("kimgid11").style.opacity = "1";
      document.getElementById("kimgid14").style.opacity = "1";
    }
    if (nowck2.checked == true) {
      document.getElementById("imgid3").style.opacity = "0.1";
      document.getElementById("imgid6").style.opacity = "0.1";
      document.getElementById("imgid8").style.opacity = "0.1";
      document.getElementById("imgid11").style.opacity = "0.1";

      document.getElementById("kimgid1").style.opacity = "0.1";
      document.getElementById("kimgid2").style.opacity = "0.1";
      document.getElementById("kimgid5").style.opacity = "0.1";
      document.getElementById("kimgid10").style.opacity = "0.1";
    } else if (nowck2.checked == false) {
      document.getElementById("imgid3").style.opacity = "1";
      document.getElementById("imgid6").style.opacity = "1";
      document.getElementById("imgid8").style.opacity = "1";
      document.getElementById("imgid11").style.opacity = "1";

      document.getElementById("kimgid1").style.opacity = "1";
      document.getElementById("kimgid2").style.opacity = "1";
      document.getElementById("kimgid5").style.opacity = "1";
      document.getElementById("kimgid10").style.opacity = "1";
    }
    if (nowck3.checked == true) {
      document.getElementById("imgid4").style.opacity = "0.1";
      document.getElementById("imgid13").style.opacity = "0.1";
      document.getElementById("imgid14").style.opacity = "0.1";

      document.getElementById("kimgid3").style.opacity = "0.1";
      document.getElementById("kimgid7").style.opacity = "0.1";
      document.getElementById("kimgid12").style.opacity = "0.1";
      document.getElementById("kimgid13").style.opacity = "0.1";
    } else if (nowck3.checked == false) {
      document.getElementById("imgid4").style.opacity = "1";
      document.getElementById("imgid13").style.opacity = "1";
      document.getElementById("imgid14").style.opacity = "1";

      document.getElementById("kimgid3").style.opacity = "1";
      document.getElementById("kimgid7").style.opacity = "1";
      document.getElementById("kimgid12").style.opacity = "1";
      document.getElementById("kimgid13").style.opacity = "1";
    }

  }, 100);
}

// 첫번째꺼 : 1 5 7 9 10 12    4 6 8 9 11 14
// 두번째꺼 : 3 6 8 11         1 2 5 10
// 세번째꺼 :4 13 14            3 7 11 13
