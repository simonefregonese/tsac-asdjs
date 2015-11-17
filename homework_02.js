function ex_1_F(myarray){
    var tmparray=[];
    myarray.every(function(x){
        if(x>0)
        tmparray[tmparray.length]=x;
    return x>0;
    });
    
    return tmparray.reduce(function(acc,x) {return acc+x})

    //b=myarray.filter(function(x){return x>0;});

    //return b;
}

function returnWithstop(a,f,x){
    res=[init,true];
    for(var i=0;i<a.length;i++)
        res=f(init,a[i]);
    if(!res[1]){
        return res[0];
    }
}


function ex_2_F(myarray){

}

function ex_2_F(myarray){
    
}

function ex_3_F(myarray){
    
}

function ex_4_F(myarray){
    
}

function ex_5_F(myarray){
    
}

function ex_6_F(myarray){
    
}

function ex_7_F(myarray){
    
}

function ex_8_F(myarray){
    
}

function ex_9_F(myarray){
    
}

function ex_10_F(myarray){
    
}

function ex_11_F(myarray){
    
}