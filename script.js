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
        return `<p>Name: ${user.title}</p>`
      })
      document.getElementById('app').insertAdjacentHTML("afterbegin", html)
    })
    .catch((error) => console.log(error));
}
fetchData();

