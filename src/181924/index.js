/**
 * @param {any[]} arr - 배열
 */
function converter(arr) {
  let result = [...arr];

  /**
   * @param {number} departIndex - 출발점 인덱스
   */
  return (departIndex) => {
    /**
     * @param {number} arrivalIndex - 도착점 인덱스
     */
    return (arrivalIndex) => {
      const departure = arr.at(departIndex);
      const arrival = arr.at(arrivalIndex);
      
      result[departIndex] = arrival;
      result[arrivalIndex] = departure;
      
      return result;
    }
  }
}

export default function solution(arr, queries) {
  let result = [...arr];
  
  for (const query of queries) {
    result = converter(result)(query.at(0))(query.at(1));
  }
  
  return result;
}