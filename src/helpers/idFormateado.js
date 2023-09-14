export default function idFormateado(id){
    const idFormat = id.toString()

    if(idFormat.length === 1){
        return '00' + idFormat
    }else if(idFormat.length === 2 ){
        return '0' + idFormat
    } else{
        return idFormat
    }
}