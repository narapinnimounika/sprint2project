// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);


function addItemCard(item) {
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="' + item.img + '" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.name + '</h5>\n' +
        '        <p class="card-text">' + item.description + '</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
    //i++; // i = i+1;
    //i+=2; // i = i + 2;
    //str += s; // str = str + s;
    //innerHTML = innerHTML + itemHTML;
}

function loadStorageSampleData() {
    if (!localStorage.getItem("items")) {
        const sampleItems = [{
            'name': ' Chotta Bheem ',
            'img': "https://rukminim2.flixcart.com/image/416/416/stuffed-toy/r/z/e/chhota-bheem-13-chhota-bheem-original-imadjhqgqfycbeby.jpeg?q=70",
            'description': 'Chhota Bheem Brown Raju Plush Soft Toy22cm'
        },
        {
            'name': 'Lots-O-Huggin Bear',
            'img': '"./images/char3.jpg"',
            'description': 'Lots-O-Huggin Bear with a Cutiness and in a Brown 22cm toy.'
        }];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController() {
    console.log('start');
    for (var i = 0, size = itemsController.items.length; i < size; i++) {
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();
