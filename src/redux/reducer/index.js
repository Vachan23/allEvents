const initialState = {
    username : "",
    events : [
        {
            eventName: 'Sunburn DJ SNAKE',
            startTime: '12:00',
            endTime: '3:00',
            location: 'Bangalore',
            descreption: 'Concert by DJ Snake',
        },
        {
            eventName: 'Holy Party!',
            startTime: '10:00',
            endTime: '5:00',
            location: 'Mumbai',
            descreption: 'Celebrating Holy festival',
        },
    ]
}


const rootReducer = (state = initialState , action) => {
    switch(action.type){
        case "ADD_DATA" : {
            return {
                ...state ,
                events : [...state.events , action.payload]
            }
        }
        default : {
            return state;
        }
    }
}

export default rootReducer;