$(document).ready(function() {
    $('#postForm').on('submit',function(){

    // Add text 'loading...' right after clicking on the submit button.
    $('.output_message').text('Ładowanie...');

    var form = $(this);
         $.ajax({
         url: "/js/sendmail.php",
         method: form.attr('method'),
         data: form.serialize(),
         success: function(result){
             if (result == 'success'){
                 $('.output_message').text('Wiadomość wysłana!');
                } else {
                    $('.output_message').text('Błąd wysyłania!');
                    console.log(result);
        console.log(form.serialize());
     }
 }
});

// Prevents default submission of the form after clicking on the submit button.
return false;
});
});