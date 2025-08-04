export function getYear(data) {
    return new Date(data).getFullYear();
}
export function getRuntime(runtime){
    if(Array.isArray(runtime) && runtime.length != 0){
        return `${runtime[0]} минут`
    }else if(!Array.isArray(runtime)){
        let h = Math.floor(runtime / 60)
        let m = runtime % 60
        
        return `${h} час : ${m} минут`
    }
}