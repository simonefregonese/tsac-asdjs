function Queue(){
	this.queue = [];
}

Queue.prototype.enqueue = function(e){this.queue.unshift(e);}
Queue.prototype.dequeue = function(){return this.queue.pop();}
Queue.prototype.front = function(){return this.queue[this.queue.length-1];}
Queue.prototype.size = function(){return this.queue.length;}
Queue.prototype.isEmpty = function(){this.size() == 0;}


function QueueItem(i,p){
	this.item = i;
	this.priority = p;
}

//QueueItem.prototype.enqueue = function(i,p){this.queue.unshift(i,p);}

function PriorityQueue(el, p){
    var arr = [];
    var qi = new QueueItem();
    if(arr.length == 0)
		arr.unshift(el,p);
	else{
		for(i=0;i<arr.length;i++){
			if(p > arr[i,p])
			arr.splice(arr[i,p],0,p);
		}
	}
	return arr;
}

/************************************************************************************/

function PriorityQueueCallback(){
	this.item = 0;
	this.priority = 0;
}

function callback(p1,p2){
	if(p1==p2)
		return 0;
	else if(p1<p2)
		return -1;
	else if(p1>p2)
		return 1;
}





