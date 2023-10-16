let x = 40;
const primeiro = new Promise(function (resolve, reject) {
  if (x > 20) {
    resolve("Está funcionando");
  } else {
    reject("Deu erro");
  }
});
const body = document.body;
const btn = document.createElement("button");
btn.innerHTML = "Clique";
btn.onclick = () => {
  primeiro.then((rs) => console.log(rs)).catch((erro) => console.log(erro));
};
body.appendChild(btn);

let user = "";
let pass = "";
function logar() {
  return new Promise((resolve, reject) => {
    if (user == "admin" && pass == "123") {
      resolve({
        nome: "Administrador",
        user: "admin",
        email: "admin@administrador.com",
      });
    } else {
      reject({
        erro_numero: "41214",
        erro_msg: "Usuário ou senha inválido",
      });
    }
  });
}

const btn2 = document.createElement("button");
btn2.innerHTML = "Logar no sistema";

btn2.onclick = () => {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=e8ee1b7136ab091a2fb879bf3c840"
  )
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados);
    })
    .catch((error) => console.error("Erro ao carregar"));
};

body.appendChild(btn2);
