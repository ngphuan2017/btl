function xuLyDangNhap(){
    var tk = document.getElementById("tai-khoan");
    var mk = document.getElementById("mat-khau");

    if (tk == "" || tk == null){
        alert("Không được bỏ trống tên đăng nhập")
        return;
        }
        if (mk == "" || mk == null){
        alert("Không được bỏ trống mật khẩu")
        return;
        }
        var choice= confirm('Bạn đã đăng nhập vào tài khoản\n'+'Có tên:'+" "+tk+"\n")
    if(choice == 1){
        alert("Bạn đã đăng nhập thành công")
    }   
}