const buttonAddtoStorage = () => {
  const name = document.getElementById("name").value;
  const id = document.getElementById("email").value;
  //   localStorage.setItem(id, name);

  const data = {
    id,
    name,
  };
  localStorage.setItem(id, JSON.stringify(data));
};

const storedLocalItem = localStorage.getItem("name");
console.log(storedLocalItem);

const storedJson = localStorage.getItem("akib@gmail.com");
console.log(JSON.parse(storedJson));

const handleClear = () => {
  localStorage.clear();
};
