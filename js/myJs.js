$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);
});

function firstQuestion() {
  $(".content").hide();
  Swal.fire({
    title: "Hiiiii chào cậu!",
    confirmButtonText: "Đi tiếp nà",
    text: "Tớ ở đây chỉ để chúc mừng sinh nhật Tâm thôi<<3. Được rồi giờ thì ấn nút để tiếp tục nha",
    imageUrl: '../img/cat.gif',
    imageWidth: 300,
    imageHeight: 300,
    background: '#fff url("../img/iput-bg.jpg")',
    imageAlt: "Custom image",
  }).then(function () {
    Swal.fire({
      title: "Khoan đã! Dừng lại!!",
      text: "Cậu đã bị bắt vì tội quá dễ thương, mời cậu trả lời những câu hỏi sau một cách thật lòng",
      imageUrl:'../img/found.jpg',
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("../img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  });
}
// switch button position
function switchButton() {
  var audio = new Audio("../sound/duck.mp3");
  audio.play();
  audio.volume = 0.2;
  var leftNo = $("#no").css("left");
  var topNO = $("#no").css("top");
  var leftY = $("#yes").css("left");
  var topY = $("#yes").css("top");
  $("#no").css("left", leftY);
  $("#no").css("top", topY);
  $("#yes").css("left", leftNo);
  $("#yes").css("top", topNO);
}
// move random button póition
function moveButton() {
  var audio = new Audio("../sound/Swish1.mp3");
  audio.play();
  audio.volume = 0.2;
  if (screen.width <= 600) {
    var x = Math.random() * 300;
    var y = Math.random() * 500;
  } else {
    var x = Math.random() * 500;
    var y = Math.random() * 500;
  }
  var left = x + "px";
  var top = y + "px";
  $("#no").css("left", left);
  $("#no").css("top", top);
}
function move1() {
  if (screen.width <= 600) {
    var x = Math.random() * 100;
  } else {
    var x = Math.random() * 200;
  }
  var left = x + "px";
  $("#yes").css("left", left);
}

var n = 0;
$("#no").mousemove(function () {
  if (n < 1) switchButton();
  if (n > 1) moveButton();
  n++;
});
$("#no").click(() => {
  if (screen.width >= 900) switchButton();
});
//let m = 0 ;
//$('#yes').mousemove(function() {
//  if(m <= 100) move1() ;
// ++m ;
//});
// generate text in input
function textGenerate() {
  var n = "";
  var text = " Lỡ yêu rồi biết phải làm sao >///////<  ";
  var a = Array.from(text);
  var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
  var count = textVal.length;
  if (count > 0) {
    for (let i = 1; i <= count; i++) {
      n = n + a[i];
      if (i == text.length + 1) {
        $("#txtReason").val("");
        n = "";
        break;
      }
    }
  }
  $("#txtReason").val(n);
  setTimeout("textGenerate()", 1);
}

// show popup
var m = 0;
var k = 0;
document.getElementById("yes").onclick = function () {
  myFunction();
};
function me() {
  document.getElementById("me").style.textAlign = "left";
}
function myFunction() {
  if (m == 0) document.getElementById("yes").innerHTML = "Dỗi ròiii";
  if (m == 1)
    document.getElementById("yes").innerHTML =
      "Sao không nhấn nút màu xanh tiếp đi";
  if (m == 2)
    document.getElementById("yes").innerHTML =
      "Bảo người ta không có cửa cơ mà";
  if (m == 3)
    document.getElementById("yes").innerHTML = "Sao mới đầu hông nói dzậy đó";
  if (m == 4) document.getElementById("yes").innerHTML = "Click để hết dỗi";
  if (m == 5) document.getElementById("yes").innerHTML = "Click để hết dỗix2";
  if (m == 6) document.getElementById("yes").innerHTML = "Click để hết dỗix3";
  if (m == 7)
    document.getElementById("yes").innerHTML = "Click để hết dỗix3,10";
  if (m == 8)
    document.getElementById("yes").innerHTML = "Click để hết dỗix3,11";
  if (m == 9)
    document.getElementById("yes").innerHTML = "Click để hết dỗix3,12";
  if (m == 10)
    document.getElementById("yes").innerHTML = "Click để hết dỗix3,13";
  if (m == 11)
    document.getElementById("yes").innerHTML = "Click để hết dỗix3,14";
  if (m == 12)
    document.getElementById("yes").innerHTML = "Yêu cậu nhìu lắmmx3,15";
  if (m == 13)
    document.getElementById("yes").innerHTML = "Yêu cậu nhìu lắmmx3,16";
  if (m >= 14) {
    var audio = new Audio('../sound/Aww.mp3');
    audio.play();
    audio.volume = 0.3;
    Swal.fire({
      title: "Ỏooo! Ngại quá, nói cho tớ lí do cậu thích tớ đi :333",
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy (Thử viết gì đó đi)'>",
      background: '#fff url("../img/iput-bg.jpg")',
      backdrop: `
              rgba(0,0,123,0.4)
              url("../img/giphy2.gif")
              left top
              no-repeat
            `,
      confirmButtonColor: "#3085d6",
      confirmButtonColor: "#fe8a71",
      confirmButtonText: "Gửi cho tớ <3",
    }).then((result) => {
      if (k == 0) {
        var audio = new Audio('../sound/shushine1.mp3');
        audio.play();
        audio.volume = 0.2;
        k = 1;
      }
      if (result.value) {
        Swal.fire({
          title: " Gì mà dễ thương zậy trời <<3 ",
          imageUrl:"../img/luv.jpg",
          imageWidth: 300,
          imageHeight: 300,
          confirmButtonText: "Full-time with full love",
          showCancelButton: true,
          cancelButtonText: "Part-time nhưng vẫn full love",
          background: '#fff url("../img/iput-bg.jpg")',
          text: `
          Tớ cho cậu hai sự lựa chọn nè, tùy ý cậu chọn nhaaaaaa. 
          Cậu muốn làm người yêu tớ: `,
          confirmButtonColor: "#F24C4C",
          cancelButtonColor: "#333C83",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              width: 500,
              background: '#fff url("../img/iput-bg.jpg")',
              html: true,
              html: `
                <h2 style="font-family:Amatic SC; color:#F7D716"> ✦Cảm ơn cậu đã sử dụng dịch vụ✦</h2>
                <h5 style="text-align:left"> Hóa đơn thanh toán </h5>
                <div style="text-align:left"> Hướng dẫn sử dụng (đọc kĩ trước khi dùng) </div>
                <div style="text-align:left"> Simple love full topping </div>
                <div style="text-align:left"> Phiếu bảo hành trọn đời </div>
                <div style="text-align:left"> Phương thức hoàn trả: Không thể hoàn trả </div>
                <div style="text-align:left"> ---------------------------------------------------- </div>
                <p style="text-align:left"> Phí thanh toán: Nụ cười của cậu <3 </p>
                <i style="font-size:15px; text-align:left; color:#3E497A">Chú ý: Sản phẩm không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh</i>
              `,
            }).then((result) => {
              Swal.fire({
                imageWidth: 300,
                imageHeight: 300,
                imageUrl: '../img/tam.jpg',
                background: '#fff url("../img/iput-bg.jpg")',
                imageAlt: "Custom image",
                html: true ,
                html:`
                <h2 style="font-family:Amatic SC; color:#F7D716"> ✦HAPPY BIRTHDAY TÂM✦</h2>
                <div> Chúc mừng Tâm đã bước sang tuổi 18 !! Chúc Tâm sẽ ngày càng xinh đẹp, vui vẻ hơn nữa và đón chờ thêm bất ngờ vào ngày này năm sau nha !! Bye <<3
                `,
              })
            })
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            Swal.fire({
              width: 500,
              background: '#fff url("../img/iput-bg.jpg")',
              html: true,
              html: `
                <h2 style="font-family:Amatic SC; color:#F7D716"> ✦Cảm ơn cậu đã sử dụng dịch vụ✦</h2>
                <h5 style="text-align:left"> Hóa đơn thanh toán </h5>
                <div style="text-align:left"> Hướng dẫn sử dụng (đọc kĩ trước khi dùng) </div>
                <div style="text-align:left"> Simple love không đá nhiều đường </div>
                <div style="text-align:left"> Hỗ trợ nâng cấp lên full-time khi có nhu cầu  </div>
                <div style="text-align:left"> Phương thức hoàn trả: Không thể hoàn trả </div>
                <div style="text-align:left"> ---------------------------------------------------- </div>
                <p style="text-align:left"> Phí thanh toán: Nụ cười của cậu <3 </p>
                <i style="font-size:15px; text-align:left; color:#3E497A">Chú ý: Sản phẩm có khả năng gây nghiện, vui lòng sử dụng theo khuyến cáo của bác sĩ</i>
              `,
            }).then((result) => {
              Swal.fire({
                imageWidth: 300,
                imageHeight: 300,
                imageUrl: '../img/tam.jpg',
                background: '#fff url("../img/iput-bg.jpg")',
                imageAlt: "Custom image",
                html: true ,
                html:`
                <h2 style="font-family:Amatic SC; color:#F7D716"> ✦HAPPY BIRTHDAY TÂM✦</h2>
                <div> Chúc mừng Tâm đã bước sang tuổi 18 !! Chúc Tâm sẽ ngày càng xinh đẹp, vui vẻ hơn nữa và đón chờ thêm bất ngờ vào ngày này năm sau nha !! Bye <<3
                `,
              })
            })
          }
        });
      }
    });
  }
  m++;
}
