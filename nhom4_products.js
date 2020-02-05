var productsList = [
    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
        name: 'IPHONE 11 PROMAX 64GB',
        cost: '33.990.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
        name: 'IPHONE 11 PROMAX 64GB',
        cost: '33.990.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
        name: 'IPHONE 11 PROMAX 64GB',
        cost: '33.990.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
        name: 'IPHONE 11 PROMAX 64GB',
        cost: '33.990.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
        name: 'IPHONE 11 PROMAX 64GB',
        cost: '33.990.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
        name: 'IPHONE 11 PROMAX 64GB',
        cost: '33.990.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
        name: 'IPHONE 11 PROMAX 64GB',
        cost: '33.990.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
        name: 'IPHONE 11 PROMAX 64GB',
        cost: '33.990.000đ'
    }
];

function display() {
    var html = '<div class="products-list">';
    html += '<h3 class="slogen">Sản phẩm bán chạy</h3>';
    html += '<div class="products-menu">';
    for(var i = 0; i < productsList.length; i++) {
        var product = productsList[i];
        html += '<div class="product">';
        html +=     '<img class="product-img" src="' + product.img + '"/>';
        html +=     '<h6 class="product-name">' + product.name + '</h6>';
        html +=     '<p class="product-cost">' + product.cost + '</p>';
        html +=     '<button class="cartBuy">Thêm vào giỏ</button>';
        html += '</div>';
    }
    html += '</div>';
    html += '</div>';

    document.getElementById('productsMenu').innerHTML = html;
}

display();


var productsSale = [
    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-silver-600x600-400x400.jpg',
        name: 'Samsung Galaxy A71',
        cost: '9.490.000đ',
        notbuy: '10.490.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/212212/xiaomi-redmi-8-64gb-red-400x400.jpg',
        name: 'Xiaomi Redmi 8',
        cost: '3.390.000đ',
        notbuy: '3.590.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-silver-600x600-400x400.jpg',
        name: 'Samsung Galaxy A71',
        cost: '9.490.000đ',
        notbuy: '7.490.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-silver-600x600-400x400.jpg',
        name: 'Samsung Galaxy A71',
        cost: '9.490.000đ',
        notbuy: '11.490.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-silver-600x600-400x400.jpg',
        name: 'Samsung Galaxy A71',
        cost: '9.490.000đ',
        notbuy: '10.490.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-silver-600x600-400x400.jpg',
        name: 'Samsung Galaxy A71',
        cost: '9.490.000đ',
        notbuy: '7.490.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-silver-600x600-400x400.jpg',
        name: 'Samsung Galaxy A71',
        cost: '9.490.000đ',
        notbuy: '11.490.000đ'
    },

    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-silver-600x600-400x400.jpg',
        name: 'Samsung Galaxy A71',
        cost: '9.490.000đ',
        notbuy: '10.490.000đ'
    },
];

function proSale() {
    var html1 = '<div class="products-list">';
    html1 += '<h3 class="slogen">Sản phẩm đang được giảm giá</h3>';
    html1 += '<div class="products-menu">';
    for(var i = 0; i < productsSale.length; i++) {
        var productSal = productsSale[i];
        html1 += '<div class="product">';
        html1 +=     '<img class="product-img" src="' + productSal.img + '"/>';
        html1 +=     '<h6 class="product-name">' + productSal.name + '</h6>';
        html1 +=     '<span class="product-cost">' + productSal.cost + '</span>';
        html1 +=     '<span class="notBuy">' + productSal.notbuy + '</span>';
        html1 +=     '<button class="cartBuy">Thêm vào giỏ</button>';
        html1 += '</div>';
    }
    html1 += '</div>';
    html1 += '</div>';
   
    document.getElementById('productsMenu1').innerHTML = html1;

}

 proSale();     


//  var laptopTab = [
//      {
//          img: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400x400.jpg',
//          name: 'Macbook Air 2017 128GB',
//          cost: '19.990.000đ'
//      },

//      {
//         img: 'https://cdn.tgdd.vn/Products/Images/44/210665/acer-aspire-a315-34-c2h9-n4000-4gb-256gb-win10-nx9-1-400x400.jpg',
//         name: 'Macbook Air 2017 128GB',
//         cost: '19.990.000đ'
//     },

//     {
//         img: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400x400.jpg',
//         name: 'Macbook Air 2017 128GB',
//         cost: '19.990.000đ'
//     },

//     {
//         img: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400x400.jpg',
//         name: 'Macbook Air 2017 128GB',
//         cost: '19.990.000đ'
//     },

//     {
//         img: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400x400.jpg',
//         name: 'Macbook Air 2017 128GB',
//         cost: '19.990.000đ'
//     },

//     {
//         img: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400x400.jpg',
//         name: 'Macbook Air 2017 128GB',
//         cost: '19.990.000đ'
//     },
//  ];


//  function laptopTabPro() {
//     var html2 = '<div class="products-list">';
//     html2 += '<h3 class="slogen">laptop & tablet</h3>';
//     html2 += '<div class="products-menu">';
//     for(var i = 0; i < laptopTabPro.length; i++) {
//         var productSal = laptopTabPro[i];
//         html2 += '<div class="product">';
//         html2 +=     '<img class="product-img" src="' + laptopTabPro.img + '"/>';
//         html2 +=     '<h6 class="product-name">' + laptopTabPro.name + '</h6>';
//         html2 +=     '<span class="product-cost">' + laptopTabPro.cost + '</span>';
//         html2 +=     '<span class="notBuy">' + laptopTabPro.notbuy + '</span>';
//         html2 +=     '<button class="cartBuy">Thêm vào giỏ</button>';
//         html2 += '</div>';
//     }
//     html2 += '</div>';
//     html2 += '</div>';
   
//     document.getElementById('productsMenu2').innerHTML = html2;

// }
// laptopTabPro();