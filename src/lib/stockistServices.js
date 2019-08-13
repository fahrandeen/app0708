
//$baseUrl = 'https://5d479f42992ea9001444c91f.mockapi.io/stockists'
//$baseUrl2 = 'http://demo5787785.mockable.io/stockists'

export const getStockists = () => {
    return fetch('https://5d479f42992ea9001444c91f.mockapi.io/stockists')
            .then(res => res.json())
}

export const updateToggledStockist = (stockist) => {
    return fetch(`https://5d479f42992ea9001444c91f.mockapi.io/stockists/${stockist.id}`, {
        method: 'PUT',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(stockist)
    })
    .then(res => res.json())
}