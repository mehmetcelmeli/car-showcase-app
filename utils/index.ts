

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5dafe39772msh5a922c7afe3249ep1e70d3jsnff9492f57834",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }
  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers:headers,    
  });

  const result  = await response.json();
  return result;
}
