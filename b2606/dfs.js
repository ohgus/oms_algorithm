function dfs (graph,v,visited){
    visited[v] = true;
    if(v < v+1){
        console.log(v);
        arr.push(v);
        console.log(arr);
        for (let i of graph[v]){
            if (!visited[i]){
                dfs(graph,i,visited);
            }
        }
    }
}

let graph = [ [],
[2, 3, 4], [1],
[1, 5, 6], [1, 7], [3, 8], [3],
[4],
[5] ];
let visited = Array(9).fill(false);
let arr = [];
dfs(graph, 1, visited);