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

    document.getElementById('right-container').innerHTML = html;
}

display();