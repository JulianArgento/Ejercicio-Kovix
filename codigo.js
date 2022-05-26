/*
Consigna
Escribí una función que reciba dos parámetros: un string S y un integer R.

La función debe devolver un string donde los caracteres consecutivos de S no se repitan más que R veces.

Tiene que devolver un string con el texto limpio y la cantidad de caracteres repetidos correcta.

Ejemplos:
Ej: "AAAAAFFFFOOOA", 2 => "AAFFOOA"
Ej: "111223333344", 1 => "1234"
Ej: "AABB", 1 => "AB"
*/


//TESTEO
const string = "AAAAAFFFFOOOA";
const repeat = 2;

const cleanString = (s,r) =>
{
  let array = [];

  //Valido que el string recibido no sea null
  if(s!=null)
  {
    array = s.split('');
  }
  else
  {
    return "";
  }
  

  let counter = 0;
  let newArray = [];
   
  for(let i=0;i<array.length;i++)
  {
    if(counter<r)
    {
      newArray.push(array[i]);
    }
    
    
    if(array[i]==array[i+1])
    {
      
      counter++;
    }
    else
    {
      counter=0;
    }
    
    
  }
  
  
  return newArray.join('')
}

  
  
  console.log(cleanString(string,repeat));
