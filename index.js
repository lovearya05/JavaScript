var n = 7
var str = (n-1)/2
var spc = 1
for(let i=1;i<=n;i++){
    // console.log(str, " ", i)
    if(i==1 || i===n){
        for(let j=1;j<=n;j++){
            process.stdout.write('* ')
        }
        console.log()
        continue
    }
    
    for(let j=1;j<=str;j++){
        process.stdout.write('* ')
    }
    for(let j=1;j<=spc;j++){
        process.stdout.write('  ')
    }
    for(let j=1;j<=str;j++){
        process.stdout.write('* ')
    }
    
    console.log()
    if(i<(n+1)/2){
        spc+=2;
        str--;
    }else{
        spc-=2;
        str++;
    }

}