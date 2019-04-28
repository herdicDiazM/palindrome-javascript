function palindrome(str=document.getElementById("palabra").value) {

    console.log('valor: '+ str);
    var arrayDerecho=[];
    var arrayInvertido=[];
    var x=0;
    var booln;
    var expresion=/[A-Za-z0-9]/;

    for(i=0; i<str.length; i++){
        if(expresion.test(str.charAt(i))){
            arrayDerecho.push(str.charAt(i));

        }
    }

    for(j=arrayDerecho.length-1; j>=0; j--){
        arrayInvertido[x]=arrayDerecho[j];
        x++;
    }

    for(z=0; z<arrayDerecho.length; z++){
        if(arrayDerecho[z].toLowerCase()!==arrayInvertido[z].toLowerCase()){

            booln="No es palindrome";
            break;
        }
        if(i===str.length){
            booln="Si es palindrome";
        }
    }
    document.getElementById("respuesta").innerHTML=booln;
    // return booln;
    // Good luck!
  }

//   palindrome("eye");
//   palindrome("_eye");
//   palindrome("race car");
//   palindrome("not a palindrome");
//   palindrome("A man, a plan, a canal. Panama");
//   palindrome("never odd or even");
//   palindrome("nope");
//   palindrome("almostomla");
//   palindrome("My age is 0, 0 si ega ym.");
//   palindrome("1 eye for of 1 eye.");
//   palindrome("0_0 (: /-\ :) 0-0");
//   palindrome("five|\_/|four");
