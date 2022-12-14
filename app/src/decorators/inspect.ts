export function inspect(){
    return function(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
        ) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function(...Arguments:Array<any>){
                console.log(`--- Method ${propertyKey}`);
                console.log(`------ Parameters: ${JSON.stringify(Arguments)}`);
                const retorno = metodoOriginal.apply(this,Arguments);
                console.log(`------ returns: ${JSON.stringify(retorno)}`);
                return retorno
            }
            return descriptor
        }
}