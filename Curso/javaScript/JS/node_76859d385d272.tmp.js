/*let a = [6,7,8,9,10]
a.sort()
console.log(`passo ${a} tem ${a.length}`)
 */


/*function parimpar(n) {
    if(n%2 == 0){
        return 'par!'
    }else {
        return 'impar!'
    }
}
console.log(parimpar(05))*/

/*function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(7))*/

/*let v =function(x){
    return x*4
}

console.log(v(100))*/

function fatorial(n){
    let fat =1
    for(let c = n; c >1; c++){
        fat *= c
        
    }
    return fat
}
console.log(fatorial(5))