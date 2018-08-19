var login = {
    athorize:function(data){
        data = data || {};
        return $.ajax({
            url:'/authorize/login',
            method:'GET',
            data:data,
            dataType:'json'
        });
    }

}
$('#login-frm').validate({
        rules:{
            email:{
                required:true,
                maxlength:50,
                minlength:1
            },
            
            password:{
                required:true,
                maxlength:8,
                minlength:4
            }  
        },
        messages:{
            email:{
                required:"User name is required",
                maxlength:"User name should be within 50 characters",
                minlength:"User name should not be blank"
            },
            password:{
                required:'Password is required',
                maxlength:'Password should be within 8 characters',
                minlength:"Password should not be blank"
            }
        },
        
        errorElement:"div",
        errorPlacement: function(error, element) {
                var placement = $(element).data('error');
                if (placement) {
                    $(placement).append(error)
                } else {
                    error.insertAfter(element);
                }
        }

    });

$('#btn-login').on('click',function(){
    var res = $('#login-frm').valid();
    if(res){
        var formData = $('#login-frm').serializeObject();
        var data = {email:formData['email'],password:formData['password']}
        login.athorize(data).done(function(response){
            if(response.status == true){
                window.location = response.redirectTo;
            }
        });
    }
    
    
})