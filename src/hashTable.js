class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i=0; i< Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME+ value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let hashKey = this._hash(key);
        let newHashSet = [key, value];
        if(!this.keyMap[hashKey]){
            this.keyMap[hashKey] = [];
        }
        else{
            this.keyMap[hashKey].push(newHashSet);
        }
    }

    get(key){
        let hashKey = _hash(key);
        let hashValues = this.keyMap[hashKey];
        if(hashValues){
            if(hashValues.length > 1){
                for(let i = 0; i< hashValues.length; i++){
                    if(hashValues[i][0] === key){
                        return hashValues[key][i][1];
                    }
                    else return undefined;
                }
            }
        }
        else return undefined;
    }

    keys(){
        let allKeys = [];
        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i][0]){
                for(let j = 0; j<this.keyMap[i].length; j++){
                    allKeys.push(this.keyMap[i][j][0]); 
                }
            } 
        }
        return allKeys;
    }

    values(){
        let allValues = [];
        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i][1]){
                for(let j = 0; j<this.keyMap[i].length; j++){
                    allValues.push(this.keyMap[i][j][1]); 
                }
            } 
        }
        return allValues;
    }
}