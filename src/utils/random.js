// funcion que se encarga de entregarme esa dimension aleatoria de la 1 -126
// limit : es el numero maximo que quieres obtener
export const getRandomDimension = (limit) => {
  return (Math.floor(Math.random() * limit)) + 1; {/*obtenemos de 1 - 126 random */}
}
