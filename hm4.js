
//home work 4//

                  //          stars
const Space=function(m){
    if(m===0){
      return "";}
    else return "     " +Space(m-1);
  };
  const Stars=function(s){
    if(s===0){
      return "";}
    else return "*" + Stars(s-1);
  };
  const main=function(m,s,f){
    if(f===0){
      return "";}
     console.log(Space(m) + Stars(s)) ;
     main(m-1 , s+2, f-1);
  };
  const triangleStars =function(f){
    main(f-1,1,f);
  };
  triangleStars(10);

//////////////////////////////////////////////////////////////////////
                          //power//
    const pow=function(b,p){      // b: base  //p: power
       const repeated=function(b){
          return b;}
    if (p===1){
      return b;}
    else  return repeated(b) * pow(b,p-1);
       };
  const SHOW=pow(2,3);
  console.log(SHOW);

  ////////////////////////////////////////////////////////////////
///                       reverse String

  const String=function(str){
     const innerString=function(str , index){
       if(index === str.length){
         return "";}
      else return  innerString(str,index+1) +str[index];
    };
    return innerString(str, 0);
   };
  const RverseTheString=String("abcdefg");
  console.log(RverseTheString);

/////////////////////////////////////////////////////////////
              //                 square
  const Space=function(m){
    if(m===0){
      return "";}
    else return "  " +Space(m-1);
  };
  const Stars=function(s){
    if(s===0){
      return "";}
    else return "*" + Stars(s-1);
  };
  const main=function(m,s,f){
    if(f===0){
      return "";}
     console.log(Space(m) + Stars(s)) ;
     main(m , s, f-1);
  };
  const checkerboard =function(f){
    main(f,f,f);
  };
  checkerboard(5);
  ///////////////////////////////////////////////////////////////////////////
    //              extra credit
    const M=function(n){
      if (n===0){
         return"";}
     const F2=function(n){
       if (n===0){
        return"";}
       else return "@"+F2(n-1);
      };
       console.log(F2(n));
       return "@" + M(n-1);
    };
    const SHOW=function(n){
     return M(n)+M(n+5);
    };
    SHOW(15);
