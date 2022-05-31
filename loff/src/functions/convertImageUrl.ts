export default function convertImageUrl(imageString: string): string {
    return imageString
    .replace("image-", "")
    .replace(new RegExp('-'+"([^"+'-'+"]*)$"), '.'+"$1")
}
