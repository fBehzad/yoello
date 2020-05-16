export const getBeersList = async(per_page,page,food)=>{
  let data = undefined;
  if(food){
     data = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}&food=${food}`);
  }else{
     data = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`);
  }
  const beers = await data.json();
  return beers
};
