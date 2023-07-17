

function submitForm() {
   

        $('.uName').keyup(function () {
            
            var userName = $('.uName').val();
            var nflag = false;

            if (userName == "") {
                $('#name-error').text("cannot be an empty name");
                nflag = true;
            } else if (!isNaN(userName)) {
                $('#name-error').text("invalid name");
                nflag = true;
            } else if (userName.length < 3) {
                $('#name-error').text("enter minimum 3 characters");
                nflag = true;
            } else if (21 < userName.length) {
                $('#name-error').text("enter maximum 20 characters");
                nflag = true;
            } else {
               $("name-error").text(""); 
            }

            // if (!nflag) {
            //     return false;
            // } 

        });

        $('.Uemail').keyup(function () {
           
            var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var userEmail = $('.Uemail').val();

            if (!(pattern.test(userEmail))) {
                $('#mail-error').text("invalid email");
            }
            else if (userEmail == "") {
                $('#mail-error').text("cannot be an empty email");
                return false;
            } else if (userEmail.length < 3) {
                $('#mail-error').text("enter minimum 3 characters");
                return false;
            } else {
                op = "";
                $('#mail-error').text(op);
            }
        });

        $('.Uphone').keyup(function () {
        

            var userphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var usernum = $('.Uphone').val();
            if (!(userphone.test(usernum))) {
                $('#phone-error').text("invalid no.");
                return false;
            } else if (!isNaN(userphone)) {
                $('#phone-error').text("invalid no.");
                return false;
            } else {
                $('#phone-error').text("");
            }
        });
   
    // Spinner
    var spinner = '<div class="spinner-border spin-cust text-primary" role="status">' +
        '<span class="visually-hidden">Loading...</span>' +
        '</div>' + 'Please Wait'


    $("#submit-btn").html(spinner);


    // Submit
    var name = $('input[name=name]').val();
    var email = $('input[name=email]').val();
    var phone = $('input[name=phone]').val();

    if (name != '' && email != '' && phone != '') {
        var formData = { name: name, email: email, phone: phone };

        $.ajax({
            url: "http://localhost/ajaxform/submit.php", type: 'POST', data: formData, success: function (response) {
                var res = JSON.parse(response);
            }
        }).done((response) => {
            $("#submit-btn").text("Submitted");
            $("#suc-submit").text("Your data has been submitted successfully.");
        });
    }
    else {
        $("#err-submit").text("Please fill all the fields");
    }




} 