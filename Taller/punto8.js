// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:

// * No puede haber espacios ni al principio ni al final.
// * Debe poder convertirlos a mayúscula o a minúscula.
// * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
// * Los comentarios deberán salir en color verde y negrilla.


const inputComment = document.getElementById('comment');
const comment = inputComment.value.trim();


function addComment() {
    if (comment != '') {
        const commentBox = document.querySelector('.comment-box ul');
    }
}