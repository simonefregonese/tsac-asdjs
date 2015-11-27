function merge(arr) {
    if (arr.length < 2)
        return arr;
    else {
        var middle = Math.floor(arr.length / 2);
        var left = arr.slice(0, middle);
        var right = arr.slice(middle, arr.length); 
        merge(left);
        merge(right);
    }
   
   mergeSort(left);
   mergeSort(right);
   return left;
  
}

function mergeSort(myarray){
    for(i=0;i<myarray.length;i++){
        if(myarray[i]>myarray[i+1]){
            tmp=myarray[i];
            myarray[i]=myarray[i+1];
            myarray[i+1]=tmp;
        }
    }
    return myarray;
}



