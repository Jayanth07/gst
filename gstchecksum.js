function checksum(g)
{
    let a=65,b=55,c=36;
    return Array['from'](g).reduce((i,j,k,g)=>{ 
    p=(p=(j.charCodeAt(0)<a?parseInt(j):j.charCodeAt(0)-b)*(k%2+1))>c?1+(p-c):p 
    return k<14?i+p:j==String.fromCharCode((c-(i%c))+b);
    },0);     
}


// console.log(checksum('27AASCS2460H1Z0')) //false
// console.log(checksum('27AAPFU0939F1ZV')) //true
