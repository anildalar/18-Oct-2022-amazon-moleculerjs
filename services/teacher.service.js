


// Named Export JS Simple Object {}

module.exports = {
    //1. Property:Value
    name:"teacher",


    dependencies:[],

    actions:{
        showmystudent:{
            //1. Property:Value
            rest:{
                method:"GET",
                path:"/showstudent"
            },
            //2. Method
            async handler(ctx){
                //Every function return something
                return 'HI ' + ctx.params.name +", "+ ctx.params.surname;
            }
        }
    },


    //2. Method

    // Life Cycle method of a molecuer service
    created(){

    },

    async started(){

    },

    async stopped(){

    }
};