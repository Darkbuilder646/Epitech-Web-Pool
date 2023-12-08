const brandName = document.getElementById("brand_name");
const brandDescription = document.getElementById("brand_description");
const submitBrand = document.getElementById("submit_brand");
const resultDiv = document.getElementById("result");

submitBrand.addEventListener('click', (e) => {
    e.preventDefault();

    const brandNameValue = brandName.value;
    const brandDescriptionValue = brandDescription.value;
    
    const data = {
        brand_name: brandNameValue,
        brand_description: brandDescriptionValue
    };

    fetch('task04.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if(response.ok) {
            console.log("Debug" + JSON.stringify(data)); // Debug
            return response.json();
        }
        throw new Error('Request failed');
    })
    .then(data => {
        console.log("Debug change result div" + JSON.stringify(data)); //Debug
        resultDiv.innerHTML = "";
        if(data.brand_name_message) {
            resultDiv.innerHTML += `<p>${data.brand_name_message}</p>`;
        }
        if(data.brand_description_message) {
            resultDiv.innerHTML += `<p>${data.brand_description_message}</p>`;
        }
    })
    .catch(error => {
        console.error(error.message);
    })  
});


