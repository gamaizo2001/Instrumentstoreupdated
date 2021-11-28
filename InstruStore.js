var cartProduct = [];
var storeProduct = [];


const brands = ['Fender', 'Yamaha', 'Maton'];
const instruments = [
    {
        name: 'Guitar',
        brand: 'Fender',
        price: '$30',
        photo: 'guitar.png'
    },
    {
        name: 'Piano',
        brand: 'Fender',
        price: '$150',
        photo: 'piano.png'
    },
    {
        name: 'Drums',
        brand: 'Yamaha',
        price: '$90',
        photo: 'drums.png'
    },
    {
        name: 'Flute',
        brand: 'Maton',
        price: '$15',
        photo: 'flute.png'
    },
    {
        name: 'Voilin',
        brand: 'Yamaha',
        price: '$120',
        photo: 'violin.png'
    },
    {
        name: 'Trumpet',
        brand: 'Maton',
        price: '$200',
        photo: 'trumpet.png'
    }
];


function init() {
    cartProduct = [];
    storeProduct = [];
    var instCount = 0;
    instruments.forEach(
        (currentInstrument, instrumentNumber) => {
            storeProduct.push(
                `<div class="product-box" id="${instCount}">
                    <img src="${currentInstrument.photo}" alt="${currentInstrument.name}">
                    <p>${currentInstrument.name}</p>
                    <h4 class="brandName" >${currentInstrument.brand}</h4>
                    <h4 class="price">${currentInstrument.price}</h4>
                    <button class="add-cart" onClick="addCartClick(this)">Add to cart</button>
                </div>`
            );
            instCount += 1;
        }

    );
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML = storeProduct.join('');
    document.getElementById('cartCount').innerHTML = cartProduct.length;
}

init();


$(document).mouseover(function (e) {
    if ($(e.target).attr('class') === 'product-box') {
        var pDiv = e.target;
        var brandText = pDiv.getElementsByClassName('brandName')[0].innerHTML;
        if (brandText === 'Fender') {
            pDiv.style.backgroundColor = 'Red';
        } else if (brandText === 'Yamaha') {
            pDiv.style.backgroundColor = 'Green';
        } else if (brandText === 'Maton') {
            pDiv.style.backgroundColor = 'Blue';
        }
        pDiv.style.color = 'White';
    }
});

$(document).mouseout(function (e) {
    if ($(e.target).attr('class') === 'product-box') {
        var pDiv = e.target;
        pDiv.style.backgroundColor = 'White';
        pDiv.style.color = 'Black';
    }
});

function addNewInstrument() {
    var brandsEle = [];
    brands.forEach(
        (currentBrand, brandNumber) => {
            brandsEle.push(`<option value="${currentBrand}"> ${currentBrand}</option>`);
        });
    var form = `<button id="close" onClick="formClose()" style="float: right;">X</button>
        Instrument name:<br>
        <input type="text" id="nameInstru" name="name of instrument" value="">
        <br>
        Brand:<br>
        <select name="brandN" id="brandInstru">
        ${brandsEle}
        </select>
        <br>
        Price:<br>
        <input type="text" id="priceInstru" name="price" value="">
        <br><br>
        <button id="addPro" onClick="createNew()"> Create</button>
    `;
    document.getElementById('proForm').innerHTML = form;
    $('.center').show();
}

function createNew() {
    var name = document.getElementById('nameInstru').value;
    var brnd = document.getElementById('brandInstru').value;
    var price = document.getElementById('priceInstru').value;
    var photo = "";
    storeProduct.push(`<div class="product-box" id="${(instruments.length) + 1}">
                        <img src="noImg.png" alt="${name}">
                        <p>${name}</p>
                        <h4 class="brandName" >${brnd}</h4>
                        <h4 class="price">$${price}</h4>
                        <button class="add-cart" onClick="addCartClick(this)">Add to cart</button>
                    </div>`);
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML = storeProduct.join(''); storeProduct.join('');
    formClose();
}

function formClose() {
    $('.center').hide();
}

function addCartClick(e) {
    var id = e.parentNode.id;
    var el = storeProduct.find(a =>a.includes(`id="${id}"`));

    cartProduct.push(el);
    storeProduct.splice(storeProduct.findIndex(a =>a.includes(`id="${id}"`)), 1);

    document.getElementById("result").innerHTML = storeProduct.join('');
    document.getElementById('cartCount').innerHTML = cartProduct.length;
};

function resetCart() {
    init();
}


$(document).click(function (e) {
    if ($(e.target).attr('class') === 'product-box') {
        var pDiv = e.target;
        var brandEle = pDiv.getElementsByClassName('brandName')[0];
        var priceEle = pDiv.getElementsByClassName('price')[0];

        if (brandEle.style.display === 'none') {
            brandEle.style.display = 'block';
            priceEle.style.display = 'block';
        } else {
            brandEle.style.display = 'none';
            priceEle.style.display = 'none';
        }

    }
});