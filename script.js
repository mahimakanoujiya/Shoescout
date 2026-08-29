const products = [
  {
    brand: "Nike",
    name: "Air Max Running Shoe",
    color: "Black",
    sizes: "7, 8, 9, 10",
    price: 6799,
    stores: [
      { name: "Nike Official", url: "https://www.nike.com/in/" },
      { name: "Amazon", url: "https://www.amazon.in/" },
      { name: "Flipkart", url: "https://www.flipkart.com/" },
      { name: "Myntra", url: "https://www.myntra.com/" }
    ]
  },

  {
    brand: "Adidas",
    name: "Runfalcon Running Shoe",
    color: "White",
    sizes: "6, 7, 8, 9, 10",
    price: 3299,
    stores: [
      { name: "Adidas Official", url: "https://www.adidas.co.in/" },
      { name: "Amazon", url: "https://www.amazon.in/" },
      { name: "Flipkart", url: "https://www.flipkart.com/" },
      { name: "AJIO", url: "https://www.ajio.com/" }
    ]
  },

  {
    brand: "Puma",
    name: "SoftFoam Sneakers",
    color: "Blue",
    sizes: "7, 8, 9, 10",
    price: 2999,
    stores: [
      { name: "Puma Official", url: "https://in.puma.com/" },
      { name: "Amazon", url: "https://www.amazon.in/" },
      { name: "Myntra", url: "https://www.myntra.com/" },
      { name: "AJIO", url: "https://www.ajio.com/" }
    ]
  },

  {
    brand: "Skechers",
    name: "Go Run Comfort Shoe",
    color: "Grey",
    sizes: "6, 7, 8, 9, 10",
    price: 4599,
    stores: [
      { name: "Skechers Official", url: "https://www.skechers.in/" },
      { name: "Amazon", url: "https://www.amazon.in/" },
      { name: "Flipkart", url: "https://www.flipkart.com/" },
      { name: "Myntra", url: "https://www.myntra.com/" }
    ]
  },

  {
    brand: "Nike",
    name: "Court Vision Low",
    color: "White",
    sizes: "7, 8, 9, 10",
    price: 4999,
    stores: [
      { name: "Nike Official", url: "https://www.nike.com/in/" },
      { name: "Amazon", url: "https://www.amazon.in/" },
      { name: "Myntra", url: "https://www.myntra.com/" }
    ]
  },

  {
    brand: "Adidas",
    name: "Grand Court Base",
    color: "Black",
    sizes: "6, 7, 8, 9, 10",
    price: 3799,
    stores: [
      { name: "Adidas Official", url: "https://www.adidas.co.in/" },
      { name: "Amazon", url: "https://www.amazon.in/" },
      { name: "Myntra", url: "https://www.myntra.com/" }
    ]
  }
];


const productGrid = document.getElementById("productGrid");


function displayProducts(items) {

  productGrid.innerHTML = "";

  if (items.length === 0) {

    productGrid.innerHTML = `
      <p style="grid-column:1/-1;text-align:center;padding:50px;">
        No shoes found.
      </p>
    `;

    return;
  }


  items.forEach(product => {

    const storeLinks = product.stores
      .map(store => `
        <a
          href="${store.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${store.name}
        </a>
      `)
      .join("");


    productGrid.innerHTML += `

      <article class="product-card">

        <div class="shoe-image">
          👟
        </div>

        <div class="product-info">

          <p class="brand">
            ${product.brand}
          </p>

          <h3>
            ${product.name}
          </h3>

          <p class="details">
            Color: ${product.color}<br>
            Sizes: ${product.sizes}
          </p>

          <p class="price">
            ₹${product.price.toLocaleString("en-IN")}
          </p>

          <span class="lowest">
            ✓ Compare stores
          </span>

          <div class="store-links">
            ${storeLinks}
          </div>

        </div>

      </article>
    `;
  });
}


function searchShoes() {

  const query =
    document.getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();

  const results = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.brand.toLowerCase().includes(query) ||
    product.color.toLowerCase().includes(query)
  );

  displayProducts(results);
}


function filterProducts(brand) {

  if (brand === "all") {
    displayProducts(products);
    return;
  }

  displayProducts(
    products.filter(product =>
      product.brand === brand
    )
  );
}


function sortProducts() {

  const value =
    document.getElementById("sortSelect").value;

  let sorted = [...products];

  if (value === "low") {
    sorted.sort((a, b) => a.price - b.price);
  }

  if (value === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
}


document
  .getElementById("searchInput")
  .addEventListener("keydown", event => {

    if (event.key === "Enter") {
      searchShoes();
    }

  });


displayProducts(products);
