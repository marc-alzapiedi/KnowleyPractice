/**
 * @param {string} url
 *
 * @returns {string}
 */
function getProductId(url) {
    // write code here


    // String.prototype.lastIndexOf()
    // Returns the index within this string of the last occurrence of searchValue, or -1 if not found.

    // console.log(url[url.lastIndexOf('p')])
    let result = ''

    for(let i = url.lastIndexOf('p'); i <= url.lastIndexOf('-'); i++){
        result += url[i]
    }



    return result.replaceAll('-', '').replace('p', '')
}

console.log(getProductId('exampleshop.com/fancy-coffee-cup-p-90764-12052019.html'))