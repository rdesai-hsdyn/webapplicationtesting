document.getElementById('nameForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    const response = await fetch('https://func-web-vnet-test.azurewebsites.net/api/Function1?code=xIHamkrBx3R5thZ9QLm-uVuFMTD6XES25psd-zEzq8sKAzFuV1Ugow%3D%3D&name=' + name, {
        method: 'GET'
    });

    const responseText = await response.text();
    document.getElementById('response').innerText = responseText;
});
