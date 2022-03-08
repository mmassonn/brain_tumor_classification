$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);
        
        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                var data_ = data.replace('[', '');
                var data__ = data_.replace(']', '');
                var data_new = data__.split(" ")
                
                // Our labels along the x-axis
                var tumor = ['glioma_tumor', 'meningioma_tumor', 'no_tumor', 'pituitary_tumor'];
                
                // For drawing the lines
                var ctx = document.getElementById("BTCChart");
                
                var BTCChart = new Chart(ctx, {
                  type: 'bar',
                  data: {
                    labels: tumor,
                    datasets: [
                      { label: 'Probability',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        data: data_new
                      }
                    ]
                  }
                });
                console.log(data__.split(" "));
            },
        });
    });

});


