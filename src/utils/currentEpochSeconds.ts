export default function currentEpochSeconds(): number {
    return Math.floor(new Date().getTime() / 1000)
}