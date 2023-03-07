export async function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        console.log ( "Result",reader.result);
        return reader.result;  
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
