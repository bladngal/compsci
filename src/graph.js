class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(key){
        if(!this.adjacencyList[key]) this.adjacencyList[key]  = [];
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2){
        var index = this.adjacencyList[v1].indexOf(v2);
        if (index > -1) {
            this.adjacencyList[v1].splice(index, 1);
        }

        index = this.adjacencyList[v2].indexOf(v1);
        if (index > -1) {
            this.adjacencyList[v2].splice(index, 1);
        }
    }

    removeVertex(vertex){

        for(let i=0; i<this.adjacencyList[vertex].length; i++){
            this.removeEdge(this.adjacencyList[vertex][i], vertex);
        }

        delete this.adjacencyList[vertex];
    }
}

var g = new Graph();
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")
g.addVertex("London")
g.addEdge("Tokyo", "Aspen")
g.addEdge("Tokyo", "Dallas")
g.addEdge("London", "Tokyo")
g.addEdge("London", "Dallas")
console.log(g);
g.removeEdge("London", "Tokyo")
console.log(g);
g.removeVertex("London");
console.log(g);