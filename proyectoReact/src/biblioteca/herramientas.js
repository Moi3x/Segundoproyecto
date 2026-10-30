"use strict"
const generarCodigoReferencia = (alojamiento) => {
   const tipoNum=alojamiento.tipo.substring(0,3).toUpperCase();
   const muniNum=alojamiento.municipio.substring(0,3).toUpperCase();
   const numeroAleatorio=Math.floor(Math.random()*(999-100+1)+100);
   return `RUR-${tipoNum}-${muniNum}${numeroAleatorio}`;
}
const calcularCosteEstancia = (alojamiento, noches, fechaLlegada, codigoDescuento = null) => {
    const mesLLEGADA=new Date(fechaLlegada).getMonth();
if (fechaLlegada=== 6 || fechaLlegada === 7 ||fechaLlegada=== 8) {
    let precioNoche = alojamiento.precioNoche;
    let recargoNoche=precioNoche*1.15
    let totalNoches=recargoNoche*4;
    if(codigoDescuento==="VERANO_DAW"){
        const subtotal=totalNoches *0.10
        const descuento= totalNoches - totalNoches;
        const totalPagar=totalNoches-descuento;
    }
const crearJson=()=>({
codigoReferencia:generarCodigoReferencia(alojamiento),
fechaEntrada:fechaLlegada.toLocaleDateString(),
noches:noches,
subtotal:subtotal,
descuento:descuento,
   });
   return crearJson;
}

export { calcularCosteEstancia, generarCodigoReferencia,calcularCosteEstancia};