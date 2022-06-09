/**
 * Randomizes a number between two integers
 * @param min 
 * @param max 
 * @returns a random number
 * @example
 * ```ts
 * randomNumber(1, 10);
 * ```
 */
function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export {randomNumber}