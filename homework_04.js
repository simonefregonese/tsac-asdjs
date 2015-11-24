function Stack(){
	this.myarray=[];
}

function rnp(stringa){
    var beginArray=[];
    var finalArray=[];
    var a= beginArray.pop();
    var b=beginArray.pop();
    beginArray.map(function(stringa){return parseInt(stringa)});
    for(i=0;i<beginArray.length;i++){
        if(beginArray[i]==="+")
            finalArray.push(a+b);
        else if(beginArray[i]==="-")
            finalArray.push(a-b);
        else if(beginArray[i]==="*")
            finalArray.push(a*b);
        else if(beginArray[i]==="/")
            finalArray.push(a/b);
        else 
            finalArray[i].push(beginArray[i]);
    }
	
	return finalArray;
}