let amigos = []
document.getElementById('botao1').onclick = function(){
    let item = document.getElementById('texto').value.trim();
    if(item){
        amigos.push(item)
        document.getElementById('texto').value = " ";
        document.getElementById('linha').innerHTML = " ";
        for(let i = 0; i < amigos.length; i++){
            document.getElementById('linha').innerHTML += `<li>${amigos[i]}</li>`
        }
    }
}
document.getElementById('sortear').onclick = function(){
      let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('linha2').innerHTML = `<li>O sorteado é : ${sorteado}</li>`;
};