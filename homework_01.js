/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
// Iterative
// Spazio: O(1) 
// Tempo: O(n)
function sumwhileneg(myarray) {
    var tot = 0;
    for(i = 0; i < myarray.length; ++i) {
        var x = myarray[i];
        if (x > 0) {
            tot += x;
        } else {
            return tot;
        }
    }
    return tot;
}


// Ricorsive
// Spazio: O(n) 
// Tempo: O(n)
function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}

// Per Tiziano.
function ex_1_I(myarray) {
    return sumwhileneg(myarray);
}

function ex_1_R(myarray) {
    return sumwhilenegR(myarray);
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
// Spazio: O(1) 
// Tempo: O(n)
function firstOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 * i;
    }
    return tot;
}


// Spazio: O(n) 
// Tempo: O(n)
function firstOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + firstOddR(n - 1);
    }
}



// Per Tiziano.
function ex_2_I(x) {
    return firstOdd(x);
}

function ex_2_R(x) {
    return firstOddR(x);
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


function ex_3_I(a){
    somma=0;
    for(i=0;i<a.length;i++)
    somma= somma + a[i];
    return somma/i;                  
}

function sommaR(myarray){
	if(myarray.length==0)
	return 0;
	else
	return myarray[0] + sommaR(myarray.slice(1));
}

function ex_3_R(myarray){

	return sommaR(myarray)/myarray.length;
}

function ex_3_F(myarray){
	var tot=0;
	myarray.forEach(x => {tot += x;});  // =>{} = function(x){}
	return tot / myarray.length;

	/*con reduce:
		return myarray.reduce((acc,x) => {return acc + x;},0) / myarray.length;
			*/
}
function ex_4_I(n1,n2){
	function ex_4_Inner(n1,n2){
		somma=0;    
		for(i=n1;i<=n2;i++){
			somma+=i; 	
		}
		return somma;	
	}
	
	if(a>b)
	return ex_4_Inner(a,b);
	else
	return ex_4_Inner(b,a);
}




function ex_4_R(a,b){
	function ex_4_Inner(a,b){
		if(a == b){
			return b;
		}
		else
		return a + ex_4_Inner(a+1,b); 
	}
	
	if(a>b)
	return ex_4_Inner(a,b);
	else
	return ex_4_Inner(b,a);
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



function ex_5_I(n1,n2){
    mult=0;
    if(n1>=0 && n2>=0){
    	for(i=0;i<n2;i++){
    		mult= mult+n1;
    	}  
	}                    
     return mult;                  
}


function ex_5_R(n1,n2){
	if(n1<=0 || n2<=0)
	return 0;
	else
	return n1 + ex_5_R(n1,n2-1);
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

function ex_6_I(a,b){
	/*
	if(div1>0 && div2>0){
		for(i=0;i<=div1;i++){
			quoz=quoz+i;
			div1=div1-div2;
		}
		resto=quoz-div1;
	}
	return console.log(quoz + ' con resto ' + resto);*/
	var resto=0;
	var quoz=0;
	while(a>=b){
		a=a-b;
		quoz++;
	}
	resto=a;
	return [quoz, resto];
}
 

function ex_6_R(a,b){
	if(a<=b)
	return [0,a];
	else 
	var result=ex_6_R(a-b,b); //a/b = ((a-b)/b ) + 1
	return [result[0] + 1, result[1]];
}

/*function ex_6_F(a,b){
	
}*/

function ex_7_I(n,esp){
 
    for(i=0;i<esp;i++)
       potenza= ex_5_I(n,esp);
    return potenza;                
                    
}


function ex_7_R(n,esp){
	if(n<=0)
		return 0;
	else
		return ex_5_R(n,ex_7_R(n,esp-1));
}

function ex_7_F(n,esp){
	return createArrayMul(a,b).reduce((acc,x) => acc+x,0);
}


function ex_8_I(a){
	var m=[];
	var n=Math.sqrt(a.length);
	for(i=0;i<a.length;i++){
		for(j=0;j<a.length;j++){
			m[i]=a.slice(i*n,(i+1)*2);
		}

	}

}


function ex_8_R(a){
	//trasformare in matrice un vettore più piccolo; da n elementi in n colonne da n.
}


function ex_9_I(a){

	for(i=0;i<a.length/2;i++){
		tmp=a[i];
		a[i]=a[a-length-1-i];
		a[a.length-1-i]=tmp;
	}
	return a;
}

function ex_10_I(n,a){
    vett=[];
    for(i=0;i<a;i++)
    vett[vett.length]=n;
    return vett;                                            
} 


function ex_10_R(n,a){
	if(n<=0 || a<=0)
	return 0;
	//else
	//return 

}


function ex_11_I(a){
	b=[];
	j=0;
	lung=a.length-1;
	for(i=0;i<a.length;i++){
		if(a[i]%2==0){
			b[j]=a[i];
			j++
		}
		else{
			b[lung]=a[i];
			lung--;
		}
	}
	return b;
}





































