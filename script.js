function fetchData() {
  fetch('https://dummyjson.com/products')
    .then((res) => {
        if (!res.ok) {
            throw Error('ERROR')
        }
      return res.json();
    })
    .then((data) => {
      console.log(data.products);
      const html = data.products.map(user => {
        return `<div class="container">
            <div class="user ">
                <p>Title: ${user.title}</p>
            </div>
            <div class="user window">
                <p>Title: ${user.title}</p>
                <p>Description: ${user.description}</p>
            </div>
        </div>`
      }).join(' ')
      document.getElementById('app').insertAdjacentHTML("afterbegin", html)
    })
    .catch((error) => console.log(error));
}
fetchData();

