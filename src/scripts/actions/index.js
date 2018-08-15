
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/react/";

export const get_wines = url =>(
    axios.get(url)
    .then(res=>(
        {
            type:"get_wines",
            data:res.data
        }
    ))
)


export const get_bjg = url =>(
    axios.get(url)
    .then(res=>(
        {
            type:"get_bjg",
            data:res.data
        }
    ))
)


export const get_hjg = url =>(
    axios.get(url)
    .then(res=>(
        {
            type:"get_hjg",
            data:res.data
        }
    ))
)

export const get_yjzq = url =>(
    axios.get(url)
    .then(res=>(
        {
            type:"get_yjzq",
            data:res.data
        }
    ))
)

export const get_bj= url =>(
    axios.get(url)
    .then(res=>(
        {
            type:"get_bj",
            data:res.data
        }
    ))
)

export const get_cd= url =>(
    axios.get(url)
    .then(res=>(
        {
            type:"get_cd",
            data:res.data
        }
    ))
)

export const get_xx= url =>(
    axios.get(url)
    .then(res=>(
        {
            type:"get_xx",
            data:res.data
        }
    ))
)


export const get_ds= url =>(
    axios.get(url)
    .then(res=>(
        {
            type:"get_ds",
            data:res.data
        }
    ))
)

export const homeBjList= (url) =>(
    axios.get(url)
    .then(res=>(
        {
            type:"homeBjList",
            data:res.data
        }
    ))
)


export const get_wly= url =>(
    axios.get(url)
    .then(res=>(
        {
            type:"get_wly",
            data:res.data
        }
    ))
)

export const get_det= url =>(
    axios.get(url)
    .then(res=>(
        {
            type:"get_det",
            data:res.data
        }
    ))
)



