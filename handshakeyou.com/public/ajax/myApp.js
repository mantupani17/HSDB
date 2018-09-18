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

    getAllTrainers:function(){
        return $.ajax({
            url:'/users/api/trainers',
            method:'GET',
            dataType:'json'
        });
    },

    getAllOwners:function(){
        return $.ajax({
            url:'/users/api/owners',
            method:'GET',
            dataType:'json'
        });
    },

    // Gym related ajax
    // add new gym
    addNewGym:function(data){
        data = data || {};
        return $.ajax({
            url:'/gymapi/gym',
            method:'POST',
            data:data,
            dataType:'json',
            cache:false
        });
    },

    viewAllGymNames: function(){
        return $.ajax({
            url:'/gymapi/gym-names',
            method:'GET',
            dataType:'json'
        });
    },

    viewAllGyms: function(){
        return $.ajax({
            url:'/gymapi/gym',
            method:'GET',
            dataType:'json'
        });
    },

    uploadGymDp:function(data){
        data = data || {};
        return $.ajax({
            url:'/gymapi/upload-dp',
            method:'POST',
            data:data,
            dataType:'json',
            cache:false
        });
    },

    getGymBanner:function(data){
        data = data || {}
        return $.ajax({
            url:'/gymapi/get-dp',
            method:'GET',
            data:data,
            dataType:'json'
        });
    },

    updateGymStatus: function(data){
        data = data || {}
        return $.ajax({
            url:'/gymapi/update-status',
            method:'GET',
            data:data,
            dataType:'json'
        });
    }

}