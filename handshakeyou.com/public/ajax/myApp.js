(function($){
$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};
})(jQuery);

var app = {

    // add or self register new user    
    selfRegister:function(data){
        data = data || '';
        return $.ajax({
            url:'/users/api/register/user',
            method:'POST',
            data:data,
            dataType:'json',
            cache:false
        });
    },
    
    // all users
    getAllUsers:function(data){
        data = data || ''
        return $.ajax({
            url:'/users/api/users',
            method:'GET',
            dataType:'json'
        });
    },

}