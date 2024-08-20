module.exports = function reverse (n) {
if (n < 0) n = -n;    
let str_n = String(n);
let str_n_rev = '';    
for (let i = 0; i < str_n.length; i++)  str_n_rev = str_n_rev + str_n[str_n.length - i-1];
return Number(str_n_rev); 
}
