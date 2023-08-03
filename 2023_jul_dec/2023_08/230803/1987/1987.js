const input = require("fs").readFileSync("./1987/1987.txt").toString().split("\n");

const [r, c] = input[0].split(" ").map(Number);
const board = [];
for (let i = 1; i <= r; i++) board.push(input[i]);

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
// let visited = new Set();
const visited = new Array(26).fill(false);
let cnt = 0;

function dfs(depth, x, y) {
    cnt = Math.max(cnt, depth);
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
        // if (visited.has(arr[nx][ny])) continue;
        if (visited[board[nx][ny].charCodeAt() - 65]) continue;
        // visited.add(arr[nx][ny]);
        visited[board[nx][ny].charCodeAt() - 65] = true;
        dfs(depth + 1, nx, ny);
        // visited.delete(arr[nx][ny]);
        visited[board[nx][ny].charCodeAt() - 65] = false;
    }
}

// visited.add(board[0][0]);
visited[board[0][0].charCodeAt() - 65] = true;
dfs(1, 0, 0);
console.log(cnt);