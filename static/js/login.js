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
        var choice= confirm("Bạn đã đăng nhập thành công\n")
    if(choice){
        alert("Chào mừng bạn đến với trang website của chúng tôi")
    }   
}