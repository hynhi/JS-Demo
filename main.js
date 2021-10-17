// EX 1
/**
 * Khối 1
 * -tiền lương 1 ngày
 * -lấy giá trị số ngày làm từ form
 * khối2
 * -Khái báo biến salary, days, total
 * -lập công thức :total= số ngày x số lương
 * Khối 3
 * -Hiện kết quả lên UI
 */

document.getElementById("btntotal").onclick = function(){
var salary = document.getElementById("salary").value;
var days = document.getElementById("days").value;

var total = Number(days) *Number(salary);
console.log(total)
document.getElementById("txttotal").innerHTML ="kết quả là: "+ total
}

// EX 2
/**
 * khối 1
 * -lấy 5 giá trị từ form
 * khối 2
 * -khai báo biến 5 giá trị từ form và medium
 * -tính trung bình 5 số 
 * medium = (a + b + c + d + e)/5
 * khối 3
 * -hiển thị kq lên UI
 */

document.getElementById("btnmedium").onclick = function(){
   var num1 =parseFloat(document.getElementById("num1").value);
   var num2 =parseFloat(document.getElementById("num2").value);
   var num3 =parseFloat(document.getElementById("num3").value);
   var num4 =parseFloat(document.getElementById("num4").value);
   var num5 =parseFloat(document.getElementById("num5").value);

   var medium = (num1 + num2 + num3 + num4 + num5) /5;
    console.log(medium)
    document.getElementById("txtmedium").innerHTML ="kết quả là: "+ medium;
}


// EX 3
/**
 *  khối 1
 * -giá trị usd
 * -giá trị vnd =23.500
 * khối 2
 * -Khai báo biến usd, vnd, change
 * -lập công thức :change = USD *23.500
 * khối 3
 * -hiển thị kq lên UI
 */
document.getElementById("btnchange").onclick = function(){
   var usd = Number(document.getElementById("usd").value) ;
   var vnd = Number(document.getElementById("vnd").value) ;

   var change = usd* vnd;
   console.log(change);
   var currentFormat = new Intl.NumberFormat("vn-VN");
   var totalFormat = currentFormat.format(change);

   document.getElementById("txtchange").innerHTML = "kết quả là: " + totalFormat + "<span>VND</span>";
}


//EX 4
/**
 * Khối 1:
 * -chiều dài
 * -chiều rộng
 * Khối 2:
 * -khai báo biến c.dai, c.rộng,diện tích, chu vi
 * -lập công thức tính diện tích, chu vi 
 * S = c.dài*c.rộng
 * C = (c.dài+c.rộng)*2
 * Khối 3:
 * Hiện thị kết quả diện tích và chu vi lên UI
 */

document.getElementById("btncalc").onclick = function(){
   var recLong = Number(document.getElementById("recLong").value);
   var recWidth= Number(document.getElementById("recWidth").value);

   var txtarea = recLong * recWidth;
   console.log(txtarea);

   var txtper = (recWidth+recLong)*2;
   console.log(txtper);

   document.getElementById("txtarea").innerHTML ="diện tích : " + txtarea;
   document.getElementById("txtper").innerHTML ="chu vi : " + txtper;
}

//EX 5
/**
 * Khối 1:
 * -số có 2 chữ số
 * Khối 2:
 * -tạo biến n, unit,ten,sum
 * -lấy hàng unit (n%10);
 * -lấy hàng ten (n/10);
 * -tổng = unit +ten
 * Khối 3:
 * -Hiển thị tổng 2 kí số lên UI 
 */

document.getElementById("btnsum").onclick = function(){
   var n1 = Number(document.getElementById("n1").value);
   var unit = n1 % 10 ;
   var ten = n1 / 10 ;
   
   unit = Math.floor(unit);
   ten = Math.floor(ten);

   var txtsum = unit + ten ;
   console.log(txtsum);


   document.getElementById("txtsum").innerHTML = "Tổng 2 kí sô là: "+ txtsum;

}