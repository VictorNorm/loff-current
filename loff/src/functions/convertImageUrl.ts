/**
 * Converts the standard sanity image string to a usable format by removing "image-"
 * and replacing a hyphen with a dot.
 * @imageString This is the sanity standard string for images
 */

export default function convertImageUrl(imageString: string): string {
    return imageString
    .replace("image-", "")
    .replace(new RegExp('-'+"([^"+'-'+"]*)$"), '.'+"$1")
}
