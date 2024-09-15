var contenedores = document.querySelectorAll('.card-content-pr');
var Cris = {
    Inicio: function(){
        contenedores.forEach(
            div => div.style.display = 'none',
        )
        document.querySelector('#card-1').style.display = 'block';
    },
    siguiente: function(num){
        contenedores.forEach(
            div => div.style.display = 'none',
        )
        document.querySelector('#card-'+num).style.display = 'block';
    }
}

// $(document).ready(function(){
//     Cris.Inicio();
// }
// )
document.addEventListener("DOMContentLoaded",function(){
    Cris.Inicio();
})