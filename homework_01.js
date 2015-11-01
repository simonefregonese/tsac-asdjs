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



function ex_3_I(a){
    somma=0;
    for(i=0;i<a.length;i++)
    somma= somma + a[i];
    return somma/i;                  
}


function ex_3_R(a){
    if(a[0]==0)
	return 0;
    else
	return (a[0]+a.slice(1))/a.length;
}

function ex_4_I(n1,n2){
	somma=0;    
	for(i=0;i<n2-n1;i++){
		somma+=n1; 	
		n1++;
	}
	return somma;	
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


function ex_6_I(div1,div2){
	resto=0;
	quoz=0;
	if(div1>0 && div2>0){
		for(i=0;i<=div1;i++){
			quoz=quoz+i;
			div1=div1-div2;
		}
		resto=quoz-div1;
	}
	return console.log(quoz + ' con resto ' + resto);
}
 



function ex_7_I(n,esp){
    potenza=0;
    for(i=0;i<esp;i++)
        potenza= potenza + ex_5(n,n-1);
    return potenza;                
                    
}


function ex_7_R(n,esp){
	if(n<=0)
		return 0;
	else
		return n * ex_7_R(n,esp-1);
}


function ex_8_I(a){
	for(i=0;i<a.length;i++){
		for(j=0;j<a.length;j++){

		}

	}

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




































