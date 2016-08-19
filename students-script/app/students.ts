/**
 * Created by sara on 19/08/16.
 */
export class Students {
    id: number;
    name: string ='';
    email: string ='';
    level: string ='';
    // levels = ['primary','secondary','preparatory'];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
