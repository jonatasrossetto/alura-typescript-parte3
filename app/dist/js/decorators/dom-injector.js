export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`DomInjector running, ${target.constructor.name}`);
        console.log('propertykey: ', propertyKey);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando ${seletor} no DOM`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map