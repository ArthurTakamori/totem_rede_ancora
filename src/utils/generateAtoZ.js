export default function generateAtoZ() {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }
    return letters;
}
