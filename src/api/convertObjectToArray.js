export default function convertObjectToArray(obj) {
    return Object.values(obj)
}

//WARNING! THIS IS USED IN SEVERAL PARTS WHERE IT SHOULDN'T (SOME USE ARRAYS IN WRONG AREAS)