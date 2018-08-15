

const defaultState = {
    wines:[],
    bjg:[],
    hjg:[],
    yjzq:[],
    bj:[],
    cd:[],
    xx:[],
    ds:[],
    detailWine:[],
    wly:[],
    det:[]

}

export default (state = defaultState ,action) => {
    switch(action.type){
        case "get_wines":
        return {...state,...{wines:action.data}};
        break;
      
        case "get_bjg":
        return {...state,...{bjg:action.data[3].Area[0].ProductModuleLists}};
        break;

        case "get_hjg":
        return {...state,...{hjg:action.data[3].Area[1].ProductModuleLists}};
        break;

        case "get_yjzq":
        return {...state,...{yjzq:action.data[3].Area[2].ProductModuleLists}};
        break;
       
        case "get_bj":
        return {...state,...{bj:action.data[0].HotCategories}};
        break;

        case "get_cd":
        return {...state,...{cd:action.data[0].ListAttributes[0].list}};
        break;

        case "get_xx":
        return {...state,...{xx:action.data[0].ListAttributes[1].list}};
        break;

        case "get_ds":
        return {...state,...{ds:action.data[0].ListAttributes[2].list}};
        break;

        case "homeBjList":
        return {...state,...{detailWine:action.data}};
        break;


        case "get_wly":
        
        return {...state,...{wly:action.data[0].SubCategories}};
        break;
       

        case "get_det":
        console.log(action.data);
        return {...state,...{det:action.data}};
        break;




        default:
        return state;
        break;
    }
}   