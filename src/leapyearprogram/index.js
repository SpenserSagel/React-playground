function leapYear(year){
    if(year<1582){
        throw new Error('year is before 1582');
    }
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;



}

export default leapYear;