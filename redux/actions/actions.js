export const changeName =(name)=>({
    type: 'SET_NAME',
    payload: name,
});
export const changeEmail =(email)=>({
    type: 'SET_EMAIL',
    payload: email,
});
export const setJwt =(token)=>({
    type: 'SET_JWT',
    payload: token,
});

export const setExercises =(items)=>({
    type: 'SET_EXERCISES',
    payload: items,
});
export const setPrograms =(items)=>({
    type: 'SET_PROGRAMS',
    payload: items,
});
export const setMeals =(items)=>({
    type: 'SET_MEALS',
    payload: items,
});

