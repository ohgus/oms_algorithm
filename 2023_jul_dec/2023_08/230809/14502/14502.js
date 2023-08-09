const input = require("fs").readFileSync("./14502/14502.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const city = [];
const temp = [];

for (let i = 1; i <= n; i++) {
    city.push(input[i].split(" ").map(Number));
    temp.push(new Array(m).fill(0));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let answer = 0;

function virus(x, y) {
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (temp[nx][ny] === 0) {
            temp[nx][ny] = 2;
            virus(nx, ny);
        }
    }
}

function getScore() {
    let score = 0; 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (temp[i][j] === 0) score++;
        }
    }
    return score;
}

function dfs(count) {
    if (count === 3) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                temp[i][j] = city[i][j];
            }
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (temp[i][j] === 2) virus(i, j);
            }
        }
        answer = Math.max(answer, getScore());
        return;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (city[i][j] === 0) {
                city[i][j] = 1;
                dfs(count + 1);
                city[i][j] = 0;
            }
        }
    }
}

dfs(0);
console.log(answer);