$(document).ready(function () {
    $('#free').click(function () {
        console.log('clicked!!!');
    });
    $('#submitButton').click(function () {
        const inputValue = $('#userInput').val().trim();

        if (inputValue !== '') {
            $('#itemList').append('<li>' + inputValue + '</li>');

            $('#userInput').val('');
        }
    });

    $('#scroll-left').on('click', function() {
        $('#skills-categories').animate({ scrollLeft: '-=300px' }, 'smooth');
    });

    $('#scroll-right').on('click', function() {
        $('#skills-categories').animate({ scrollLeft: '+=300px' }, 'smooth');
    });

    $('.start-rating i').on('click', function() {
        var rating = $(this).data('value');

        $('.start-rating i').removeClass('active').removeClass('fas').addClass('far');

        for (var i = 0; i < rating; i++) {
            $('.start-rating i').eq(i).addClass('active').removeClass('far').addClass('fas');
        }

        $('.myrating').text(rating);
    });
});