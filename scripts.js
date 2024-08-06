document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('تم إضافة المنتج إلى السلة!');
        });
    });
});