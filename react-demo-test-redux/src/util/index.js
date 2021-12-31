export const _bind = (...arr) =>{
    const _this = arr[0]
    const newArr = arr.slice(1)
    newArr.map(item=>{
        _this[item].bind(_this)
    })
}