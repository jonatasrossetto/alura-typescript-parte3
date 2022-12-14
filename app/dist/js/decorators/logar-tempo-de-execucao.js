export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...Arguments) {
            const tempo1 = performance.now();
            const retorno = metodoOriginal.apply(this, Arguments);
            const tempo2 = performance.now();
            const elapsed = emSegundos ? (tempo2 - tempo1) / 1000 : (tempo2 - tempo1);
            const unidade = emSegundos ? 's' : 'ms';
            console.log(`${propertyKey} elapsed time: ${elapsed} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map