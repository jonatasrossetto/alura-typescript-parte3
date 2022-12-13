export function domInjector(seletor:string){
    return function(target:any,propertyKey:string) {
        console.log(`DomInjector running, ${target.constructor.name}`);
        // console.log(target);
        console.log('propertykey: ',propertyKey);
        let elemento : HTMLElement; // elemento inicia undefined
        const getter = function(){
            if (!elemento){
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando ${seletor} no DOM`);
            }
            
            return elemento;
        }
        Object.defineProperty(
            target, 
            propertyKey, 
            {get: getter}
            );
    }
}