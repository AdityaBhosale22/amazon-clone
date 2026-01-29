const btn = document.getElementById("show-products")
const listContainer = document.getElementById("product-list")
const BASEURL = "https://dummyjson.com/"

btn.addEventListener("click", handleClick);

function handleClick() {
    getData(BASEURL).then(response => {
        renderData(listContainer, response.products);
    }).catch(error => {
        renderError(listContainer, error);
    })
}

async function getData(url) {
    try {
        console.log("API call initiated")
        const response = await fetch(`${url}products`);
        const data = await response.json();
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        return data;
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
    finally {
        console.log("API call ended")
    }
}

function renderData(container, apiData) {
    container.innerHTML = "";
    apiData.forEach((item) => {
        const list = document.createElement("li");
        list.textContent = item.title;
        container.appendChild(list);
    });
}

function renderError(container, error) {
    container.innerHTML = "An error occurred while fetching data.";
    console.error(error);
}