export function formatPrice(price: number) {
    // Convertir el precio a un string con el número exacto de decimales
    const priceFormated = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0, // No fuerza decimales
        maximumFractionDigits: 20, // Asegura que todos los decimales se muestren si los hay
    });

    const finalPrice = priceFormated.format(price);

    return finalPrice;
}
