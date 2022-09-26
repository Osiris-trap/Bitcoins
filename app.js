function convercion() {
    let criptos=$('#criptos').val();
    let valor1 =Number($('#valor1').val());
    let mensaje = '';
    let resultado = 0;
    switch (criptos) {
        case 'b':
        resultado = (500000/valor1);
        mensaje = 'Puedes comprar ' + resultado+ ' bitcoin por ' + valor1  ;
        
        break;
        
        case 'e':
        resultado = ( valor1/20000);
        mensaje = 'Puedes comprar ' + resultado+ ' Etherium por ' + valor1 ;
        
        break;
        
        case 'd':
        resultado = (valor1/ .60);
        mensaje = 'Puedes comprar ' + resultado+ ' Dogecoin por ' + valor1 ;
       
        break;
        
        case 'x':
        resultado = (valor1/ 6);
        mensaje = 'Puedes comprar ' + resultado+ ' XRP por ' + valor1 ;
        
        break;
        
        alert("No existe la opccion");
        default:
        break;
    }
    swal(mensaje,resultado.toString(),'success')
    
    
}
$('#btnEjecutar').click(function(){
    $('#btnEjecutar').click(function(){
        convercion();
        
    });
});