import { DateTime } from "luxon";


export const isCurrencyExist = (data, currency) => {
    const codeInYear = countryCode(data);
    if(codeInYear.has(currency)) return true;
    else return false;
}

export const daily = (data, currency) => {
    const arr = {};
    Object.entries(data).forEach(function([k,v]){  // daywise
        if(v[1][currency] === undefined) arr[v[0]+ " NA"] = null;
        else arr[v[0]] = v[1][currency]
    })
    return arr;
};

export const yearly = (data, currency) => {
    let arr = {};
    var entries = Object.entries(data).filter(function([k,v]){  
        if(v[1][currency] === undefined) return false;
        else return true;
    })
    arr[entries[0][1][0]] = entries[0][1][1][currency];  // yearwise
    arr[entries[entries.length - 1][1][0]] = entries[entries.length - 1][1][1][currency]; 
    return arr;
};

export const quarter = (data, currency) => {
    var entries = Object.entries(data).filter(function([k,v]){  
        if(v[1][currency] === null) return false;
        else return true;
    })
    const monthWiseData = {};
    entries.forEach(([k, v]) => {  // quarter wise
        let ddmmyy = v[0].split("-");
        let mon = ddmmyy[1];
        if(monthWiseData[mon] === undefined) {
            monthWiseData[mon] = v[1][currency];
        }
    })
    const nonNull_MonthData = Object.fromEntries(Object.entries(monthWiseData).filter(([k, v]) => {
                                if(v === null) return false;
                                return true;
                            }))
    const quarterWiseData = {"Q1": undefined, "Q2": undefined, "Q3": undefined, "Q4": undefined};
    Object.entries(nonNull_MonthData).forEach(([k, v]) => {
        if(quarterWiseData["Q1"] === undefined) {
            if(k === "Jan") quarterWiseData["Q1"] = v;
            else if( k === "Feb") quarterWiseData["Q1"] = v;
            else if(k === "Mar") quarterWiseData["Q1"] = v; 
        }else if(quarterWiseData["Q2"] === undefined) {
            if(k === "Apr") quarterWiseData["Q2"] = v;
            else if( k === "May") quarterWiseData["Q2"] = v;
            else if(k === "Jun") quarterWiseData["Q2"] = v; 
        }else if(quarterWiseData["Q3"] === undefined) {
            if(k === "Jul") quarterWiseData["Q3"] = v;
            else if( k === "Aug") quarterWiseData["Q3"] = v;
            else if(k === "Sep") quarterWiseData["Q3"] = v; 
        }else if(quarterWiseData["Q4"] === undefined) {
            if(k === "Oct") quarterWiseData["Q4"] = v;
            else if( k === "Nov") quarterWiseData["Q4"] = v;
            else if(k === "Dec") quarterWiseData["Q4"] = v; 
        }
    })
    return quarterWiseData;
};

export const month = (data, currency) => {
    const arr = {};
    var entries = Object.entries(data).filter(function([k,v]){  
        if(v[1][currency] === null) return false;
        else return true;
    })
    entries.forEach(([k, v]) => {  // monthwise data
            let ddmmyy = v[0].split("-");
            let mon = ddmmyy[1];
            if(arr[mon] === undefined) {
                arr[mon] = v[1][currency];
            }
        })
    return arr;
};

export const week = (data, currency) => {
    const arr = {};
    var entries = Object.entries(data).filter(function([k,v]){  
        if(v[1][currency] === null) return false;
        else return true;
    })
    Object.entries(entries).forEach(([k, v]) => {
        let ddmmyy = v[1][0].split("-");
        let MONTH = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
        let date = DateTime.local(Number("20" + ddmmyy[2]), MONTH[ddmmyy[1]], Number(ddmmyy[0]));
        let weekNum = date.weekNumber;
        if(arr["Week " + weekNum] === undefined) {
            console.log(weekNum, ddmmyy);
            arr["Week " + weekNum] = v[1][1][currency];
        }
    })
    return arr;
};

export const countryCode = (data) => {
    let arr = new Set([]);
    Object.entries(data).forEach(([k, v]) => {
        Object.keys(v[1]).forEach((k) => {
            arr.add(k);
        })
    })
    return arr;
}

export const MaxMin = (data, currency) => {
    console.log(currency)
    if(isCurrencyExist(data, currency)) {
        const arr = daily(data, currency);
        const keys_Arr = Object.keys(arr);
        const values_Arr = Object.values(arr);
        const objVal = {};
        values_Arr.forEach((i, j) => {
            if(i !== null)
            objVal[j] = i;
        });
        var sortedObj = Object.entries(objVal).sort((a, b)=> {
            if(a[1] > b[1]) return 1;
            else return -1;
        })
        // console.log(sortedObj[0][0], sortedObj[sortedObj.length - 1][0]);
        let minIdx = sortedObj[0][0], maxIdx = sortedObj[sortedObj.length - 1][0];
        // return { Max: [keys_Arr[maxIdx], values_Arr[maxIdx]], Min: [keys_Arr[minIdx], values_Arr[minIdx]]};

        return [Number(minIdx), Number(maxIdx)];
    }
    return [0,0];
    
}

export const MaxMin2 = (data, currency) => {
    console.log(currency)
    if(isCurrencyExist(data, currency)) {
        const arr = daily(data, currency);
        const keys_Arr = Object.keys(arr);
        const values_Arr = Object.values(arr);
        const objVal = {};
        values_Arr.forEach((i, j) => {
            if(i !== null)
            objVal[j] = i;
        });
        var sortedObj = Object.entries(objVal).sort((a, b)=> {
            if(a[1] > b[1]) return 1;
            else return -1;
        })
        // console.log(sortedObj[0][0], sortedObj[sortedObj.length - 1][0]);
        let minIdx = sortedObj[0][0], maxIdx = sortedObj[sortedObj.length - 1][0];
        return { Max: [keys_Arr[maxIdx], values_Arr[maxIdx]], Min: [keys_Arr[minIdx], values_Arr[minIdx]]};
    }
    return [0,0];
    // return [minIdx, maxIdx];
}