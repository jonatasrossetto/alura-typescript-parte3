export function escapar(
    target:any,
    propertyKey:string,
    descriptor:PropertyDescriptor
){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...Arguments:Array<any>){
        let retorno = metodoOriginal.apply(this,Arguments);
        if (typeof(retorno)==='string'){
            // console.log(`@escape running class:${this.constructor.name} method:${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno
    }
    return descriptor
}
