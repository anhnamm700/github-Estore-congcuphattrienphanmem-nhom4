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


 





//SMENU



var smenu_Iphone = [
    {
        name: 'Iphone 5/5s'
    },
    {
        name: 'Iphone 6/6s/6s Plus'
    },
    {
        name: 'Iphone 7/7 Plus'
    },
    {
        name: 'Iphone 8/8 Plus'
    },
    {
        name: 'Iphone X/XS/XS Max'
    },
    {
        name: 'Iphone 11/11 Pro/11 Pro Max'
    },
];

var smenu_Ss = [
    {
        name: 'Samsung Note Series'
    },
    {
        name: 'Samsung S Series'
    },
    {
        name: 'Samsung A Series'
    },
];

var menuDisplayIp = document.getElementsByClassName('nav-second')[0];
var menuDisplaySs = document.getElementsByClassName('nav-second')[1];
var menuDisplayOp = document.getElementsByClassName('nav-second')[2];
var menuDisplayXi = document.getElementsByClassName('nav-second')[3];

function smenuDisplayIp() {
    var html = '';
    for(var i = 0; i < smenu_Iphone.length; i++) {
        html += '<span class="nav__item">' + '<a href="#" class="nav__item__item">' + smenu_Iphone[i].name + '</a>' + '</span>';
    }

    menuDisplayIp.innerHTML = html;

}


smenuDisplayIp();


function smenuDisplaySs() {
    var html = '';
    for(var i = 0; i < smenu_Ss.length; i++) {
        html += '<span class="nav__item">' + '<a href="#" class="nav__item__item">' + smenu_Ss[i].name + '</a>' + '</span>';
    }
    menuDisplaySs.innerHTML = html;
}
smenuDisplaySs();



var smenu_Op = [
    {
        name: 'Oppo N Series'
    },
    {
        name: 'Oppo R Series'
    },
    {
        name: 'Oppo F Series'
    },
    {
        name: 'Oppo A Series'
    },
    {
        name: 'Oppo Find Series'
    },
];


function smenuDisplayOp() {
    var html = '';
    for(var i = 0; i < smenu_Ss.length; i++) {
        html += '<span class="nav__item">' + '<a href="#" class="nav__item__item">' + smenu_Op[i].name + '</a>' + '</span>';
    }
    menuDisplayOp.innerHTML = html;
}
smenuDisplayOp();


var smenu_Xi = [
    {
        name: 'Xiaomi Mi Mix Series'
    },
    {
        name: 'Xiaomi Mi Note Series'
    },
    {
        name: 'Xiaomi Mi Series'
    },
    {
        name: 'Xiaomi Redmi Note Series'
    },
    {
        name: 'Xiaomi Redmi Series'
    },
];

function smenuDisplayXi() {
    var html = '';
    for(var i = 0; i < smenu_Ss.length; i++) {
        html += '<span class="nav__item">' + '<a href="#" class="nav__item__item">' + smenu_Xi[i].name + '</a>' + '</span>';
    }
    menuDisplayXi.innerHTML = html;
}
smenuDisplayXi();