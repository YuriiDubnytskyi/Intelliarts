class company{
    constructor(){
        this.objgeneral={};
    }
    purchase(date,price,priceName,name){
        if(Object.keys(this.objgeneral).includes(date)) {
            this.objgeneral[date][name] = [price,priceName] ;
        }else{
            this.objgeneral[date]={[name]:[price,priceName]}
        }
        
    }
    all(output){
        output.value=''
        for(let key in this.objgeneral){
            if(key==undefined){
                continue
            }
            output.value+=key+'\n';
            for(let key2 in this.objgeneral[key]){
                output.value +=key2+" "+this.objgeneral[key][key2]+'\n';
            }
        }
    }
    clearDate(date){
        for(let key in this.objgeneral){
            if(key == date){
                delete this.objgeneral[key]
            }
        }
    }
    remote(date,toConvert,output){
        output.value=''
        let result=0;
        let money=0;
        for(let key in this.objgeneral){
            if(key.substring(0,4) == date){
                for(let key2 in this.objgeneral[key]){
                    if(this.objgeneral[key][key2][1]==toConvert){
                        result+=+this.objgeneral[key][key2][0]
                    }else{
                        money+=+this.objgeneral[key][key2][0]
                    }
                    console.log(this.objgeneral[key][key2])
                }
            }
        } 
        $.ajax({
            type: "GET",
            url: "http://data.fixer.io/api/latest?access_key=3f018ecbb90b1c1019d7a55c7f11cf5b&symbols=UAH",
            success: function(resulting) { 
                
                let chack=0;
                money *= resulting.rates.UAH;
                result+=money
                output.value+= Math.floor(result) +" "+toConvert+" "
                console.log(result)
                chack++
                
            },
            error: function(x, e) { console.log(e); } 
            });
    }
}