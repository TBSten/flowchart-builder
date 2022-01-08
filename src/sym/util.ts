
export function createRandomItemId(itemType:string){
    return `${itemType}-id-${Math.floor(Math.random()*100000)}` ;
}
