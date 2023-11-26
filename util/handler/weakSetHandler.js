/**
 * This should normally return the count of the Weak set.
 * @param {WeakSet} set 
 * @returns number
 */
export default function getSize(set){
    const count = 0 ;
    for(item in set){
        count ++;
    }

    return count;
}