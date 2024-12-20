$(document).ready(function () {
    // ایجاد انیمیشن متنی با استفاده از Typed.js
    const typed = new Typed('#typed', {
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



    // آرایه‌ای از تصاویر برای لیست محصولات
    const imagesData = [
        {name: "1.webp"},
        {name: "2.webp"},
        {name: "3.webp"},
        {name: "5.webp"},
        {name: "6.webp"},
        {name: "7.webp"},
        {name: "8.webp"},
        {name: "10.webp"},
        {name: "11.webp"},
        {name: "12.webp"},
        {name: "13.webp"},
        {name: "14.webp"},
        {name: "15.webp"},
    ];

    const lightSliderAccessory = document.getElementById("lightSlider");
    const directoryPath = "images/product/brands/";

    // ایجاد آیتم‌های لیست برای محصولات
    imagesData.forEach(imageData => {
        const listItem = createListItem(directoryPath, imageData.name);
        lightSliderAccessory.appendChild(listItem);
    });

    // تنظیمات اسلایدر
    $("#lightSlider").lightSlider({
        rtl: true,
        item: 4,
        autoWidth: true,
        loop: true,
        auto: true,
        pause: 1600,
        enableTouch: true,
    });

    // آرایه‌ای از تصاویر برای لیست لوازم جانبی
    const imagesDataAside = [
        {name: "1.webp"},
        {name: "2.webp"},
        {name: "3.webp"},
        {name: "5.webp"},
        {name: "6.webp"},
        {name: "7.webp"},
        {name: "8.webp"},
        {name: "10.webp"},
        {name: "11.webp"},
        {name: "12.webp"},
        {name: "13.webp"},
        {name: "14.webp"},
        {name: "15.webp"},
    ];

    const lightSliderAside = document.getElementById("lightSlider-asid");
    const directoryPathA = "images/product/accessories/";

    // ایجاد آیتم‌های لیست برای لوازم جانبی
    imagesDataAside.forEach(imageData => {
        const listItem = createListItem(directoryPathA, imageData.name);
        lightSliderAside.appendChild(listItem);
    });

    // تنظیمات اسلایدر برای لوازم جانبی
    $("#lightSlider-asid").lightSlider({
        rtl: true,
        item: 2,
        autoWidth: true,
        loop: true,
        auto: true,
        pause: 1600,
        enableTouch: true,
    });

    // تابع ایجاد آیتم‌های لیست
    function createListItem(directory, imageName) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="projects-box-item">
                <a href="">
                    <img src="${directory}${imageName}" alt="${imageName}" loading="lazy">
                </a>
            </div>
        `;
        return listItem;
    }
});
