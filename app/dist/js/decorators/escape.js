export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...Arguments) {
        let retorno = metodoOriginal.apply(this, Arguments);
        if (typeof (retorno) === 'string') {
            console.log(`@escape running class:${this.constructor.name} method:${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
