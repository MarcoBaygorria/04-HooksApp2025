export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async (id: number) => {

    await new Promise(res => setTimeout(res, 2000));
    return {
        id: id,
        name: 'Marco Baygorria',
        location: 'Cabildo, Chile',
        role: 'Aprendiendo React'
    }
}