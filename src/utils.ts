const MAX_LEN = 5;

export function generate() {
    let ans = "";
    let subset = "123456789qwertyuiopasdfghjklzxcvbnm";

    for (let i = 0; i < MAX_LEN; i++) {
        ans += subset.charAt(Math.floor(Math.random() * subset.length));
    }

    return ans;
}