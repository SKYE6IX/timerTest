export default function getTimer(timer: number) {
    function padNum(time: number) {
        return time.toString().padStart(2, "0");
    }
    const hour = padNum(Math.floor(timer / (60 * 60)));
    let minDivision = timer % (60 * 60);
    const min = padNum(Math.floor(minDivision / 60));
    const sec = padNum(minDivision % 60);

    return {
        hour, min, sec
    }
}