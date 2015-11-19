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


function createArray(n){
	var myarray=[];
	for(var i=0;i<myarray.length;i++){
		myarray.push(i);
	}
	return myarray;
}
function ex_2_F(n){
	createArray(2 * n)
	.filter(x => x % 2 != 0)
	.reduce((acc,x) => acc+x,0);

}

function ex_3_F(myarray){
	var tot=0;
	myarray.forEach(x => {tot += x;});  // =>{} = function(x){}
	return tot / myarray.length;

	/*con reduce:
		return myarray.reduce((acc,x) => {return acc + x;},0) / myarray.length;
			*/
}


function createArrayFrom(a,b){
	var myarray=[];
	for(var i=a;i<b;i++){
		myarray.push(i);
	}
	return myarray;
}

function ex_4_F(a,b){
	if(a<b){
		var t=a;
		a=b;
		b=t;
	}
	return createArrayFrom(a,b).reduce((acc,x) => acc+x,0);
}


function createArrayMul(a,b){
	var myarray=[];
	for(var i=0;i<b;i++){
		myarray.push(a);
	}
	return myarray;
}

function ex_5_F(a,b){
	return createArrayMul(a,b).reduce((acc,x) => acc + x,0);
	
}

function ex_6_F(a,b){
    
}

function ex_7_F(n,esp){
	return createArrayMul(a,b).reduce((acc,x) => acc+x,0);
}

function ex_8_F(myarray){
    
}

function ex_9_F(myarray){
    
}

function ex_10_F(myarray){
    
}

function ex_11_F(myarray){
    
}