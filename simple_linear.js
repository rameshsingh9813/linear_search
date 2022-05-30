//writing the console function 
const  c=(x)=>{
    return console.log(x)
}

//array generator between the lower and upper bound
const arrGen=(lower, upper)=>{
    let value=[];
    if(lower<upper){
        while(lower<=upper){
            value.push(lower);
            lower+=1;
    }
    return value;
    }
}

//random value generator 
const randGen=(lower, upper)=>{
    let value=0;
    while(lower>0){
        value = Math.round(Math.random()*upper);
        if(value>lower){
            return value;
        }
    }
    return value
}

//function 
const linear=(lower, upper)=>{
    let arr=arrGen(lower,upper);
    let value=randGen(lower,upper);
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
            return[`the searched value :${arr[i]} and attempt=${i+1}`]
        }
    }
}

//time to run the program 
const times=(x)=>{
    while(x>=0){
    c(linear(20000,6700000));
    x-=1;
    }

}
times(10)