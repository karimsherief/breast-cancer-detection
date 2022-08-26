const uploadBtn = document.querySelector("#upload-btn");

uploadBtn.onclick = () => {
    document.getElementById('getFile').click()
};

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#output')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
const reset = () => {
    document.getElementById('prediction').src = "/images/download.png";
    document.getElementById('output').src = "/images/download.png"
}

// Patient GUI


$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();
    $(target).fadeIn(600);

});

$("input[name=result]").keydown(function (e) {
    e.preventDefault();
});
// Prediction  

// Patient prediction
PGUI = () => {
    document.querySelector("input[name=result]").value = 'Result'

    document.querySelector('.result').click();
}

// Doctor prediction
GUI = () => {
    const td2 = document.createElement('td');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');

    td1.innerHTML = `<i class=" fa-solid fa-check"></i>`;
    td2.innerHTML = 'Result';
    tr.append(td1);
    tr.append(td2);

    document.querySelector('table tbody').append(tr);

}


