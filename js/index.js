const products = [
    {
        id: 1,
        name: "Blancpain",
        description: "Founded in: 1735 | Price Range: $9,000-$30,000 | Made in: Switzerland",
        image: "./image/Blancpain1.png",
    },
    {
        id: 2,
        name: "Cartier",
        description: "Founded in: 1847 | Price Range: $2,560-$258,000 | Made in: France",
        image: "./image/Cartier1.png",
    },
    {
        id: 3,
        name: "Hublot",
        description: "Founded in: 1980 | Price Range: $5,800-$222,000 | Made in: Switzerland",
        image: "./image/Hubolt1.png",
    },
    {
        id: 4,
        name: "Montblanc",
        description: "Founded in: 1858 | Price Range: $1,200-$29,500 | Made in: Switzerland",
        image: "./image/Montblanc1.png",
    },
    {
        id: 5,
        name: "Omega",
        description: "Founded in: 1848 | Price Range: $2,550-$725,000 | Made in: Switzerland",
        image: "./image/Omega1.png",
    },
    {
        id: 6,
        name: "Piaget",
        description: "Founded in: 1874 | Price Range: $5,050-$88,000 | Made in: Switzerland",
        image: "./image/Piaget1.png",
    },
    {
        id: 7,
        name: "Rolex",
        description: "Founded in: 1905 | Price Range: $5,800-$75,000 | Made in: Switzerland",
        image: "./image/Rolex1.png",
    },
    {
        id: 8,
        name: "Tag Heuer",
        description: "Founded in: 1860 | Price Range: $1,400-$53,800 | Made in: Switzerland",
        image: "./image/TagHeuer1.png",
    },
    {
        id: 9,
        name: "Tudor",
        description: "Founded in: 1926 | Price Range: $1,750-$7,425 | Made in: Switzerland",
        image: "./image/Tudor1.png",
    },
];

//===================================Header JavaScript Content===========================================
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideDrawer = document.querySelector('.side-drawer');
    const closeIcon = document.querySelector('.close-icon');
    let isSideDrawerOpen = false;

    hamburgerMenu.addEventListener('click', () => {
        console.log('Hamburger menu clicked');
        isSideDrawerOpen = !isSideDrawerOpen;
        sideDrawer.classList.toggle('show');
    });

    closeIcon.addEventListener('click', () => {
        isSideDrawerOpen = false;
        sideDrawer.classList.remove('show');
    });

    // Close the side drawer when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sideDrawer.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            isSideDrawerOpen = false;
            sideDrawer.classList.remove('show');
        }
    });

    // Close the side drawer if the screen size becomes larger than the small breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isSideDrawerOpen) {
            isSideDrawerOpen = false;
            sideDrawer.classList.remove('show');
        }
    });

    // Close the side drawer if the screen size becomes larger than the small breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isSideDrawerOpen) {
            isSideDrawerOpen = false;
            sideDrawer.classList.remove('show');
        }
    });

    // Prevent default behavior when clicking on footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            // Add your logic here to handle the click event, such as navigating to the link href
        });
    });

    // Prevent default behavior when clicking on social media icons
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.preventDefault();
            // Add your logic here to handle the click event, such as navigating to the social media profile
        });
    });
});
//=======================================================================================================

//=========================================Slider Content================================================
const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        const selectedItem = document.querySelector('.selectedItem');
        selectedItem.classList.remove('selectedItem');
        menuItem.classList.add('selectedItem');
    });
});
//=======================================================================================================

//============================================Hover effect===============================================
document.addEventListener('DOMContentLoaded', () => {
    const sliderImgs = document.querySelectorAll('.sliderImg');

    sliderImgs.forEach((sliderImg) => {
        const slideBg = sliderImg.nextElementSibling;
        const tooltip = slideBg.nextElementSibling;

        sliderImg.addEventListener('mouseover', () => {
            tooltip.style.display = 'block';
        });

        sliderImg.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
});
//=======================================================================================================

//=======================================Searching Functionaliy==========================================
//=======================================Searching Functionaliy==========================================
const searchBox = document.querySelector("#search-box");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-icon");
let searchResultsDiv; // Define searchResultsDiv outside the functions to keep track of it

searchProducts = () => {
    clearSearchResults(); // Clear previous search results if any
    searchBox.classList.add("active-search");
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue);
    });
    searchInput.value = "";

    searchResultsDiv = document.createElement("div"); // Move this line outside the if condition
    searchResultsDiv.classList.add("search-results");
    searchBox.appendChild(searchResultsDiv);

    if (filteredProducts.length === 0) {
        searchResultsDiv.innerHTML = "<p>No products found</p>";
        return;
    }

    filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("search-result");
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.description}</p>
        `;
        searchResultsDiv.appendChild(productDiv);
    });
};

clearSearchResults = () => {
    searchBox.classList.remove("active-search");
    if (searchResultsDiv) { // Check if searchResultsDiv exists before removing it
        searchResultsDiv.remove();
        searchResultsDiv = null; // Reset searchResultsDiv to null after removing
    }
};

searchButton.addEventListener("click", () => {
    searchProducts();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const searchValue = searchInput.value.trim(); // Trim leading and trailing whitespace
        
        if (searchValue !== "") { // Check if search input value is not empty
            searchProducts();
        } else {
            clearSearchResults(); // Clear search results if search input is empty
            alert("Please enter at least one character to perform a search."); // Display alert message
        }
    }
});



document.addEventListener("click", (e) => {
    const inInsideSearchBox = searchBox.contains(e.target);
    if (!inInsideSearchBox) {
        clearSearchResults();
    }
});
//=======================================================================================================

//=======================================================================================================
