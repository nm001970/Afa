window.onload = function() {
    // پس از بارگذاری کامل صفحه
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // پنهان کردن پنجره لود
    loader.style.display = 'none';
    // نمایش محتوای اصلی
    mainContent.style.display = 'block';
};
$(document).ready(function () {
    var typed = new Typed('#typed', {
        strings: [
            "بهترین پوشاک مد روز را با تخفیف های ویژه پیدا کنید",
            "خرید آنلاین لباس‌های شیک و باکیفیت با ارسال رایگان",
            "فصل جدید، استایل جدید! با ما به روز باشید",
            "تجربه خرید راحت و سریع پوشاک با بهترین قیمت‌ها",
            "پوشاک زنانه و مردانه با طراحی‌های منحصر به فرد",
            "در دنیای مد! لباس‌های جذاب در انتظار شماست",
            "با جدیدترین ترندها در دنیای مد آشنا شوید",
        ],
        loop: true,
        typeSpeed: 15,
        backSpeed: 15,
        backDelay: 1900,
    });

    const images = [
        '../images/slid/1.jpg',
        '../images/slid/2.jpg',
        '../images/slid/3.jpg',
        '../images/slid/4.jpg',
        '../images/slid/5.jpg',
        '../images/slid/6.jpg',
        '../images/slid/7.jpg',
        '../images/slid/8.jpg',
        '../images/slid/9.jpg',
        '../images/slid/10.jpg',
        '../images/slid/11.jpg',
        '../images/slid/12.jpg',
        '../images/slid/13.png',
        '../images/slid/14.png',
        '../images/slid/15.png'
    ];
    
    let currentIndex = 0;

    images.forEach(image => {
        $('<img>').attr('src', image);
    });

    function changeBackground() {
        $('.slideri').fadeOut(300, function() {
            $(this).css('background-image', 'url(' + images[currentIndex] + ')').fadeIn(300);
        });
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 2800);
    $('.slideri').css('background-image', 'url(' + images[currentIndex] + ')');

});
const imagesData = [
    {name: "1.png"},
    {name: "2.jpg"},
    {name: "3.jpg"},
    {name: "5.jpg"},
    {name: "6.jpg"},
    {name: "7.jpg"},
    {name: "8.jpg"},
    {name: "9.webp"},
    {name: "10.jpg"},
    {name: "11.jpg"},
    {name: "12.png"},
    {name: "13.jpg"},
    {name: "14.jpg"},
    {name: "15.webp"},
    {name: "16.jpg"},
];

const lightSliderAccessory = document.getElementById("lightSlider");
const directoryPath = "images/product/brands/";

imagesData.forEach(imageData => {
const listItem = document.createElement("li");
listItem.innerHTML = `
<div class="projects-box-item">
    <a href="">
        <img src="${directoryPath}${imageData.name}" alt="">
        <h3>${imageData.titel}</h3>
        <p>${imageData.description}</p>
    </a>
</div>
`;
lightSlider.appendChild(listItem);
});

$(document).ready(function () {
$("#lightSlider").lightSlider({
    rtl: true,
    item: 3, // تعداد آیتم‌ها در حالت عادی
    autoWidth: true,
    loop: true,
    auto: true,
    pause: 1600,
    enableTouch: true,
});
const imagesDataAsid = [
    {name: "1.jpg"},
    {name: "2.webp"},
    {name: "3.jpg"},
    {name: "5.jpg"},
    {name: "6.jpg"},
    {name: "7.jpg"},
    {name: "8.jpg"},
    {name: "9.jpg"},
    {name: "10.jpg"},
    {name: "11.avif"},
    {name: "12.avif"},
    {name: "13.jpg"},
    {name: "14.jpg"},
    {name: "15.jpg"},
    {name: "16.jpg"},
    {name: "17.jpeg"},
];
const lightSliderAside = document.getElementById("lightSlider-asid");
const directoryPathA = "images/product/accessories/";
imagesDataAsid.forEach(imageData => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="projects-box-item">
            <a href="">
                <img src="${directoryPathA}${imageData.name}" alt="">
            </a>
        </div>
    `;
    lightSliderAside.appendChild(listItem);
});
$("#lightSlider-asid").lightSlider({
    rtl: true,
    item: 2,
    autoWidth: true,
    loop: true,
    auto: true,
    pause: 1600,
    enableTouch: true,
});
});