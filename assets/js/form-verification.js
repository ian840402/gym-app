export function formVerification(arr){
    let status = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            status = false;
            break;
        } else {
            status = true;
        }
    }

    return status;
}