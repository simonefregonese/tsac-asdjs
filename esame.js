function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}




function nElements(myarray){
    if(myarray.length == 0)
		return 0;
    else if(myarray[0] == 5070)	
        return 1 + nElements(myarray.slice(1));
    else if(myarray[0] != 5070)
    	return 0 + nElements(myarray.slice(1));
}


function sqrSum(myarray){
    var t = myarray.filter( x => x >= 0).filter( x => x % 2 == 0).map(x => x * x).reduce((acc, x) => acc + x, 0);
    return Math.sqrt(t);
}






function Stack(){
	this.myarray=[];
}

Stack.prototype.push = function(e){
			this.myarray.push(e); 
}


Stack.prototype.pop = function(){
			this.myarray.pop();
}


Stack.prototype.seek = function(){
	return this.myarray[this.myarray.length-1];
}

Stack.prototype.isEmpty = function(){
	return this.myarray.length==0;
}


function evaluateExpression(expr){
    var stackNum = new Stack();
    var stackOp = new Stack();
    var arr = expr.split('');

    for(var i=0; i<arr.length;i++){
    	if(arr[i]== '+' || arr[i]== '-' || arr[i] == '*' || arr[i] == '/')
    		stackOp.push(arr[i]); 
    	else 
    		stackNum.push(arr[i]);   
    }
	while(!stackNum.isEmpty() && !stackOp.isEmpty()){
		for(i=0;i<arr.length;i++){
			if(arr[i] == ')'){
				if(stackOp.seek == '+'){
					stackOp.pop();
					stackNum.push(stackNum.pop() + stackNum.pop());
				}

				if(stackOp.seek == '-'){
					stackOp.pop();
					stackNum.push(stackNum.pop() - stackNum.pop());
				}

				if(stackOp.seek == '*'){
					stackOp.pop();
					stackNum.push(stackNum.pop() * stackNum.pop());
				}

				if(stackOp.seek == '/'){
					stackOp.pop();
					stackNum.push(stackNum.pop() / stackNum.pop());
				}
			}
			
		}
	}
	return stackNum.seek();
   
}



function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;

}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
         if (currentNode.l == null)
           currentNode.l = newNode;
         else
           this.addNode(currentNode.l, newNode);
    } else {
         if (currentNode.r == null)
           currentNode.r = newNode;
         else
           this.addNode(currentNode.r, newNode);
    }
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

function arrayTree(myarray){
    var tree = new BST();
    for(var i=0; i<myarray.length;i++){
        tree.add(myarray[i]);
    }
    return searchTree(tree.root, 0)
}


	
function searchTree(tree, max){
    if (tree == null){
        return max;
    } else{
        max = tree.item;
        return searchTree(tree.r, max);
    }
}
   