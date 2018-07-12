function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle("active");
}

function returndata(){
  var a=document.getElementsByClassName('textdata').value;
  document.getElementsById('feedback').value=a;

}
