const object ={
    name : 'Abul',
    age: 1200,
    tritk : function(mome){
        this.age = this.age - mome;

    },
    hobby: {
        game: 'Football',
        food: 'Birgar',
        water:'Clene Woter'
    },
    money: [12,20,30,14],
    exam: function (prae) {
       
        const varb = this.hobby.food + prae;
        return varb
    },

    improve: function(hri){
        const oters = this.exam(' --999')
        const oter = 'Ami tumak valo basi'+ oters + hri;

        return oter;

    }
}

// 200

const vara = `hello ${object.hobby.water} end --  ${object.money[2]}`;


// 3000

const vare = () => 87

const pramiter = number => number / 17;

const sum = (fir, sen,thr) => {
    const total = fir + sen + thr
    const divid = total /2
    return divid
}

const sum2 = (fir, sec)=>{
    const firs = fir +7 + sec + 7;
    return firs
}



const tko = [12,30,22,41,25].map(x => x / 7);

const { c, ...others } = { a: 1, b: 2, c: 3, f:12, l:10 };



