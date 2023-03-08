export default class CalenderMock {
    static _instance;
    static generateKey(date) {
        if(date instanceof Date) {
            return date.toLocaleDateString('en-CA')
        }
        return new Date().toLocaleDateString('en-CA')
    }
    constructor() {
        const todayDummy = [{
            id: 1,
            text: "Todo리스트 날짜, 요일 적용 💪",
            checked: false,
          },
          {
            id: 2,
            text: "컴포넌트 정리, 변수 정리 📓",
            checked: true,
          },
          {
            id: 3,
            text: "캘린더 날짜 별, localstorge 적용 🔨",
            checked: true,
          },
        ]
        const key = CalenderMock.generateKey(new Date)
        this.data = {
            [key]: [...todayDummy]
        }
    }
    static create(){
        if(!this._instance) {
            this._instance = new CalenderMock();
        }
        return this._instance
    }
    static getInstance() {
        return this.create();
    }
    put(key, value) {
        if(Array.isArray(this.data[key]) && this.data[key].length > 0) {
            this.data[key] = [...value]
            return this
        } else {
            return this.push(key, value)
        }
    }
    get(key) {
       return this.data[key] || []
    }
    push(key, value) {
        if(Array.isArray(this.data[key])) {
            this.data[key] = [...this.data[key], value]
        } else {
            this.data[key] = [value]
        }
        return this;
    }
}
