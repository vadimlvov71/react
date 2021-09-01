export function getUri(url) {
    console.log(url);
    //const url = window.location.href;
    const arr = url.split("/");
    console.log(arr);
    const lastElement = arr[arr.length - 1];
    console.log(lastElement);
    return lastElement;
}