class baconipsum {
    constructor(){
        this.api = "https://baconipsum.com/api"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest"}
    }
    
    async req(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: this.headers,
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    
    async meat_and_filler(paras,start){
        return (await this.req(`${this.api}/?type=meat-and-filler&paras=${paras}&start-with-lorem=${start}`));
    }
    async all_meat(paras,start){
        return (await this.req(`${this.api}/?type=all-meat&paras=${paras}&start-with-lorem=${start}`));
    }
}
module.exports = {baconipsum};
