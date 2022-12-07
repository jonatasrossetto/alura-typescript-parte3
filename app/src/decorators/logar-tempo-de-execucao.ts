export function logarTempoDeExecucao(emSegundos:boolean=false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...Arguments: Array<any>){
            // console.log('begin elapsed time measurement');
            const tempo1 = performance.now();
            const retorno = metodoOriginal.apply(this, Arguments);
            const tempo2 = performance.now();
            const elapsed = emSegundos ? (tempo2 - tempo1)/1000 : (tempo2-tempo1);
            const unidade = emSegundos ? 's' : 'ms';
            console.log(`${propertyKey} elapsed time: ${elapsed} ${unidade}`);
            // console.log('end elapsed time measurement');
            retorno
        }
        return descriptor;
    }
}